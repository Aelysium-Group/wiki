---
title: 📲 Item References
sidebar_position: 5
---

Item References provide shorthand methods for fetching commonly searched for resources.
Using an Item Reference is as simple as calling the Reference constructor along with a specific identification key.
Then when you're ready to fetch the Referenced item, you can use `.get()`.

A difference between an Item Reference and something native to Java such as a `WeakReference` is that a `WeakReference` references something that, at somepoint, already existed.
Alternatively, an Item Reference is more like a "prebuilt search query". Whether or not the item actually exists isn't known until `.get()` is called.

## Family
Searches for a family based on the ID assigned to it in `families.yml`.

```java
Family family = new Family.Reference(familyID).get();
```

Family References have an additional Override for the `.get()` method which allows for a boolean.
```java
// Behaves the same as .get();
Family family = new Family.Reference(familyID).get(false);

// Will fetch the Root Family if the referenced family could not be found.
Family family = new Family.Reference(familyID).get(true);
```

:::info
`Family.Reference` is backed by HashMap and should have near-instant responses.
:::

## MCLoader
Searches for an MCLoader with the specified `UUID`.
```java
MCLoader mcLoader = new MCLoader.Reference(uuid).get();
```

::: info
`MCLoader.Reference` is backed by HashMap and should have near-instant responses.
:::

## Player
### UUID-based Reference
Searches for a player based on their UUID.
```java
Player player = new Player.Reference(UUID.randomUUID()).get();
```
::: info
`Player.Reference` is backed by a database-synced HashMap. Theoretically there should be near-instant responses, however, databases can be weird at times.
:::

### Username-based Reference
Searches for a player based on their Username.
```java
String username = "Notch";
Player player = new Player.UsernameReference(username).get();
```
::: info
`Player.UsernameReference` is backed by two Hash-Map references, one of them is backed by the database. Responses should be pretty fast but may be delayed.
:::

## Exceptions
Item References will __only__ ever return the item they're referencing.
If an Item Reference is unable to fetch the item, it will throw a `NoSuchElementException`.

::: danger
It should be noted that Item References make direct static calls to the RustyConnector Flame.
Make sure you only ever use them inside of `Tinder#onStart`!
:::