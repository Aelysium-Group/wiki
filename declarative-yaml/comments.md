---
title: ✒️ Comments
----

# Comments

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

## Comment Injecting
You can dynamically replace parts of a comment with your own text.
Lets take the following example where we've defined a key in our comment called `persons_name`.
```java
@Config("config.yml")
public class DefaultConfig {
    @Comment({
        "The email for {persons_name}."// [!code focus]
    })
    @Node
    public final String email = "contact@example.com";

    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
We can adjust what gets printed here by editing the Printer.
```java
@Config("config.yml")
public class DefaultConfig {
    @Comment({
        "The email for {persons_name}."
    })
    @Node
    public final String email = "contact@example.com";

    public static DefaultConfig New(String name) {// [!code focus]
        Printer printer = new Printer().commentReplacements(Map.of("persons_name", name));// [!code focus]
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
By running `DefaultConfig.New("John Doe")` a config with the following data will be generated.
```yaml
# The email for John Doe.
email: "contact@example.com"
```