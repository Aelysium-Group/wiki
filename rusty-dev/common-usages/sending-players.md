---
title: ✈️ Sending Players
order: 2
---
# Sending Players
The RustyConnector kernel allows you to send players to different families and servers from both the proxy and server.
When writing a module, you should always prefer doing stuff on the proxy versus the server, as doing stuff from the server always carries overhead, because those requests have to be sent to the proxy for handling.

## Send To Family
::: tabs
== From Proxy
```java
Family family = RC.P.Family("TargetFamily"); // Fetch the family you want to connect to.
family.connect(player); // Connect the player
```
== From Server
```java
ServerKernel kernel = RC.S.Kernel();

// Send a player via their id/uuid
kernel.sendID(
    "", // Player's ID/UUID
    "TargetFamily", // The family you want to connect to.
    Set.of(
        MagicLinkCore.Packets.SendPlayer.Flag.FAMILY // <<< Tells the proxy that you are targeting a family.// [!code focus]
    )
);
```
:::


## Send To A Server
::: tabs
== From Proxy
```java
Server server = RC.P.Server("TargetServer"); // Fetch the server you want to connect to.
server.connect(player); // Connect the player
```
== From Server
```java
ServerKernel kernel = RC.S.Kernel();

// Send a player via their id/uuid
kernel.sendID(
    "", // Player's ID/UUID
    "TargetFamily", // The family you want to connect to.
    Set.of(
        MagicLinkCore.Packets.SendPlayer.Flag.SERVER // <<< Tells the proxy that you are targeting a server.// [!code focus]
    )
);
```
:::

## Connection Power
By default, any connection attempts you make when connecting a player to a server; will only succeed if the server has not reached it's `softCap`.
Connection Power allows you to fine-tune how aggressive you'd like to connect players to servers with.

::: tabs
== MINIMAL
The player's connection will fail if the server's player count is equal to or greater than the server's soft player limit.
== MODERATE
The player's connection will fail if the server's player count is equal to or greater than the server's hard player limt.
== AGGRESSIVE
The player's connection will not fail as a result of any player limits.
:::

::: tabs
== From Proxy
```java
Server server = RC.P.Server("TargetServer"); // Fetch the server you want to connect to.
server.connect(
    player, // The player to connect
    Player.Connection.Power.AGGRESSIVE // The connection power to use // [!code focus]
);
```
== From Server
```java
ServerKernel kernel = RC.S.Kernel();

// Send a player via their id/uuid
kernel.sendID(
    "", // Player's ID/UUID
    "TargetFamily", // The family you want to connect to.
    Set.of(
        MagicLinkCore.Packets.SendPlayer.Flag.SERVER, // <<< Tells the proxy that you are targeting a server.
        MagicLinkCore.Packets.SendPlayer.Flag.AGGRESSIVE // <<< Tells the proxy to use AGGRESSIVE connection power.// [!code focus]
    )
);
```
:::