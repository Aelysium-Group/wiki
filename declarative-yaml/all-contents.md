---
title: All Contents
---

# All Contents

In some cases you may just want to load all the contents of a file into a single field.
This can be done using the `@AllContents` annotation.
```java
@Config("config.yml")
public class DefaultConfig {
    @AllContents;// [!code focus]
    public final byte[] contents;// [!code focus]

    public static DefaultConfig New() {
        return DeclarativeYAML.From(DefaultConfig.class)
    }
}
```

:::danger
The field type for a field annotated with `@AllContents` must be of type `byte[]`.
:::
