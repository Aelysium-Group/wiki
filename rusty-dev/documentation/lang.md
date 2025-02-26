---
title: 🌐 Lang
order: 5
---

# 🌐 Lang

RustyConnector has an all-new Lang system that allows for fluid application of lang and lang overriding.

To create new language entries, you simply annotate a method or field with `@Lang`.
The `Lang` annotation allows you to specify a unique identifier for each language entry, which can then be used throughout your application.

## Static Language Entries
For static lang entries that don't need to change, you can just use fields.

```java
@Lang("example-fieldWithString")
public static final String testStringExample = "This lang entry uses a String.";

@Lang("example-fieldWithComponent")
public static final Component testComponentExample = Component.text("This lang entry uses a Component.");

@Lang("example-fieldWithStringArray")
public static final String[] testStringArrayExample = {
    "This lang entry",
    "uses a String array"
};

@Lang("example-fieldWithStringList")
public static final List<String> testStringListExample = List.of(
    "This lang entry",
    "uses a String array"
);
```
::: info
Make sure that any static lang entries are public static final fields.

**Supported Types:**
- `String`
- `Component`
- `String[]`
- `List<String>`
:::

## Dynamic Language Entries

If you need dynamic lang entries which accept parameters.
You can annotate methods with instead.
```java
@Lang("example-methodWithString")
public static String usage(String name) {
    return "Hello "+name+"!";
}

@Lang("example-methodWithComponent")
public static Component usage(String name) {
    return Component.text("Hello "+name+"!");
}
```
::: info
Make sure that any dynamic lang entries are public static methods.

**Supported Return Types:**
- `String`
- `Component`
:::

## Registering Language Nodes

Once you've created the lang entries of your choice, you can register the class itself to the LangLibrary.
```java
RC.Kernel().fetchModule("LangLibrary").onStart(l -> {
    ((LangLibrary) l).registerLangNodes(ServerLang.class);
});
```
::: info
When registering new lang nodes, you want to call the `.onStart()` method on the LangLibrary's Flux.
This way, any time the LangLibrary ends up getting restarted, your lang nodes will be re-applied.
If you don't add an `.onStart()` listener, then next time the LangLibrary is restarted your lang nodes won't be re-applied.
:::

## Overriding Language Nodes (For Translators)
You can easily override existing lang entries by simply creating your own entries which use the same name.
As long as your module loads after the "competing" module, your lang nodes will over-write theirs.

::: danger
While you're allowed to override other lang entries, you are not permitted to change the method definition
as that would break all compatibility with code currently using the lang entry.
:::

## Using Language Entries
Calling a lang entry is simple.
You can use the `RC` shorthand to quickly fetch the entry, or you can use the LangLibrary if you have access to it readily available.
```java
Component entry = RC.Lang("example-langEntry").generate();
```
```java
Component entry = langLibrary.lang("example-langEntry").generate();
```
::: info
Regardless of the type used when defining your lang entry;
a Component is always the ultimate return type.
You can log the component to the console using `RC.Adapter().log()` or send it to a user `RC.Adapter().messagePlayer()`
:::

For any dynamic lang entries that use parameters, you can directly pass parameters to the `.generate()` method.
You can use any type as a Lang parameter. The LangLibrary will ensure that the provided parameters match the parameters defined in the method definition.
```java
Component entry = RC.Lang("example-langEntry").generate("Example parameter!");
```

::: info
The LangLibrary will never fail to return a Component.

If a lang node doesn't exist, the entry will resolve to: `[Missing: <The requested lang node>](<error uuid>)`

If an exception was thrown while attempting to build or run the lang entry, the entry will resolve to: `[Error: <The requested lang node>](<error uuid>)`
:::