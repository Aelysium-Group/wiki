---
title: 🛜 Flux, Tinder, and Particles
order: 2
---

# 🛜 ARA

RustyConnector leverages ARA (Absolute Redundancy Architecture) for its code partitioning paradigm.
This paradigm leverages "Particles" and "Flux" elements.

Particles are "living, breathing" blocks of code which actively perform tasks and handle resources.
A Particle could be a websocket connection server, an event manager, or a DTO cache.

Particles can only be formed out of a Flux.
Flux is a paradigm that hides the existence of the underlying Particle (similar to a WeakReference), so that the underlying object can be stopped, started, and restarted, as needed.
Flux is the beating heart of this system because it allows system administrators to specifically restart entire sections of code without needing to restart their entire server.

Every Flux contains a configurator function.
Any time the Flux needs to create a new Particle (maybe the previous one was stopped). The Flux will generate it using the specific configurator, thus configuring and returning a brand-new Particle instance.

This wiki has an entire page on how ARA works which you can read. The following content on this page goes into the details of ARA as it pertains to RustyConnector.

## Longform References
You can use the full-length `RustyConnector` class to access the kernel and then attempt to access resources from there.
This method is the most verbose and also provides you full access to the ARA `Flux` object at each level, letting you customize
how your application reacts to certain edge-cases.
Below is one of the many ways you could fetch a family starting from the very beginning using `RustyConnector`.
```java
RustyConnector.Kernel(kernel -> {
    if(!(kernel instanceof ProxyKernel)) return;
    
    try {
        FamilyRegistry families = kernel.fetchModule("FamilyRegistry").observe(10, TimeUnit.SECONDS);
        Family family = families.find("default").orElseThrow().observe(10, TimeUnit.SECONDS);
        // found family!
    } catch(Exception e) {
        RC.Error(Error.from(e));
    }
});
```
::: warning
`RustyConnector.Kernel(Consumer)` is specifically a `.onStart()` method;
you'll cause memory leaks and unexpected behavior if you execute it anytime you want the kernel.

Instead, you can access the Kernel via either `RustyConnector.Kernel()` or `RC.Kernel()`.
Read further on to see the difference between these two methods.
:::

This implementation has an express advantage over the shorthand `RC` implementation you'll see in a moment
because in this implementation, if the `FamilyRegistry`, or even a specific `Family`, is unavailable (maybe it's being restarted or was shutdown for some reason)
this implementation will explicitly wait (in this case 10 seconds) for the resource to return.
If the resource doesn't return in time, then we throw a `TimeoutException`.

There are other methods to that can more gracefully handle cases where the resource is missing.

## Shorthand References

You can use the `RC` shorthand for direct access to specific resources.
Let's look at our family fetching example from earlier but using the `RC` shorthand this time.

```java
try {
    Family family = RC.P.Family("default");
} catch(Exception e) {
    RC.Error(Error.from(r));
}
```

::: warning
While the `RC` shorthand does seem convenient, there are some critical pitfalls that must be considered.
The `RC` shorthand strictly enforces a best-case scenario when it's used.

It's still running the same exact code we saw in our longform example, the only difference is that every single check in the chain is replaced with `.orElseThrow()`.

The `RC` shorthand will always resolve immediately: Either the expected response will be returned, or a NoSuchElementException will be thrown.
:::

Something to note about the `RC` shorthand is that it has specific namespaces for server and proxy environments.
You can use `RC.P` to access proxy specific resources, and you can use `RC.S` for server specific resources.
Any resources that are shared between both proxy and server can be accessed via the root `RC` namespace.

:::info
Because of inheritance, if you use the root `RC` namespace for accessing specific resources,
you may not be able to access environment specific methods because they're only available in specific environments.
:::

## Which Should I Use?
The answer is both.
Both the longform `RustyConnector` and short form `RC` accessors have their use cases.

Ask these questions:

### 1. Is my request critical?
Consider if your call is critical, if your call cannot be completed, do you have to throw out your entire request?
If the answer to this question is yes, you could consider using `Flux` options that opt to wait for a bit before giving up.
If your request is both critical and time sensitive, you could consider one of the options that waits for the resource but has a fallback if there's a timeout.

### 2. Is my request time-sensitive?
Consider if your call is of a time-sensitive manner.
Obviously you never want code to take longer than it needs to.
But what's the context?

Is a player requesting a resource and can wait a little bit for a response? Maybe consider using a longform method, you can set a timeout to wait, and if the timeout expires, the player can be told to try again.

Is a server attempting to register to the proxy and a family is unavailable? Servers ping the proxy at even intervals, consider trying the `RC` shorthand, if it doesn't resolve immediately, the server will just ping again anyways.

### 3. Does my request have a logical backup?
Consider if a placeholder or backup value is acceptable instead of the resource itself.
If a backup value is acceptable, you can choose to still wait some amount of time before resorting to that backup.
Or you can just simply resolve immediately with either the resource or the backup value.

-----

You can also mesh methods together.

For example, if you want an exception to be thrown if the Kernel doesn't exist, but you want to be patient for the LangLibrary.
You could mesh the two options together:
```java
LangLibrary lang = RC.Kernel().fetchModule("LangLibrary").observe(10, TimeUnit.SECONDS);
```

## Configuring A Particle
Particles are the lifeblood of ARA and RustyConnector.
But as you know, you can't have a running application, without configuring what it needs to do.

Let's start this section with an example.

```java
public class ExampleParticle implements Particle {
    protected ExampleParticle() {
        // This is the startup / boot logic of this process
        // Should never be publicly avilable for instantiation.
    }
    
    @Override
    public void close() {
        // This is the shutdown / cleanup logic of this process
        // Executed every time a Flux is shutting down the particle.
    }
    
    public static void main() {
        Flux<ExampleParticle> flux = Flux.of(()->{
            // Do configure logic like loading a config file for this particle.
            return new ExampleParticle();
        });
        
        // Now you have a flux!
    }
}
```

Additionally, the Particle's constructor should be made at least `protected` so that instances can only be obtained via the Tinder.
In the above example there's no parameters to pass around, but always keep this in mind.
The Tinder is used by the Flux to obtain new instances of the process in question.

When the process is being reloaded, the Flux will close the Particle, fetch the Tinder, and ignite a new Particle.

Generally speaking you're allowed to put boot logic for the Particle in either the ignite method or the Particle constructor.
In practice, however, we like having the separation where the ignite method is exclusively for configuring and instantiating,
and the constructor is for that boot logic.

## Particle/Module Collections
There are two classes that represent collections of modules in RustyConnector.

### `ModuleHolder`
The ModuleHolder interface is the base module containment class.
All it shows is that the class contains modules, and you can fetch all of them via the `.modules()` method.
The ModulesHolder interface is specifically important on platforms such as RC-Minecraft because the Lang entries
specifically allow users to climb up and down the entire module hierarchy, and the ModuleHolder interface is how the Minecraft
wrappers know that a module contains children.

### `ModuleCollection`
Implementing the `ModuleHolder` interface, the `ModuleCollection` class provides complete module management.
It's the class that the RustyConnector kernel uses to handle its own modules.
