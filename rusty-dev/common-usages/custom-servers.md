---
title: 🧭 Custom Servers
---
# Custom Servers
You can create custom server types on the Proxy by extending the `Server` class.
```java
public class CustomServer extends Server {
    public Server(
            @NotNull String id,
            @NotNull InetSocketAddress address,
            @NotNull Map<String, Object> metadata,
            int timeout
    ) {
        super(id, address, metadata, timeout);
    }
}
```

Once you've created your custom server type, you need to register it into the ServerGenerator so it can be used.
```java
kernel.fetchModule("FamilyRegistry").onStart(f -> {
    ((FamilyRegistry) f).ServerGenerators().registry(
        "customGenerator",
        config -> new CustomServer(
            config.id(),
            config.address(),
            config.metadata(),
            config.timeout()
        )
    )
});
```

Once that's done, you can use this generator by simply setting the server's metadata to have a `serverGenerator` perameter with your generator's name as the value.
The metadata must be set before the server registers to the proxy.