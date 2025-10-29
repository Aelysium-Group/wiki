---
title: 🎟️ Events
order: 3
---

# 🎟️ Events

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
    RC.Kernel().fetchPlugin("EventManager").onStart(m -> {
        m.listen(OnMCLoaderRegister.class);
    });
```
::: info
When registering listeners, you want to call the `.onStart()` method on the EventListener's Flux.
This way, any time the EventManager ends up getting restarted, your listeners will be re-applied.
If you don't add an `.onStart()` listener, then next time the EventManager is restarted your listeners will no-longer be applied.
:::

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

## Custom Events
Creating custom events is a pretty straightforward process.
To start you have to determine whether you want your event to be cancelable or not.



Implementing a custom event is as simple as extending either `Event` or `Event.Cancelable`.
The event itself is just a generic class, you are free to add any custom fields or methods you want.

::: tabs
== Event

```java
public class CustomEvent extends Event {
    public CustomEvent() {
        super();
    }
}
```

Firing a custom event is also pretty straightforward. There's no need to first "register" or "declare" your event, simply start firing it.

```java
CustomEvent event = new CustomEvent();
RC.EventManager().fireEvent(event);
```

== Event.Cancelable
<div class="info custom-block">
    <p class="custom-block-title">🔎 Info</p>
    <p>
        Cancelable events can be canceled by the event handlers.
        If no event handlers cancel the event then the original process should proceed.
        If an event handler does cancel the event, then the original process should stop.
    </p>
</div>

```java
public class CustomEvent extends Event.Cancelable {
    public CustomEvent() {
        super();
    }
}
```

Firing a custom event is also pretty straightforward. There's no need to first "register" or "declare" your event, simply start firing it.

Firing a cancelable event will return a `CompletableFuture`.
To properly support a cancelation you resolve the future at somepoint so you can read the cancelation state.

```java
CustomEvent event = new CustomEvent();
boolean canceled = RC.EventManager().fireEvent(event).get(1, TimeUnit.MINUTES);
if(canceled) return;
```
:::

