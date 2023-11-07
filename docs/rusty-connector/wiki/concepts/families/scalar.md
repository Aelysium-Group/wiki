---
title: 🎰 Scalar Family
position: 2
---
Families are the backbone of RustyConnector.
They can be thought of as "server collections." Minecraft servers always have a "theme" and therefore they always belong to a family.
By grouping servers into families you are able to assign load balancers and family-wide whitelists!
Let's dive in!

## How do they work?
You configure your families in `families.yml`, from there RustyConnector will create a custom config for your family in the `families` folder. This config will allow you to make further edits to your family!
If you remove a family from `families.yml` that family will no longer be registered on RustyConnector and servers will no longer be able to register to it.
When you setup your families you must define a family as your `root-family`. This is the family that players will automatically load into when they log onto your network.

## `family.scalar.yml` and `family.static.yml`
Once you add a family name to `families.yml`, RC-Velocity will make a dedicated family config for that specific family. The name of the file will be the name that you set in `families.yml`.

- - -

# Scalar Families
Scalar families are specifically built to work best for stateless Minecraft servers. Scalar families don’t care about anything other than connecting a player to the family.
## On connect
When a player connects to a Scalar family, it will consolidate the load balancer and connect the player to the best server for them.
If a player connects to the family, leaves, and connects again. There’s no guarantee that the player will be connected to the same server twice.
## Features
- Load Balancing
- Cross-server TPA
- Family Specific Whitelist

- - -

# Static Families
Static families are specifically built to work best for statefull Minecraft servers. Static families will attempt to connect players to the same server as the one they joined when they first connected to the family.
## On first connection
When a player connects to a Static Family for the first time, it will consolidate the load balancer and connect the player to the best server for them. Once the player has successfully connected to the family. The server that they connected to will be saved as the Home Server for that player.
## On consecutive connections
When a player connects to a Static Family, the family will check if the player has a Home Server. If so, the family will connect the player back into that specific server.
### What if the player’s home server is unavailable?
If a player’s home server is unavailable you can configure how you want the family to behave. The family can assign a new home server, disconnect the player, or connect the player to a different server and show them an error message.
## Features
- Load Balancing (On first connection)
- Home Server Recognition (Consecutive connections)
- Cross-server TPA
- Family Specific Whitelist

## Pre-Requisites
In order to use Static Families, you’ll be required to set up MySQL in `families.yml`

- - -

# Load Balancing
## Algorithm
Every family in RustyConnector has its own dedicated load balancer.
By default, the load balancer will use the [Round Robin Algorithm](https://www.nginx.com/resources/glossary/round-robin-load-balancing/) however you can also use a few other algorithms if you'd like instead.

Additionally, you can set your algorithm to consider weighted values when it sorts. When the load balancer is weighted you can set the `weight` value in RC-Paper's `config.yml` to cause specific servers to gain priority over others.

In the future, we plan to implement additional algorithms, for now though we have two total.

## Persistence
Persistence is a feature that will cause RC-Velocity to attempt to connect a player to a specific family multiple times before giving up. Consider the following family layout:
```yml
algorithm: LEAST_CONNECTION
weighted: true
persistence: true
attempts: 5
   ---| 1. [VIP-whitelist](127.0.0.1:25565) [20 (40 <> 50) w-1000] <<<<<
   ---| 2. [PrimaryServer1](127.0.0.1:25566) [40 (40 <> 50) w-100]
   ---| 3. [PrimaryServer2](127.0.0.1:25567) [45 (40 <> 50) w-100]
   ---| 4. [BackupServer1](127.0.0.1:25568) [3 (40 <> 50) w-0]
```
That was probably a little confusing to look at. For a full breakdown of what all the data means you can read [this snippet](https://github.com/Aelysium-Group/rusty-connector/wiki/Family#reading-the-load-balancer-in-the-console).

In the example above, we have four servers registered to a family with a Least Connection Algorithm.
One of the servers has its own whitelist allowing only VIP players to join it.
Additionally, all servers have a soft-cap of `40` and a hard-cap of `50`. Servers 2 and 3 are both maxed out for regular players.

If a player were to attempt to join this family here's a step by step of what would happen:
1. Player attempts to connect to `VIP-whitelist` connection fails. Persistence kicks in. One attempt has been used. Persistence cause's the player's connection to now operate via Round Robin algorithm (this way it will always attempt to connect to a different server until its attempts are used up)
2. Player attempts to connect to PrimaryServer1. Connection fails. Second attempt has been used.
3. Player attempts to connect to PrimaryServer2. Connection fails. Third attempt has been used.
4. Player attempts to connect to BackupServer1. Connection succeeds. Persistence shut's off.
5. Family insertion point returns to original position.

The whole operation happens in a split second and will go unnoticed by your end-users.
This system is particularly useful for music events when you want to have VIP, such as artists and sponsors, auto-route to a VIP server. You can weight the VIP server to be at the top of the family queue and enable persistence. Any players that join the family will automatically bounce over the VIP server and fall into one of the public servers.

If a player runs out of persistence attempts before they can be connected to a server; their attempt to connect to the specific family will fail.

## Reading the load balancer in the console
The messages in the load balancer console can be cryptic. Consider the following:
```yml
   ---| 1. [VIP-whitelist](127.0.0.1:25565) [20 (40 <> 50) w-1000] <<<<<
   ---| 2. [PrimaryServer1](127.0.0.1:25566) [40 (40 <> 50) w-100]
   ---| 3. [PrimaryServer2](127.0.0.1:25567) [45 (40 <> 50) w-100]
   ---| 4. [BackupServer1](127.0.0.1:25568) [3 (40 <> 50) w-0]
```
Not much is very clear to the human eye. These messages have been written to compress as much useful information together as we can. Because of this let's look at another version that shows what each data point represents:
```yml
   ---| 1. [ server-name ]( address ) [player-count (player-soft-cap <> player-hard-cap) server-weight] <<<<< insertion-point
   ---| 2. [ server-name ]( address ) [player-count (player-soft-cap <> player-hard-cap) server-weight]
```
- `server-name` | Represents the server name set in RC-Paper's `config.yml`.
- `address` | Represents the server address set in RC-Paper's `config.yml`
- `player-count` | Represents the current player count on this server.
- `player-soft-cap` | Represents the soft cap of this server, set in RC-Paper's `config.yml`
- `player-hard-cap` | Represents the hard cap of this server, set in RC-Paper's `config.yml`
- `server-weight` | Represents the weight level of this server, set in RC-Paper's `config.yml`
- `insertion-point` | Shows which server a player will attempt to connect to first if they joined that family at that specific moment in time.

- - -

# Don't use `/server`
RustyConnector specifically disables the `/server` command. Instead, you can use `/rc send` to send players to different families or servers.
However, if you're trying to use `/rc send` to send players to specific servers you should stop yourself. If you're using RustyConnector, you should really be [thinking in terms of families](#thinking-in-terms-of-families) otherwise you're throwing away a number of benefits that RustyConnector provides to you.