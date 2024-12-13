# ⤵️ Load Balancing

Load balancing is how [Families](rusty-connector/concepts/families/index.md) decide which MCLoaders to send players to.
By utilizing Load Balancers properly, you'll be able to properly <TheLawTag>Think in Terms of Families</TheLawTag>.

## Algorithm
Every family in RustyConnector can have its own dedicated load balancer.
By default, the load balancer will use the [Round Robin Algorithm](https://www.nginx.com/resources/glossary/round-robin-load-balancing/) however you can also use a few other algorithms if you'd like instead.

::: details Round Robin
All Loaders are placed into a queue based on the order they get registered in.

Every time a connection occurs, the connection will be routed to the current Loader in the queue and the queue will iterate to the next Loader. 
Once the load balancer reaches the end of the Loader queue, the load balancer will loop back to the beginning and start again.
:::
::: details Most Connection
Connects players to the Loader with the most players currently connected.
This mode is best if you want to fill Loaders up as quickly as possible.
:::
::: details Least Connection
Connects players to the Loader with the fewest players currently connected.
This mode is best if you want evenly distributed players across all Loaders.
:::

Additionally, you can set your algorithm to consider weighted values when it sorts. When the load balancer is weighted you can set the `weight` value in RC-Paper's `config.yml` to cause specific servers to gain priority over others.

## Weight
Weight is an attribute you define on your individual MCLoaders. It allows some Loaders to have priority over other loaders.
This setting is great for if you have some Loaders which are running on more powerful machines and can handler more players.

When setting up weight, you must make sure you specifically enable the `weighted` toggle in your Load Balancer config.

Read below to see how the differnt algorithms work when they're weighted.

::: details Weighted Round Robin
All Loaders are placed into a queue based on the order they get registered in.
Loaders are then sorted in descending order based on weight level.

Every time a connection occurs, the connection will be routed to the current Loader in the queue and the queue will iterate to the next Loader. 
Once the load balancer reaches the end of the Loader queue, the load balancer will loop back to the beginning and start again.
:::
::: details Weighted Most Connection
Connects players to the Loader with the highest weight and most players currently connected.
This mode is best if you want to fill Loaders up as quickly as possible.
:::
::: details Weighted Least Connection
Connects players to the Loader with the highest weight and least players currently connected.
This mode is best if you want evenly distributed players across all Loaders.
:::

## Persistence
Persistence is a feature that will cause the Proxy to attempt to connect a player to a specific family multiple times before giving up. Consider the following family layout:

```yml
algorithm: LEAST_CONNECTION
weighted: true
persistence: true
attempts: 5
   ---| 1. [VIP-whitelist](127.0.0.1:25565) [20 (40 <> 50) w-1000] // [!code warning]
   ---| 2. [PrimaryLoader1](127.0.0.1:25566) [40 (40 <> 50) w-100]
   ---| 3. [PrimaryLoader2](127.0.0.1:25567) [45 (40 <> 50) w-100]
   ---| 4. [BackupLoader1](127.0.0.1:25568) [3 (40 <> 50) w-0]
```
::: info
That was probably a little confusing to look at. For a full breakdown of what all the data means you can read [this snippet](#reading-the-load-balancer-in-the-console).
:::

In the example above, we have four servers registered to a family with a Least Connection Algorithm.
One of the servers has its own whitelist allowing only VIP players to join it.
Additionally, all servers have a soft-cap of `40` and a hard-cap of `50`. Servers 2 and 3 are both maxed out for regular players.

If a player were to attempt to join this family here's a step by step of what would happen:
1. Player attempts to connect to `VIP-whitelist` connection fails.
   Persistence kicks in. One attempt has been used. Persistence cause's the player's connection to now operate via Round Robin algorithm (this way it will always attempt to connect to a different server until its attempts are used up)
2. Player attempts to connect to PrimaryLoader1. Connection fails. Second attempt has been used.
3. Player attempts to connect to PrimaryLoader2. Connection fails. Third attempt has been used.
4. Player attempts to connect to BackupLoader1. Connection succeeds. Persistence shut's off.
5. Family insertion point returns to original position.

The whole operation happens in a split second and will go unnoticed by your end-users.
This system is particularly useful for music events when you want to have VIP, such as artists and sponsors, auto-route to a VIP server. You can weight the VIP server to be at the top of the family queue and enable persistence. Any players that join the family will automatically bounce over the VIP server and fall into one of the public servers.

If a player runs out of persistence attempts before they can be connected to a server; their attempt to connect to the specific family will fail.

## Reading the load balancer in the console
The messages in the load balancer console can be cryptic. Consider the following:

```yml
   ---| 1. [VIP-whitelist](127.0.0.1:25565) [20 (40 <> 50) w-1000] // [!code warning]
   ---| 2. [PrimaryLoader1](127.0.0.1:25566) [40 (40 <> 50) w-100]
   ---| 3. [PrimaryLoader2](127.0.0.1:25567) [45 (40 <> 50) w-100]
   ---| 4. [BackupLoader1](127.0.0.1:25568) [3 (40 <> 50) w-0]
```
Not much is very clear to the human eye. These messages have been written to compress as much useful information together as we can. Because of this let's look at another version that shows what each data point represents:

```yml
   ---| 1. [ name ]( address ) [player-count (player-soft-cap <> player-hard-cap) weight] // [!code warning]
   ---| 2. [ loader-name ]( address ) [player-count (player-soft-cap <> player-hard-cap) weight]
```
- `name` | Represents the Loader name set in the MCLoader's `config.yml`.
- `address` | Represents the Loader address set in the MCLoader's `config.yml`
- `player-count` | Represents the current player count on this Loader.
- `player-soft-cap` | Represents the soft cap of this Loader, set in the MCLoader's `config.yml`
- `player-hard-cap` | Represents the hard cap of this Loader, set in the MCLoader's `config.yml`
- `weight` | Represents the weight level of this Loader, set in the MCLoader's "magic config" which exists on the proxy in the "magic_configs" folder.
- `insertion-point` | Shows which Loader a player will attempt to connect to first if they joined that family at that specific moment in time.