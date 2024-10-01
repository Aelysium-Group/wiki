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