---
title: 🎟️ Events
description: "Events make the world go round..."
sidebar_position: 3
---

The RustyConnector Proxy Toolkit provides a handful of events that can be acted upon.
The RustyConnector Event API is a particularly simple one, extra features such as event canceling and priority don't exist currently. 

## Event Listeners
Creating an event listener is a simple custom class creation. Below is an example of an Event Listener that
listens for when new MCLoaders are registered.
```java title="OnMCLoaderRegister.java"
public class OnMCLoaderRegister extends Listener<RegisterEvent> {
    public void handler(RegisterEvent event) {
        System.out.println(event.mcLoader() + " was registered to the family "+event.family().id());
    }
}
```
The event listener can then be registered to RustyConnector's Event manager.
```java title="Proxy Plugin"
VelocityTinder tinder = RustyConnector.Toolkit.proxy().orElseThrow();
tinder.onStart(flame -> {
    flame.services().events().on(RegisterEvent.class, new OnMCLoaderRegister());
});
```

::: danger
All events are fire-and-forget. As such you'll have to ensure you implement proper Thread-safety in your module.
:::
