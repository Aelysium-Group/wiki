---
title: 📦 Packets
sidebar_position: 4
---

:::danger
This page is still under construction
:::

Packets are a major backbone of RustyConnector.
This page will help you plug into RustyConnector's Magic Link service and issue your own packets!

## Magic Link
Magic Link is the connection backbone used by RustyConnector for handling connections between the Proxy and MCLoaders.
It's sole directive is ensuring that all MCLoaders on the Proxy are active and ready to handle tasks.

Magic Link also employs AES 256-bit end-to-end encryption via its Secure Transit module as well as packet filtering and caching via its Data Transit module.

## Custom Packets
Custom Packets can be created during runtime using the packet builder.
PacketBuilder is a service, which means if has to be fetched from the RustyConnector Flame.
This is done because the builder that you receive from PacketBuilder contains some already necessary metadata about your environment (for example is it a packet from an MCLoader or from the Proxy?) which you'd otherwise have to provide yourself.

Here's a basic example of creating a custom packet.
```java title="Proxy Plugin"
tinder.onStart(flame -> {
    GenericPacket packet = flame.services().packetBuilder().createNew()
        .identification(PacketIdentification.from("RC_MY_MODULE", "NAME_OF_PACKET"))
        .sendingToMCLoader(target_uuid)
        .build();
});
```

It's important to note that this code block will not actually send the packet, we'll get to that in a bit; this simply creates a packet which can be sent.
Every packet has two required fields:

- `identification` - The ID of the packet. This is important for when you create Packet Listeners.
- `sendingMethod` - Marks where this packet needs to be delivered to.

:::info
For your convenience we've constructed the Packet Builder so that you don't even have access to the `.build()` method until you've provided the required information. This way it's one less exception or check you have to worry about while coding. Once you see the `.build()` method, you know that your packet is already a valid packet.
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

:::caution
You should set the `pluginID` to be something unique, preferably the name of your plugin.

It should be noted that if your packet happens to have a `PacketIdentification` that is equal to the `PacketIdentification` of someone
else's plugin. Your packets will intercept eachother and cause issues.
:::

### Adding Parameters
Adding a custom parameter is as easy as using the `.parameter()` method along with the `PacketParameter` wrapper.
`PacketParameter` lets you set parameters of type `int`, `long`, `double`, `String`, and `boolean`.
```java title="Proxy Plugin"
GenericPacket packet = flame.services().packetBuilder().createNew()
        .identification(PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET"))
        .toMCLoader(target_uuid)
        .parameter("example_int", new PacketParameter(1000))
        .parameter("example_long", new PacketParameter(1000000000000))
        .parameter("example_double", new PacketParameter(2.5))
        .parameter("example_string", new PacketParameter("hello!"))
        .parameter("example_boolean", new PacketParameter(true))
        .build();
```

## Listening for packets
Listening for packets is a similar ordeal to listening for Events.
```java title="CustomPacketListener.java"
public class CustomPacketListener implements PacketListener<GenericPacket> {
    @Override
    public PacketIdentification target() {
        return PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET");
    }

    @Override
    public void execute(GenericPacket packet) throws Exception {
        System.out.println(packet);
    }
}
```
When creating a `PacketListener` we implement `.target()` which tells us what `PacketIdentification` to listen for.
Additionally, we implement `.execute()` which lets us act upon the specific packet.

## Packet Wrappers
All packets are of type `GenericPacket`. However, you can make a simple wrapper using the template below.

```java
/**
 * The following is a packet wrapper for the following example packet:
 * GenericPacket packet = flame.services().packetBuilder().createNew()
 *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
 *      .toMCLoader(target_uuid)
 *      .parameter("example_data", "hello!")
 *      .build();
 */

public class CustomPacket extends GenericPacket {
    private CustomPacket() { super(); }

    // Convenience getter for fetching a custom parameter so we don't have to manually every time.
    public String exampleData() {
        return this.parameters.get(Parameters.EXAMPLE_DATA).getAsString();
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
    public void execute(CustomPacket packet) throws Exception {
        System.out.println(packet.exampleData());
    }
}
```

If you want to take your packet wrapper a step further you can add a custom `GenericPacket.Builder` implementation.
To better show this example, lets update our custom packet we've been using so that its example parameter holds a player's username.
```java
/**
 * The following is a packet wrapper for the following example packet:
 * GenericPacket packet = flame.services().packetBuilder().createNew()
 *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
 *      .toMCLoader(target_uuid)
 *      .parameter("username", "Notch")
 *      .build();
 */

public class CustomPacket extends GenericPacket {
    private CustomPacket() { super(); }

    // Convenience getter for fetching a custom parameter so we don't have to manually every time.
    public String username() {
        return this.parameters.get(Parameters.USERNAME).getAsString();
    }

    // Convenience enum which lists all the valid Parameters that this custom packet supports
    public interface Parameters {
        String USERNAME = "username";
    }

    public static CustomPacket create(VelocityFlame flame, UUID target_uuid, String username) {
        return flame.services().packetBuilder().createNew()
            .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))
            .toMCLoader(target_uuid)
            .parameter(Parameter.USERNAME, username)
            .build();
    }
}
```

## Sending Custom Packets
Once you've created a packet, sending it is super easy. You just have to access the Magic Link service via the Flame and publish it.
Below is an example using the `CustomPacket` that we've build. But you can also just use the `GenericPacket.Builder` and pass the `GenericPacket`
directly to the `.publish()` method.
```java title="Proxy Plugin"
tinder.onStart(flame -> {
    CustomPacket packet = CustomPacket.create(flame, target_uuid, "Notch");

    flame.services().magicLink().connection().orElseThrow().publish(packet);
});
```