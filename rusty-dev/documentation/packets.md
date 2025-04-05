---
title: 📦 Packets
order: 4
---
# 📦 Packets
Packets are a major backbone of RustyConnector.
This page will help you plug into RustyConnector's Magic Link service and issue your own packets!

## Magic Link
Magic Link is the connection backbone used by RustyConnector for handling connections between the proxy and servers.
Its sole directive is ensuring that all servers on the proxy are active and ready to handle tasks.

## Anatomy of a Packet
Consider the following string.
```
{"v":3,"i":"RC-P","s":{"u":"be59b56e-30b5-415f-a790-f70fa04cc3cc","n":2,"r":"49FVco5nRjUDC6zS"},"t":{"n":1},"p":{"a":"127.0.0.1:25565","pc":0,"n":"","sr":"default"}}
```
This string represents a simple ping packet.
The ping packet is used by servers to declare themselves for proxies to register.
The ping packet also exists as a connection keep-alive. If Magic Link doesn't receive a ping packet from a server within an elapsed time, that server will be disconnected from the proxy; this way servers that overload and are frozen won't be able to accept player connections.

Let's break this packet down into it's component parts.
```json
{
    "v": 3, // The MagicLink Version used to compile this packet: 3
    "i": "RC-P", // The type of packet
    "s": { // The source machine of the packet
        "u": "be59b56e-30b5-415f-a790-f70fa04cc3cc", // The uuid of the RustyConnector instance
        "n": 2, // The type: 2 - A server
        "r": "49FVco5nRjUDC6zS" // The packet ID
    },
    "t": { // The target machine of the packet
      "n": 1 // The type: 1 - Any available proxy
    },
    "p": { // The packet payload
        "a": "127.0.0.1:25565", // The connection address of the server
        "pc": 0, // The current player count on the server
        "n": "", // The display name of the server
        "sr": "default" // The server registration
    }
}
```

We're not going to give you a crash-course on the packet syntax, as all of it is abstracted away.
But it's a good idea to get an idea of how the data is laid out before continuing.

## Sending Packets
To create a new packet, all you have to do is call the packet builder using `Packet.New()`.
The builder is written in a way so that you won't be able to send a syntactically incorrect packet.

```java
Packet.New()
        .type(PacketType.from("RC_MY_MODULE", "NAME_OF_PACKET"))
        .addressTo(SourceIdentifier.allAvailableServers())
        .send();
```

::: warning
The packet builder makes calls to `RC`, make sure you're only making calls to the builder from within
`RustyConnector.Kernel()::onStart`.
:::

### Packet Type
When a packet is created, it needs to be assigned a type.
A packet's type contains two values; the namespace that the packet belongs to (typically your module name), and the type of the packet itself.
You can create a new PacketType using:
```java
// namespace = "MY_MODULE"
// packetType = "NAME_OF_PACKET"
PacketType.from("MY_MODULE", "NAME_OF_PACKET");
```
Both values can technically be whatever you want. But it's suggested that you set both to be in `UPPER_SNAKE_CASE` format.

::: danger
It should be noted that if your packet happens to have a `PacketType` that is the same as someone
else's plugin. Your packets will intercept eachother and cause issues.
:::

### Adding Parameters
Adding a custom parameter is as easy as using the `.parameter()` method along with the `PacketParameter` wrapper.
`PacketParameter` lets you set parameters of type `int`, `long`, `double`, `String`, and `boolean`.
```java
Packet.New()
    .type(PacketType.from("RC_MY_MODULE", "NAME_OF_PACKET"))
    .parameter("example_int", new PacketParameter(1000))
    .parameter("example_long", new PacketParameter(1000000000000))
    .parameter("example_double", new PacketParameter(2.5))
    .parameter("example_string", new PacketParameter("hello!"))
    .parameter("example_boolean", new PacketParameter(true))
    .addressTo(SourceIdentifier.allAvailableServers())
    .send();
```

## Custom Packets
Now that you know all the fancy details of sending a custom packet, lets make a wrapper to handle this logic for us!
```java
@PacketType("RC_MY_MODULE-CUSTOM_PACKET")
public class CustomPacket extends Packet.Remote {
    protected CustomPacket(Packet packet) {
        super(packet);
    }
    
    public String testValue() {
        return this.parameters().get("testValue").getAsString();
    }
    
    public static Packet.Local createAndSend(SourceIdentifier target, String testValue) {
        return Packet.New()
                .type(Packet.Type.from("RC_MY_MODULE", "CUSTOM_PACKET"))
                .parameter("testValue", testValue)
                .addressTo(target)
                .send();
    }
}
```
With this code, we'll be able to send a new `CustomPacket` using `CustomPacket#createAndSend`!
```java
Packet.Local local = CustomPacket.createAndSend(SourceIdentifier.allAvailableProxies(), "hello this is a test!");
```

::: info Why did my static method return an instance of Packet.Local?
Even though we made a custom packet class, we don't actually get to use it until we use a PacketListener.
Read on to see how it's used!
:::

## Listening for packets
Listening for packets is a similar ordeal to listening for Events.
Let's use our custom packet we made in the last block here!
```java
public class Listener {
    @PacketListener(CustomPacket.class)
    public PacketListener.Response handle(CustomPacket packet) {
        return PacketListener.Response.success("Successfully handled the custom packet! "+packet.testValue());
    }
}
```
You can then register your packet listener via the MagicLink provider.
```java
    RC.Kernel().fetchModule("MagicLink").onStart(m -> {
        m.listen(new CustomPacketListener());
    });
```
::: info
When registering listeners, you want to call the `.onStart()` method on the MagicLink's Flux.
This way, any time MagicLink ends up getting restarted, your listeners will be re-applied.
If you don't add an `.onStart()` listener, then next time MagicLink is restarted your listeners will no-longer be applied.
:::
::: info
When using/creating a custom packet to use in a packet listener you need to ensure that the packet extends `Packet.Remote`
and is also annotated by `@PacketType`.
:::
