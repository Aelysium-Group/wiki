---
title: Getting Started
---
# Getting Started
The entry point for any config is the `@Config` annotation.
It can be used on any class declaration and provides the location data for your config's path location.
```java
@Config("config.yml")
public class DefaultConfig {}
```
Once a config has been declared, it can be loaded using `DeclarativeYAML.load()`.
We like to put this into a static method which will return an instance of the class.
```java
@Config("config.yml")
public class DefaultConfig {
    public static DefaultConfig New() {// [!code focus]
        return DeclarativeYAML.load(DefaultConfig.class)// [!code focus]
    }// [!code focus]
}
```

## Nodes
Declaring a new configuration node is as easy as adding a class member to your class and annotating it with `@Node`.
```java
@Config("config.yml")
public class DefaultConfig {
    @Node// [!code focus]
    public final String name = "John Doe";// [!code focus]

    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
Running `DefaultConfig.New()` will generate a new config file just containing:
```yaml
name: "John Doe"
```
It's important to note that whatever value you assign to a node will be considered the default value. Now that the name node exists in the config file, it can be edited and that new value will injected into the `name` field even if it's final!
If we edit the value of the config to be a different name:
```yaml
name: "Sam Doe" // [!code warning]
```
Accessing the field via the `New()` method will return the following:
```java
DefaultConfig config = DefaultConfig.New();
System.out.println(config.name);
```
```
Sam Doe
```

Even though the default value of `name` was `John Doe`, editing that value in the config will change what the field has stored once you actually call it.

:::tip
Setting the field as `final` is not required and is purely personal preference. Similarally, the field doesn't have to be public either, you can set it to `protected` or `private` with no issue.
:::

### Ordering
A major shortcoming of Java annotations is that they're inherently unordered.
If used without any other consideration, YAML nodes would be randomly distributed in the config file any time it's generated.

To address this, dYAML has two ordering systems in-place.
By default, all nodes are ordered alphabetically in descending order.

To add an extra level of control to users that want it, you can also specify the exact index order you want nodes to appear in via the `@Node` annotation.
```java
@Config("config.yml")
public class DefaultConfig {
    @Node(0) // Defaults to 0, so specifying it here isn't actually necessary. // [!code focus]
    public final String name = "John Doe";

    @Node(1)// [!code focus]
    public final String email = "contact@example.com";

    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
If two nodes happen to have the same index value, they will then be alphabetically ordered in descending order to decide which will be renderd first.

### Targeting Nodes
dYAML will automatically parse the field name and use it as the name of the node in YAML. This parsing system expects field names to be written in `camelCase` as a default as it's the defacto-standard for Java field names.

Field names will be parsed and converted to `kebab-case` before being injected into the YAML file.
```java
@Node
public final String firstName = "John Doe";
```
```yaml
first-name: "John Doe"
```

dYAML also supports multi-level node targeting by blending `camelCase` with `snake_case`. Separating node names with underscores (`_`) will declare a new child node.
```java
@Node
public final String usersNames_firstName = "John";
@Node(1)
public final String usersNames_lastName = "Doe";
```
```yaml
users-names:
    first-name: "John"
    last-name: "Doe"
```

We understand that not all users will want to use this field name method for declaring YAML node names. As such, the `@Node` annotation comes equiped with an extra `key` attribute that you can use instead to specifically target a node. If the `key` attribute is defined, the field name will be ignored.
```java
@Node(key = "users-names.first-name")
public final String someFieldName = "John";
@Node(value = 1, key = "users-names.first-name")
public final String someOtherFieldName = "Doe";
```
```yaml
users-names:
    first-name: "John"
    last-name: "Doe"
```

## Comments
Comments are an integral part of any YAML experience. They can make or break how easy your configs are.
Comments can be declared the `@Comment` annotation. Comments can be attached to both the class declaration (called a header comment) or to individual nodes.
```java
@Config("config.yml")
@Comment({// [!code focus]
    "This is an example header comment!"// [!code focus]
})// [!code focus]
public class DefaultConfig {
    @Comment({// [!code focus]
        "The name of the person."// [!code focus]
    })// [!code focus]
    @Node
    public final String name = "John Doe";

    @Comment({// [!code focus]
        "The email for the person."// [!code focus]
    })// [!code focus]
    @Node(1)
    public final String email = "contact@example.com";

    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
```yaml
# This is an example header comment!

# The name of the person.
name: "John Doe"

# The email for the person
email: "contact@example.com"
```
The `@Comment` annotation takes an array of strings. Hashtags (`#`) are not required when entering a comment, they'll be added later. Though, if you do add a hashtag, dYAML won't touch the string.

## Data Types
dYAML uses a powerfull serialization system for converting Java objects to and from YAML. The supported data types are:
- `String`
- `Serializable`
::: details Primitives
- `byte`
- `short`
- `int`
- `long`
- `float`
- `double`
- `char`
- `boolean`
:::
::: details Primitive Wrappers
- `Byte`
- `Short`
- `Integer`
- `Long`
- `Float`
- `Double`
- `Character`
- `Boolean`
:::
::: details Lists
- `List<Byte>`
- `List<Short>`
- `List<Integer>`
- `List<Long>`
- `List<Float>`
- `List<Double>`
- `List<Character>`
- `List<Boolean>`
- `List<String>`
- `List<Serializable>`
:::
::: details Sets
- `Set<Byte>`
- `Set<Short>`
- `Set<Integer>`
- `Set<Long>`
- `Set<Float>`
- `Set<Double>`
- `Set<Character>`
- `Set<Boolean>`
- `Set<String>`
- `Set<Serializable>`
:::
::: details Maps
- `Map<String, Byte>`
- `Map<String, Short>`
- `Map<String, Integer>`
- `Map<String, Long>`
- `Map<String, Float>`
- `Map<String, Double>`
- `Map<String, Character>`
- `Map<String, Boolean>`
- `Map<String, String>`
- `Map<String, Serializable>`
:::