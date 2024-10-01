---
title: 🛜 Services
sidebar_position: 2
---

Services are the framework that RustyConnector is based off of.
Every process in RustyConnector is a Service.
Sometimes Services might contain sub-services.

Let's look at the Service interface quickly.
```java
public interface Service {
    /**
     * Kill the service.
     * Every service is solely responsible for killing its own processes.
     */
    void kill();
}
```

Services all have a single common denominator, they can be stopped via the `.kill()` method.
When `.kill()` is called on a Service, it is expected that not only the Service itself stops, but also all sub-processes of that service.
With this setup, we can simply call `.kill()` on the main plugin Service and the entire plugin will shut down!

## Accessing RustyConnector Services
The root RustyConnector Service is the Flame, which you access via Tinder.
From there you can access the main Services associated with the Flame.

```java title="Proxy Plugin"
VelocityTinder tinder = RustyConnector.Toolkit.proxy().orElseThrow();

tinder.onStart(flame -> {
    flame.services();
});

tinder.onStop(() -> {
});
```

Notice how we have to access Flame from within an `.onStart()` method? Flame itself is a Service, which means that it isn't guaranteed to be active.
When we call `.onStart()` we know that we'll be able to access Flame once it's active. Alternatively `.onStop()` will run when `.kill()` is used on Flame.

::: info
While building your RustyConnector Module; it's a good practice to write as much logic outside of `.onStart()` as you possibly can.

You should only need `.onStart()` for RustyConnector specific functions such as registering Event Listeners.
:::