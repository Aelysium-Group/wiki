# Path Parameters
When declaring a config via the `@Config` annotation. You can also declare path parameters which can be changed and fetched dynamically.
Consider the basic config.
```java
@Config("config.yml")
public class DefaultConfig {
    public static DefaultConfig New() {
        return DeclarativeYAML.load(DefaultConfig.class)
    }
}
```

## Setting Path Parameters
If we wanted to change the name of the config based on a parameter we could adjust the code as follows.
```java
@Config("{name}.yml")// [!code focus]
public class DefaultConfig {
    public static DefaultConfig New(String name) {// [!code focus]
        Printer printer = new Printer().pathParameters(Map.of("name", name));// [!code focus]
        return DeclarativeYAML.load(DefaultConfig.class, printer)// [!code focus]
    }
}
```
`Printer` is a special class that configures how dYAML will handle config declarations.
In this example, the path parameters are being adjusted on the printer to target the path parameter `name` and change it's value based on the parameter passed to `.New()`.

If we call `DefaultConfig.New("example-name")` we'll get a config called `example-name.yml`!

Path parameters also work on directory names as well.
```java
@Config("{name}/default.yml")// [!code focus]
public class DefaultConfig {
    public static DefaultConfig New(String name) {
        Printer printer = new Printer().pathParameters(Map.of("name", name));
        return DeclarativeYAML.load(DefaultConfig.class, printer)
    }
}
```
Calling `DefaultConfig.New("example-name")` will now generate a config `example-name/default.yml`.

## Reading Path Parameters
Reading path parameters in dYAML is nice and easy. Simply use the `@PathParameter` annotation along with a `String` field.
```java
@Config("{name}/default.yml")
public class DefaultConfig {
    @PathParameter("name");// [!code focus]
    public final String configName;// [!code focus]

    public static DefaultConfig New(String name) {
        Printer printer = new Printer().pathParameters(Map.of("name", name));
        return DeclarativeYAML.load(DefaultConfig.class, printer)
    }
}
```
The field will be populated with the value coresponding to the specified key once the `.New()` method is called.

:::danger
The field type for a field annotated with `@PathParameter` must be of type `String`.
:::