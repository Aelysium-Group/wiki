---
title: 🌩️ Static Family
sidebar_position: 2
---
Static Families are optimized to work best with stateful <MCLoaderTag>Minecraft Loaders</MCLoaderTag>.

::: details What is a Stateful Minecraft Loader?
A stateful **Minecraft Loader** is a Loader which store it's own state.

For example, if a player joins a Loader and places a block. That action will be remembered next time the Loader restarts.
Ideally, stateful Loaders will always hold some form of state which changes over a longterm.

Examples of stateful Loaders would be Survival, Skyblock, or Plots.

The inverse of a stateful Loader is a stateless Loader; such as a Lobby Loader, or PVP Loader.
:::

## ☁️ Cloud Angle
::: details What is this?
Cloud angles provide explanations of family opperations through the usage of analogies.
:::

Static Families can be thought of as a 🌩️ Lightning Cloud over the land; where a lightning bold represents the player, and the land is the collection of <MCLoaderTag>Loaders</MCLoaderTag> contained in the family.

When a player enters the family for the first time, it's entered into the family's <DynamicTag href="concepts/load_balancing" emoji="⤵️" name="Load Balancer" title="A link to a page for Load Balancers" />;
represented by the lightning bolt forming inside of the cloud.

When lightning strikes the ground, it's equivalent to a player being connected to one of the Loaders.
Because Static Families are stateful, the Loaders of the family will often have differnt states from eachother because the individual Loader states have diverged since their creation.
Similarally when a lightning bolt strikes the ground, it might hit different things, it may hit a tree, or the top of a building.

Player residences can be thought of as if someone setup a lightning rod outside.
Now, each time lightning strikes, it will hit that lightning rod each time.
Similarally every time the player joins the static family, they will connect to that same Loader.

## Configuration
Static families can be configured in the `families` folder. They are represented by a configuration file containing the family's name followed by the suffix `.static.yml`.

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
