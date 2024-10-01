---
title: 🌨️ Ranked Family
sidebar_position: 3
---

:::danger
Ranked Families require you use the <ToolkitTag>Toolkit API</ToolkitTag> in order to operate.
This will require that you understand how to program in Java and are able to write your own plugins!
:::

Ranked Families are a <ToolkitTag>Toolkit</ToolkitTag> powered section of RustyConnector.
In order to leverage them, you must write a custom Toolkit leveraged RC Module.

Ranked Families are built to work best with stateless <MCLoaderTag>Minecraft Loaders</MCLoaderTag>.

::: details What is a Stateless Minecraft Loader?
A stateless **Minecraft Loader** is a Loader which doesn't store it's own state.

For example, if a player joins a Loader and places a block. That action will be forgotten next time the Loader restarts.
Ideally, stateless Loaders wouldn't actually allow players to do anything that would attempt alter state (For example, by using <a href="https://enginehub.org/worldguard">WorldGuard</a> to prevent players from placing blocks).

Examples of stateless Loaders would be Lobby, KitPVP, or Bedwars.

The inverse of a stateless Loader is a stateful Loader; such as a Survival Loader, or Plots Loader.
:::

## Configuration
Ranked Families can be configured in the `families` folder. They are represented by a configuration file containing the family's name followed by the suffix `.ranked.yml`.
A major part of a Ranked Family is it's Matchmaker. When a Ranked Family is first created, a coresponding Matchmaker will be created in the `matchmakers` folder.
The details for a matchmaker can be defined here.

## Defining a name for the game
Every "game-id" in RustyConnector has it's own dedicated ranking records for players.
If you want multiple Ranked Families to use and update these Ranking records, you can set them to all have the same "game-id"

## Joining Matchmaking
The MCLoaders inside of your Ranked Family are the game Loaders themselves.
In order to queue up for matchmaking, all players have to do is attempt to connect to the Ranked Family like normal.
Whether that's using a Family Anchor, or via a custom RC Module.

Players will then remain in their current family until they've successfully been Matchmade into a session and that session finds an open server to join.

### Parent Family
Parenting allows you to establish hierarchies between your families.

When you setup family parents, players will be connected to a family's parent if they are kicked or disconnected from their current family.
If a parent family isn't established, the player will be connected to the root family.

If you setup the hub feature in Dynamic Teleport, it will also direct a player to the parent family of the one they're connected to. 

<Menu>
    <MenuItem href="../../toolkit/ranked_families" title="🏆 Matchmaker API" description="Read up on how to use the Toolkit Matchmaker API." />
    <MenuItem href="concepts/load_balancing" title="⤵️ Load Balancing" description="Read up more on Load Balancing in RC." />
    <MenuItem href="concepts/whitelist" title="👮 Whitelist" description="Read up more on Whitelists in RC." />
</Menu>