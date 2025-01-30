---
title: 🎟️ Events
description: "Events make the world go round..."
order: 3
---

RustyConnector provides a [handful of events](https://maven.mrnavastar.me/javadoc/releases/group/aelysium/rustyconnector-core/0.9.0) for many actions.

## Event Listeners
Creating an event listener is a class. Below is an example of an event listener which listens for when new servers are registered.
```java
public class OnServerRegister {
    @EventListener
    public static void handler(ServerRegisterEvent event) {
        event.family().executeNow(
                f -> System.out.println(event.server() + " has registered to the family "+f.id()),
                () -> System.out.println(event.server() + " has registered.")
        );
    }
}
```
The event listener can then be registered to RustyConnector's event manager.
```java
Particle.Flux<? extends ProxyKernel> kernelFlux = RustyConnector.Proxy().orElseThrow();
kernelFlux.onStart(kernel -> {
    kernel.fetchPlugin(EventManager.class).onStart(m -> {
        m.listen(OnMCLoaderRegister.class);
    });
});
```

## Priority
Event listeners will run in the order of their priority.
You can set priority via the `@EventListener` annotation.
```java
public class OnServerRegister {
    @EventListener(order = 5) // [!code focus]
    public static void handler(ServerRegisterEvent event) {
        event.family().executeNow(
                f -> System.out.println(event.server() + " has registered to the family "+f.id()),
                () -> System.out.println(event.server() + " has registered.")
        );
    }
}
```

::: info
Event listeners are executed in descending order of `order`.
:::

## Canceling
Some events extend `Event.Cancelable` and as such can be canceled.
```java
public class OnServerRegister {
    @EventListener
    public static void handler(ServerRegisterEvent event) {
        Server server = event.server(); // [!code focus]
        if(!server.id().equals("pish_posh")) return; // [!code focus]
        
        event.canceled(true, "how dare you name your server that!"); // [!code focus]
    }
}
```
Canceling an event will cause all future event listeners to ignore the event and ultimately, the caller will prevent the original request.

If you want your event listener to still run even if an event has already been canceled, you can add the `ignoreCanceled` flag to the `@EventListener` annotation.
```java
public class OnServerRegister {
    @EventListener(ignoreCanceled = true) // [!code focus]
    public static void handler(ServerRegisterEvent event) {
        Server server = event.server();
        if(!server.id().equals("pish_posh")) return;
        
        event.canceled(true, "how dare you name your server that!");
    }
}
```
