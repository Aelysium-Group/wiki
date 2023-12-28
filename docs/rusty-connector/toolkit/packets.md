---
title: 📦 Packets
sidebar_position: 3
---

:::danger
This page is still under construction
:::

Packets are a major backbone of RustyConnector.
This page will help you plug into RustyConnector's Magic Link service and issue your own packets!

## Magic Link
Magic Link is the connection backbone used by RustyConnector for handling connections between the Proxy and MCLoaders.
It's sole directive is ensuring that all MCLoaders on the Proxy are active and ready to handle tasks.

Magic Link also employs AES 256-bit end-to-end encryption via it's Secure Transit module as well as packet filtering and caching via it's Data Transit module.

## Custom Packets
Custom Packets can be created during runtime using the packet builder.
```java title="Proxy Plugin"
GenericPacket packet = new GenericPacket.Builder()
        .setOrigin(PacketOrigin.PROXY)
        .setAddress(target_address)
        .setType(PacketType.Mapping.from("RC_MY_MODULE", "NAME_OF_PACKET"))
        .buildSendable();
```

`setOrigin` - Sets the origin that this packet is from. (`PROXY`, or `SERVER`)

`setAddress` - Sets the address associated with the packet.

`setType` - Sets the type that this packet is. Think of this as the packet's ID.

:::caution
When creating packets, it's important to keep track of the origin they're being sent from.

If origin is `PROXY`, then `setAddress` should be the address of an MCLoader. The packet will then be sent to that specific MCLoader.

If origin is `SERVER`, then `setAddress` should be the address of the MCLoader which is sending the packet. This way the Proxy knows who sent the packet.

`setAddress` should __NEVER__ be the address of the Proxy.

Failing to follow these guidelines will result in your packets being ignored.
:::

### Adding Parameters
Adding a custom parameter is as easy as using `.setParameter()` method along with the `PacketParameter` wrapper.
`PacketParameter` lets you set parameters of type `int`, `long`, `double`, `String`, and `boolean`.
```java title="Proxy Plugin"
GenericPacket packet = new GenericPacket.Builder()
        .setAddress(target_address)
        .setType(PacketType.Mapping.from("MY_MODULE", "NAME_OF_PACKET"))
        .setOrigin(PacketOrigin.PROXY)
        .setParameter("example_int", new PacketParameter(1000))
        .setParameter("example_long", new PacketParameter(1000000000000))
        .setParameter("example_double", new PacketParameter(2.5))
        .setParameter("example_string", new PacketParameter("hello!"))
        .setParameter("example_boolean", new PacketParameter(true))
        .buildSendable();
```

## Listening for packets
Listening for packets is a similar ordeal to listening for Events.
```java title="CustomPacketListener.java"
public class CustomPacketListener implements PacketListener<GenericPacket> {
    @Override
    public PacketType.Mapping target() {
        return PacketType.Mapping.from("MY_MODULE", "NAME_OF_PACKET");
    }

    @Override
    public void execute(GenericPacket packet) throws Exception {
        System.out.println(packet);
    }
}
```
When creating a `PacketListener` we implement `.target` which tells us what packet ID to listen for.
And we also implement `.execute()` which lets us act upon the specific packet.

All packets are of type `GenericPacket`. However, you can make a simple wrapper using the template below.

```java
/**
 * The following is a packet wrapper for the following example packet:
 * GenericPacket packet = new GenericPacket.Builder()
 *      .setAddress(target_address)
 *      .setType(PacketType.Mapping.from("MY_MODULE", "CUSTOM_PACKET"))
 *      .setOrigin(PacketOrigin.PROXY)
 *      .setParameter("example_data", "hello!")
 *      .buildSendable();
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
    public PacketType.Mapping target() {
        return PacketType.Mapping.from("MY_MODULE", "CUSTOM_PACKET");
    }

    @Override
    public void execute(CustomPacket packet) throws Exception {
        System.out.println(packet.exampleData());
    }
}
```

## Sending Custom Packets
Once you've created a packet, sending it is super easy. You just have to access the Magic Link service via the Flame and publish it.
```java title="Proxy Plugin"
tinder.onStart(flame -> {
    GenericPacket packet = new GenericPacket.Builder()
        .setAddress(target_address)
        .setType(PacketType.Mapping.from("MY_MODULE", "CUSTOM_PACKET"))
        .setOrigin(PacketOrigin.PROXY)
        .setParameter("example_data", "hello!")
        .buildSendable();

    flame.services().magicLink().connection().orElseThrow().publish();
});
```