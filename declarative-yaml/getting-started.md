# Getting Started
The entry point for any config is the `@Config` annotation.
It can be used on any class declaration and provides the location data for your config's path location.
:::tip
The path will generate the file relative to the classloader making the call.
:::
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
        return DeclarativeYAML.From(DefaultConfig.class)// [!code focus]
    }// [!code focus]
}
```
