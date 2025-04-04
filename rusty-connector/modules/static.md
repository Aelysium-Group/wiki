---
title: 🌩️ Static Family
order: 2
---

# 🌩️ Static Family

Static Families are optimized to work best with stateful servers.

::: details What is a Stateful server?
Stateful servers contain state which changes over extended periods of time.

For example, if a player joins a server and places a block. That action will be remembered next time the Loader restarts.

Examples of stateful servers would be Survival, Skyblock, or Plots.

The inverse of a stateful servers is a stateless server; such as a Lobby server, or PVP server.
If you have stateless servers, RustyConnector already ships with Scalar Families which are great for stateless servers.
:::

## Installation
[Download](https://github.com/Aelysium-Group/rcm-staticFamily) the version of `rcm_staticFamily` that supports your current version of RustyConnector.

Static families can be configured in the `static_family` folder. They are represented by a configuration file containing the family's name followed by the suffix `.static.yml`.

### Parent Family
Parenting allows you to establish hierarchies between your families.

When you setup family parents, players will be connected to a family's parent if they are kicked or disconnected from their current family.
If a parent family isn't established, the player will be connected to the root family.

If you setup the hub feature in Dynamic Teleport, it will also direct a player to the parent family of the one they're connected to. 

::: danger
Setting a parent family for the root familly is forbidden and will be ignored.
:::

### Player Residence
Exclusive to static families, Player Residences are the resident <MCLoaderTag>Loaders</MCLoaderTag> of a player.

When a player first joins a Static Famile, they are subject to the family's <DynamicTag href="concepts/load_balancing" emoji="⤵️" name="Load Balancer" title="A link to a page for Load Balancers" />.
Once a player is connected to a Loader for the first time, that Loader will be registered as that player's Residence.

When the player attempts to connect to the family again in the future; they will be connected back into that Loader again in the future.

::: info
If a player's residence isn't available, you can assign an algorithm which will respond to the request:

:::tabs
== Cancel The Request
Stops the player from connecting to this family and tell them that their residence was unavailable and that they should try again later.
== Assign a New Residence
Connect the player to the load balancer and give them a new residence.
This option does not display an error to the player
== Connect With an Error
Connect the player to a random Loader in the family (in accordance with the load balancer) and inform them that their residence was unavailable.
:::

<Menu>
    <MenuItem href="concepts/load_balancing" title="⤵️ Load Balancing" description="Read up more on Load Balancing in RC." />
    <MenuItem href="concepts/whitelist" title="👮 Whitelist" description="Read up more on Whitelists in RC." />
</Menu>
