---
title: 🌫️ Haze
order: 7
---

# 🌫️ Haze
RustyConnector has a built-in database abstraction layer.
This layer allows you, the module developer, to build your module with database integration, without concerning yourself witht he internals of the database itself.
By simply depending, or soft-depending on `haze`, you can then leverage RustyConnector's HazeProvider.

:::info 🔎 HOW IT WORKS
All database technologies (both SQL, and NoSQL) have various concepts that are universal.
This includes concepts such as tables/collections, columns/schemas, etc.

Haze leverages this fact and provides a high-level abstraction layer which supports all of these commonalities.
The system administrator installs a Haze Driver which handles Haze's interactions with a database,
and then you, the module writer, simply calls the Haze abstraction and you'll automatically be interacting with that database driver.

All you need to do is make sure you tell your users that your module supports Haze.
You'll also need to give your users the ability to provide the name of database(s) that you can use.
You shouldn't just randomly pick a database from the Haze provider.
:::

## Getting Started
You can access the Haze Provider on both the proxy and server.
If your module requires users install a Haze driver on the server, make sure you tell them!
By default, users are only instructed to put Haze on the proxy.

```java
HazeProvider haze = RC.Haze();
```

Or you can fetch a specific database by using
```java
HazeDatabase db = RC.Haze("SomeDatabase");
```

# Creating a Data Holder (Table/Collection)
Creating a new Data Holder can be done directly from the HazeDatabase.

:::warning
There's no promise on what will happen if you try to create a data holder that already exists.
So maybe consider checking if a data holder already exists with the name you want to use.
:::
```java
    HazeDatabase db = RC.Haze("SomeDatabase").orElseThrow();
    
    if(db.doesDataHolderExist("rcm-yourModule-users")) return;

    DataHolder table = new DataHolder("rcm-yourModule-users");
    Map<String, Type> columns = Map.of(
        "id", Type.INT(4).nullable(false).primaryKey(true),
        "friend1_id", Type.STRING(128).nullable(false),
        "friend2_id", Type.STRING(128).nullable(false),
        "created_at", Type.DATETIME().nullable(false)
    );
    columns.forEach(table::addKey);
    db.createDataHolder(table);
```

:::info
When deciding on the data type for columns, always keep in mind that the policy for "length" is that the column must always fit a value within that length.

"length" depends on the specific type too. For STRING, length is the number of characters. For numbers and binary, length is the number of bytes.

As long as the data is less than or equal to that length, the data will be accepted.

Thinking in terms of SQL for a moment. A `STRING(128)` will translate into a `varchar(128)`. It will NOT translate into a `char(128)`, because that would enforce an exact length of `128` which would break this rule.
:::

## Supporting Composite Keys
Certain database technologies don't support Composite Keys.
Because of this, Haze can't either.
To achieve the same effect, you can concat the fields you want, into a single field and store them in a new "key" column.
Additionally, if you want to enforce a single size you could consider using a SHA-256 hash to generate that composite key before you insert it.
```java
    HazeDatabase db = RC.Haze("SomeDatabase").orElseThrow();
    
    if(db.doesDataHolderExist("rcm-yourModule-friends")) return;

    DataHolder table = new DataHolder("rcm-yourModule-friends");
    Map<String, Type> columns = Map.of(
        "hashed_id", Type.BINARY(32).nullable(false).primaryKey(true),// [!code focus]
        "friend1_id", Type.STRING(128).nullable(false),// [!code focus]
        "friend2_id", Type.STRING(128).nullable(false),// [!code focus]
        "created_at", Type.DATETIME().nullable(false)// [!code focus]
    );
    columns.forEach(table::addKey);
    db.createDataHolder(table);
```

## Default Values
Haze has no way of supporting default values because their implementation is far to variable in various database technologies.
As such, if you have a value that you'd like to be default, simply set it as not nullable, and make sure you are always providing a value when you create new entries.

## Stored Procedures
Stored Procedures are not supported by Haze.
The reason is simple, making a request to a procedure would be quite simple, but how do you create the stored procedure?
You would have to manually go into the database and create it.
It *could* be accomplished by building an abstract query layer that can serialize down into the database specific parts, but that's a bit complicated for now.

As such, we chose not to even open that can of worms *yet*.

# Making Requests
Currently, Haze supports five types of data requests.
- **Read** - Allows the caller to read filtered data from a data holder.
- **Create** - Allows the caller to insert data into a data holder.
- **Delete** - Allows the caller to delete data from a data holder based on a filter.
- **Update** - Allows the caller to update data in a data holder based on a filter.
- **Upsert** - Allows the caller to update data, if it exists, or create that data, if it doesn't exist.

## Read
Creating read requests is quite easy through the database object.
Once you have your ReadRequest you can apply filters and then ultimately run the request.

Read requests will output the data in the form of deserialized objects.
The requests use GSON for (de)serialization so make sure your class is setup properly.
```java
public record FriendsDTO (
    int id,
    @NotNull String player1_id,
    @NotNull String player2_id,
    @NotNull LocalDateTime created_at
) {}
```

```java
ReadRequest sp = db.newReadRequest("rcm-yourModule-users");
sp.withFilter(
    Filter
        .by("player1_id", playerID, Filter.EQUALS))
        .OR("player2_id", playerID, Filter.EQUALS))
);
Set<FriendsDTO> response = sp.execute(FriendsDTO.class);
```

If you want to further thin out the results you get, you can use `.executeWithFilter`.
This will allow you to run a filter on each entry in the response.

The following example will filter the results based on if the friendship was started more than 180 days ago.
```java
ReadRequest sp = db.newReadRequest("rcm-yourModule-users");
sp.withFilter(
    Filter
        .by("player1_id", playerID, Filter.EQUALS))
        .OR("player2_id", playerID, Filter.EQUALS))
);
Set<FriendsDTO> response = sp.executeWithFilter(// [!code focus]
    entry -> ChronoUnit.DAYS.between(entry.getDateTime("created_at"), LocalDateTime.now()) > 180,// [!code focus]
    FriendsDTO.class// [!code focus]
);// [!code focus]
```
:::info
The `.executeWithFilter` method performs the provided function on uncompiled versions of each entry.
An entry is only deserialized if it passes the filter.
Otherwise, it'll just be thrown away.
This system allows us to optimize our use of memory and not waste resources on entries that you don't even use.
:::

## Delete
Similar to read requests, you can delete entries by creating a DeleteRequest, applying a filter and executing it.
```java
DeleteRequest sp = db.newDeleteRequest("rcm-yourModule-users");
sp.withFilter(
    Filter
        .by("player1_id", playerID, Filter.EQUALS))
        .OR("player2_id", playerID, Filter.EQUALS))
);
sp.execute();
```

## Update
Update requests use a combination of filters and parameters to determine what to put where.
The following example will update the "created_at" column to the current date and time, where either player1_id or player2_id matched the passed value.
```java
UpdateRequest sp = db.newUpdateRequest("rcm-yourModule-users");
sp.withFilter(
    Filter
        .by("player1_id", playerID, Filter.EQUALS))
        .OR("player2_id", playerID, Filter.EQUALS))
);
sp.parameter("created_at", LocalDateTime.now());
sp.execute();
```

As a bit of housekeeping, if your system uses a manual-made composite key, you'd need to manually update that key if you are adjusting any of the values that it depends on.
```java
UpdateRequest sp = db.newUpdateRequest("rcm-yourModule-users");
sp.withFilter(
    Filter.by("player1_id", playerID, Filter.EQUALS))
);

String newID = UUID.randomUUID().toString();
sp.parameter("hashed_id", SHA256.hash(playerID + "-" + newID));
sp.parameter("player2_id", newID);
sp.parameter("created_at", LocalDateTime.now());
sp.execute();
```

## Create
Creating new entries is quite simple.
```java
CreateRequest sp = db.newCreateRequest("rcm-yourModule-users");
String player1ID = UUID.randomUUID().toString();
String player2ID = UUID.randomUUID().toString();

sp.parameter("hashed_id", SHA256.hash(player1ID + "-" + player2ID));
sp.parameter("player1_id", player1ID);
sp.parameter("player2_id", player2ID);
sp.parameter("created_at", LocalDateTime.now());

sp.execute();
```

## Upsert
The Upsert operation is quite straight forward.
You specify the filter you'd like to search by, and provide the

:::warning
Because of restrictions with certain NoSQL databases.
Upsert only operates if there's a duplicate primary key.
:::
```java
UpsertRequest sp = db.newCreateRequest("rcm-yourModule-users");
String player1ID = UUID.randomUUID().toString();
String player2ID = UUID.randomUUID().toString();

sp.parameter("hashed_id", SHA256.hash(player1ID + "-" + player2ID));
sp.parameter("player1_id", player1ID);
sp.parameter("player2_id", player2ID);
sp.parameter("created_at", LocalDateTime.now());

sp.execute();
```

## (De)Serialization
Haze uses (de)serialization when specifically handling read requests.
The system is powered by Gson, as such the rules for serializable objects applies there.

Below is an example of our FriendsDTO.
```java
public record FriendsDTO (
    int id,
    @NotNull String player1_id,
    @NotNull String player2_id,
    @NotNull LocalDateTime created_at
) {}
```

Try to follow these rules when making a Data Transfer Object (DTO).

1. Ensure field names match the names of the Data Holder's columns. If you can't match exactly, use Gson's `@SerializedName` annotation.
2. Use the lowest-level data type you possibly can (`int` instead of `Integer` for example).
3. If fields aren't nullable, annotate them as `NotNull`