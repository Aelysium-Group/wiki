---
title: 📦 Packets
sidebar_position: 4
---

Packets are a major backbone of RustyConnector.
This page will help you plug into RustyConnector's Magic Link service and issue your own packets!

## Magic Link
Magic Link is the connection backbone used by RustyConnector for handling connections between the Proxy and MCLoaders.
It's sole directive is ensuring that all MCLoaders on the Proxy are active and ready to handle tasks.

Magic Link also employs AES 256-bit end-to-end encryption via its Secure Transit module as well as packet filtering and caching via its Data Transit module.

## Custom Packets
The Packet Builder can be fetched from the MagicLink service.
Since MagicLink is a service it means it must be fetched from the Flame.
This is done because the builder that you receive from MagicLink contains some already necessary metadata about your environment (for example is it a packet from an MCLoader or from the Proxy?) which you'd otherwise have to provide yourself.

Here's a basic example of creating a custom packet.
```java title="Proxy Plugin"
tinder.onStart(flame -> {
    Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()
        .identification(PacketIdentification.from("RC_MY_MODULE", "NAME_OF_PACKET"))
        .sendTo(Packet.Target.mcLoader(target_uuid));
});
```

It's important to note that the `.sendTo` and `.replyTo` both build and send the packet.
There is no way to build a packet without building it.

::: info
`identification` is always required before you can send or add parameters to a packet.
:::

### Packet Identification
When a packet is created, it needs to be assigned identification.
A packet's ID contains two values; the Module that the packet is from (`pluginID`), and the ID of the packet itself (`packetID`).
You can create a new PacketIdentification using:
```java
// pluginID = "MY_MODULE"
// packetID = "NAME_OF_PACKET"
PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET");
```
Both values can technically be whatever you want. But it's suggested that you set both to be in `UPPER_SNAKE_CASE` format.

::: danger
You should set the `pluginID` to be something unique, preferably the name of your plugin.

It should be noted that if your packet happens to have a `PacketIdentification` that is equal to the `PacketIdentification` of someone
else's plugin. Your packets will intercept eachother and cause issues.
:::

### Adding Parameters
Adding a custom parameter is as easy as using the `.parameter()` method along with the `PacketParameter` wrapper.
`PacketParameter` lets you set parameters of type `int`, `long`, `double`, `String`, and `boolean`.
```java title="Proxy Plugin"
Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()
    .identification(PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET"))
    .parameter("example_int", new PacketParameter(1000))
    .parameter("example_long", new PacketParameter(1000000000000))
    .parameter("example_double", new PacketParameter(2.5))
    .parameter("example_string", new PacketParameter("hello!"))
    .parameter("example_boolean", new PacketParameter(true))
    .sendTo(Packet.Target.mcLoader(target_uuid));
```

## Listening for packets
Listening for packets is a similar ordeal to listening for Events.
```java title="CustomPacketListener.java"
public class CustomPacketListener implements PacketListener<CustomPacket> {
    @Override
    public PacketIdentification target() {
        return PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET");
    }

    @OVerride
    public CustomPacket wrap(Packet packet) {
        return new CustomPacket(packet);
    }

    @Override
    public void execute(CustomPacket packet) throws Exception {
        System.out.println(packet);
    }
}
```
When creating a `PacketListener` we implement `.target()` which tells us what `PacketIdentification` to listen for.
Additionally, we implement `.execute()` which lets us act upon the specific packet.
And finally, we implement `.wrap()` which will wrap our packet using a custom `Packet.Wrapper` that we've defined.

## Packet Wrappers
Once you start adding parameters to packets you'll probably want to make a wrapper to more easily interact with those parameters.
Packet Wrappers effectivly allow you to create custom types that you can use in your Packet Listeners.

```java title="CustomPacket.java"
/**
 * The following is a packet wrapper for the following example packet:
 * Packet packet = flame.services().magicLink().packetManger().newPacketBuilder()
 *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
 *      .parameter("example_data", "hello!")
 *      .sendTo(Packet.Target.allAvailableProxies());
 */

public class CustomPacket extends Packet.Wrapper {
    public CustomPacket(Packet packet) { super(packet); }

    // Convenience getter for fetching a custom parameter so we don't have to manually every time.
    public String exampleData() {
        return this.parameter(Parameters.EXAMPLE_DATA).getAsString();
    }

    // Convenience enum which lists all the valid Parameters that this custom packet supports
    public interface Parameters {
        String EXAMPLE_DATA = "example_data";
    }
}

```

Then, with this new wrapper we can update our PacketListener:

```java title="CustomPacketListener.java"
public class CustomPacketListener implements PacketListener<CustomPacket> {
    @Override
    public PacketIdentification target() {
        return PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET");
    }

    @Override
    public CustomPacket wrap(Packet packet) {
        return new CustomPacket(packet);
    }

    @Override
    public void execute(CustomPacket packet) throws Exception {
        System.out.println(packet.exampleData());
    }
}
```

If you want to take your packet wrapper a step further you can add a custom `Packet.Builder` implementation.
To better show this example, lets update our custom packet we've been using so that its example parameter holds a player's username.
```java
/**
 * The following is a packet wrapper for the following example packet:
 * Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()
 *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
 *      .parameter("username", "Notch")
 *      .sendTo(Packet.Target.allAvailableProxies());
 */

public class CustomPacket extends Packet.Wrapper {
    private CustomPacket(Packet packet) { super(packet); }

    // Convenience getter for fetching a custom parameter so we don't have to manually every time.
    public String username() {
        return this.parameter(Parameters.USERNAME).getAsString();
    }

    // Convenience enum which lists all the valid Parameters that this custom packet supports
    public interface Parameters {
        String USERNAME = "username";
    }

    public static CustomPacket createAndSend(VelocityFlame flame, UUID target_uuid, String username) {
        return new CustomPacket(
            flame.services().magicLink().packetManager().newPacketBuilder()
                .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
                .parameter("username", "Notch")
                .sendTo(Packet.Target.allAvailableProxies())
        );
    }
}
```