---
title: Custom Objects
---

# Custom Objects

Sometimes you want even more control over typing than basing collections and primitives.
Custom objects provide that! To get started, make a class and extend Serializable.
```java
public class CustomObject extends Serializable {
    public CustomObject() {
        super();
    }
}
```
::: danger
When using Serializable, you're required to at least provide a zero-arguments constructor!
:::

Custom objects leverage the same class declaration system that dYAML uses for config declaring.
You define the fields you want, and dYAML will handle them accordingly.
Additionally, you can add `@Nullable` to fields if you want to allow for null values.
```java
public class CustomObject extends Serializable {
    @Node
    public final String name;

    @Node(1)
    public final String email;

    @Comment({
        "Some comment"
    })
    @Node(2)
    public final String phone;

    // For caller to create a default version.
    public CustomObject(String name, String email, String phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    public CustomObject() {
        this("John Doe", "contact@example.com", "(777) 777-7777";
    }
}
```
Additionally, you can add `@Nullable` to fields if you want to allow for null values.
```java
public class CustomObject extends Serializable {
    @Node
    public final String name;

    @Node(1)
    @Nullable // [!code focus]
    public final String email;

    @Comment({
        "Some comment"
    })
    @Node(2)
    public final String phone;

    public CustomObject(String name, String email, String phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    public CustomObject() {
        this("John Doe", "contact@example.com", "(777) 777-7777";
    }
}
```

:::tip
Custom Objects allow for the same data types as dYAML class declarations.
See [Data Types](/declarative-yaml/data-types.md) for more details.
:::

## Custom Objects in Configs
Now that you have a custom object, you can include it in your config just like any other data type.
```java
@Config("config.yml")
public class DefaultConfig {
    @Node
    public final CustomObject user = new CustomObject();

    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```
```yaml
user:
    name: "John Doe"
    email: "contact@example.com"
    phone: "(777) 777-7777"
```