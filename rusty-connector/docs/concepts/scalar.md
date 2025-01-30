---
title: 🌧️ Scalar Family
sidebar_position: 1
---

# 🌧️ Scalar Family

Scalar Families are optimized to work best with stateless <MCLoaderTag>Minecraft Loaders</MCLoaderTag>.

::: details What is a Stateless Minecraft Loader?
A stateless **Minecraft Loader** is a Loader which doesn't store it's own state.

For example, if a player joins a Loader and places a block. That action will be forgotten next time the Loader restarts.
Ideally, stateless Loaders wouldn't actually allow players to do anything that would attempt alter state (For example, by using <a href="https://enginehub.org/worldguard">WorldGuard</a> to prevent players from placing blocks).

Examples of stateless Loaders would be Lobby, KitPVP, or Bedwars.

The inverse of a stateless Loader is a stateful Loader; such as a Survival Loader, or Plots Loader.
:::

## ☁️ Cloud Angle
::: details What is this?
Cloud angles provide explanations of family opperations through the usage of analogies.
:::

Scalar Families can be thought of as a 🌧️ Rain Cloud over the ocean; where a single raindrop is the player, and the ocean is the collection of <MCLoaderTag>Loaders</MCLoaderTag> contained in the family.

When a player enters the family's <DynamicTag href="concepts/load_balancing" emoji="⤵️" name="Load Balancer" title="A link to a page for Load Balancers" /> it's represented by the raindrop falling through the air into the ocean.<br/>
All Loaders in a scalar family should theoretically be stateless and completly identical (in accordance with <TheLawTag>The Rule of Families</TheLawTag>). As such, regardless of where in the ocean the raindrop lands, it will still end up in the ocean.

Ultimatly, when a player connects to a Scalar Family, it doesn't matter which Loader they connect to, it will always seem like they've connected to the same Loader.

## Configuration
Scalar families can be configured in the `families` folder. They are represented by a configuration file containing the family's name followed by the suffix `.scalar.yml`.

### Parent Family
Parenting allows you to establish hierarchies between your families.

When you setup family parents, players will be connected to a family's parent if they are kicked or disconnected from their current family.
If a parent family isn't established, the player will be connected to the root family.

If you setup the hub feature in Dynamic Teleport, it will also direct a player to the parent family of the one they're connected to. 

::: danger
Setting a parent family for the root familly is forbidden and will be ignored.
:::