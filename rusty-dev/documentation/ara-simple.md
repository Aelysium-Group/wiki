---
title: 🛜 Flux, Tinder, and Particles
order: 2
---

# 🛜 Flux, Tinder, and Particles

RustyConnector leverages ARA (Absolute Redundancy Architecture) for its code partitioning paradymn.
The way it works, if you have Tinder, Flux, and Particles.

Particles are "living, breathing" blocks of code which actively perform tasks and handle resources.

Particles can only be formed out of a Flux.
Flux is a paradigm that hides the existence of the underlying Particle (similar to a WeakReference), so that the underlying object can be stopped, started, and restarted, as needed.
Flux is the beating heart of this system because it allows system administrators to specifically restart entire sections of code without needing to restart their entire server.

Every Flux is backed by a Tinder. The Tinder can be thought of as the "configurator".
Any time the Flux needs to create a new Particle (maybe the previous one was stopped). The Flux will ignite the Tinder, thus configuring and returning a brand-new Particle instance.

## Longform References
You can use the full-length `RustyConnector` class to access the kernel and then attempt to access resources from there.
This method is the most verbose and also provides you full access to the ARA `Flux` object at each level, letting you customize
how your application reacts to certain edge-cases.
Below is one of the many ways you could fetch a family starting from the very beginning using `RustyConnector`.
```java
RustyConnector.Kernel(kernel -> {
    try {
        FamilyRegistry families = kernel.fetchModule("FamilyRegistry").observe(10, TimeUnit.SECONDS);
        Family family = families.find("default").orElseThrow().observe(10, TimeUnit.SECONDS);
        // found family!
    } catch(Exception e) {
        RC.Error(Error.from(r));
    }
});
```
::: warning
`RustyConnector.Kernel(Consumer)` is very much an `.onStart()` method.
So don't just throw it into your code anytime you need to access the kernel.
Instead, you should use `RustyConnector.Kernel()` or `RC.Kernel()` to first check if the kernel even exists.
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
    Family family = RC.Family("default");
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
Obviously you never want code to take long than it needs to.
But what's the context?

Is a player requesting a resource and can be told to try again later? In this case, consider trying the `RC` shorthand, if it doesn't resolve immediately, just tell them to try again later.

Is a server attempting to register to the proxy and a family is unavailable? Servers ping the proxy at even intervals, consider setting a timeout on the Family resource for some amount less than that interval.

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
    
    public static class Tinder extends ModuleTinder<ExampleParticle> {
        public Tinder() {
            super(
                "ExampleParticle", // Name
                "Demonstrates basic Tinder capabilities for wiki", // Description
                "rustyconnector-wiki-exampleParticle" // Details
            ); // Metadata pertaining to the specific particle that gets built
        }
        
        @Override
        public ExampleParticle ignite() {
            // Configuration / preparation logic of this process.
            // Executed every time a Flux needs a new particle.
            return new ExampleParticle();
        }
    }
}
```

Every Particle must have a corresponding Tinder.
Additionally, the Particle's constructor should be made at least `protected` so that instances can only be obtained via the Tinder.
In the above example there's no parameters to pass around, but always keep this in mind.
The Tinder is used by the Flux to obtain new instances of the process in question.

When the process is being reloaded, the Flux will close the Particle, fetch the Tinder, and ignite a new Particle.

Generally speaking you're allowed to put boot logic for the Particle in either the ignite method or the Particle constructor.
In practice, however, we like having the separation where the ignite method is exclusively for configuring and instantiating,
and the constructor is for that boot logic.

::: info What is ModuleTinder?
Inside RustyConnector, we use ModuleTinder instead of the ARA native Tinder.
A main details as to why is because ModuleTinder accepts metadata about the specific module.

Any time you are wanting to create a new module/particle, you want to make sure your Tinder extends that ModuleTinder class.
Here's a description of each option in the ModuleTinder constructor and what they do:
1. **Name** | The unique name of the module. (ex. LangLibrary, FamilyRegistry, etc.)
2. **Description** | Describes the general purpose and use of the module.
3. **Details** | The name of the Lang entry that displays more details about this specific module.
:::

## Particle/Module Collections
There are two classes that represent collections of modules in RustyConnector.

### `ModuleHolder`
The ModuleHolder interface is the base module containment class.
All it shows is that the class contains modules and you can fetch all of them via the `.modules()` method.
The ModulesHolder interface is specifically important on platforms such as RC-Minecraft because the Lang entries
specifically allow users to climb up and down the entire module hierarchy, and the ModuleHolder interface is how the Minecraft
wrappers know that a module contains children.

### `ModuleCollection`
Implementing the `ModuleHolder` interface, the `ModuleCollection` class provides complete module management.
It's the class that the RustyConnector kernel uses to handle its own modules.

## Tinder Injection

The Tinder system give module developers the ability to directly alter code being executed even by the kernel itself.
Let's look at MagicLink as an example.
By default, MagicLink operates via WebScocket.
However, if a module developer wanted to implement Redis instead of WebSocket, they could do so with relative ease.
```java
public class RedisMagicLink extends MagicLinkCore.Proxy {
    protected RedisMagicLink(
            @NotNull Packet.SourceIdentifier self,
            @NotNull AES cryptor,
            @NotNull PacketCache cache,
            @Nullable IPV6Broadcaster broadcaster
    ) {
        super(self, cryptor, cache, broadcaster);
        // Redis Initializer logic
    }

    @Override
    public void publish(Packet.Local packet) throws IllegalStateException {
        // Publish using Redis
    }

    public static class Tinder extends MagicLinkCore.Tinder<RedisMagicLink> {
        private final Packet.SourceIdentifier self;
        private final AES cryptor;
        private final PacketCache cache;
        private final IPV6Broadcaster broadcaster;
        public Tinder(
                @NotNull URL httpAddress,
                @NotNull Packet.SourceIdentifier self,
                @NotNull AES cryptor,
                @NotNull PacketCache cache,
                @Nullable IPV6Broadcaster broadcaster
                ) {
            super();
            this.cryptor = cryptor;
            this.self = self;
            this.cache = cache;
            this.broadcaster = broadcaster;
        }

        @Override
        public @NotNull RedisMagicLink ignite() throws Exception {
            return new RedisMagicLink(
                    this.self,
                    this.cryptor,
                    this.cache,
                    this.broadcaster
            );
        }
    }
}
```
Naturally a module developer would also need to add parameters for Redis login details as well, that's besides the point tho.
Remember how a Tinder is basically just a configuration class? This is where that fact truly shines.

In order to inject this new Tinder so that the RustyConnector kernel uses it instead of the default WebSocket Tinder,
you first need to acquire the current MagicLink Flux, then reload the Flux using the new Tinder.
```java
RC.Kernel().fetchModule("MagicLink").reignite(new RedisMagicLink.Tinder(/* params */));
```

From this point forward, any time the MagicLink Flux is stopped, started, or reloaded, the new Tinder will be used.
The caller also has an optional `rollback` flag they can pass which, if there's an exception during the boot process of a Particle,
will automatically discard the newly passed Tinder and revert to the previous one.