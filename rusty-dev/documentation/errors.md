---
title: ‼️ Errors
order: 6
---

# ‼️ Errors
RustyConnector has a built-in, expressive, error handling system which keeps complicated stacktraces cleaned out of the main-line terminal
while also allowing callers to provide additional context for errors.

## Throwing Errors
The title for this section is a little misleading because we aren't exactly "throwing" the errors.
Instead, we use RustyConnector's built-in ErrorRegistry to log errors we encounter.
You can use the `RC` shorthand to quickly register the error, or you have access to the ErrorRegistry readily available, you can register the error directly.
```java
try {
    throw new Exception();
} catch(Exception e) {
    RC.Error(Error.from(e));
}
```
```java
try {
    throw new Exception();
} catch(Exception e) {
    errorRegistry.register(Error.from(e));
}
```

The `RC.Error()` example might seem a little wordy and confusing but all you need to worry about is that `RC.Error()` is a proxy for `errorRegistry.register()`.
What's important is the `Error.from()` part of this code.

::: info
Upon registering an error, it will quietly be stored in the ErrorRegistry, it will not be logged to the console at all.
If an error is urgent and needs to be logged immediately. You can indicate so by flipping the `urgent` flag.
```java
RC.Error(Error.from(e).urgent(true));
```
:::

## Reading Errors
Once errors have been registered to the ErrorRegistry, the caller is then able to go back and read them.
The ErrorRegistry has a default cache size of 200, however this can be changed programmatically if needed.
```java
List<Error> allErrors = RC.Errors().fetchAll();
```

If you already know the exact error that needs to be shown, you can display errors using the `.fetch()` method.
```java
UUID uuid = // some UUID;
Optional<Error> error = RC.Errors().fetch(uuid);
```