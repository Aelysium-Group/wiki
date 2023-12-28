---
title: 🎟️ Events
description: "Events make the world go round..."
sidebar_position: 3
---

:::danger
This page is still under construction
:::

The RustyConnector Proxy Toolkit provides a handful of events that can be acted upon.

## Event Listeners
Creating an event listener is a simple custom class creation. Below is an example of an Event Listener that
listens for when new MCLoaders are registered.
```java title="OnMCLoaderRegister.java"
public class OnMCLoaderRegister extends Listener<RegisterEvent> {
    @Override
    public void handler(RegisterEvent event) {
        System.out.println(event.mcLoader() + " was registered to the family "+event.family().id());
    }
}
```
The event listener can then be registered to RustyConnector's Event manager.
```java title="Proxy Plugin"
VelocityTinder tinder = RustyConnector.Toolkit.proxy().orElseThrow();
tinder.onStart(flame -> {
    flame.services().events().on(new OnMCLoaderRegister());
});
```

:::caution
All events are fire-and-forget. As such you'll have to ensure you implement proper Thread-safety in your module.
:::

## Event Priority
There are five levels of priority that Listeners can use:

| Priority       | Value               |
| -------------- | ------------------- |
| `VERY_FIRST`   | `Integer.MIN_VALUE` |
| `BEFORE_NATIVE`| `-1`                |
| `NATIVE`       | `0`                 |
| `AFTER_NATIVE` | `1`                 |
| `VERY_LAST`    | `Integer.MAX_VALUE` |
By default, all RustyConnector Listeners are `NATIVE` priority, and all module Listeners are `AFTER_NATIVE` priority.
If you'd like to adjust the priority of your Listener you can alter the `@Handler` annotation on your Listener.
```java title="OnMCLoaderRegister.java"
public class OnMCLoaderRegister extends Listener<RegisterEvent> {
    @Override
    @Handler(priority = Priority.VERY_FIRST)
    public void handler(RegisterEvent event) {
        System.out.println(event.mcLoader() + " was registered to the family "+event.family().id());
    }
}
```

### Canceling Events
:::caution
RustyConnector fires events based on activities that have happened already.
Canceling an event won't necessarily prevent the associated activity from happening.

For example, canceling a `RegisterEvent` will not prevent the MCLoader from being registered, because that event is fired after the MCLoader has already been registered. It will just stop future Event Listeners from executing.
:::

Events can be canceled using the `Event#setCanceled()` method. Once an event is canceled, any upcoming event listeners will ignore that event.

```java title="OnMCLoaderRegister.java"
public class OnMCLoaderRegister extends Listener<RegisterEvent> {
    @Override
    @Handler(priority = Priority.VERY_FIRST)
    public void handler(RegisterEvent event) {
        System.out.println(event.mcLoader() + " was registered to the family "+event.family().id());
        event.setCanceled(true);
    }
}
```

Please keep in mind that if you cancel an Event when your listener has low priority, it may not effect anything.