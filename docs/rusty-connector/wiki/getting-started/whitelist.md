---
title: 👮 Whitelist
sidebar_position: 3
---
RustyConnector allows you to set whitelists for your entire network, specific families, or individual servers.

With RustyConnector whitelists, you can create as many pre-defined whitelists as you like. Switching between these whitelists is as easy as changing the name of the whitelist to use inside of your [RC-Velocity config](../config/config-latest#configyml) or inside of an [RC-Velocity family config](../config/config-latest#configyml).

You can also reload whitelists dynamically using a reload [Command](../Commands).
Use `/rc reload` to see available reload commands.

# Network Wide Whitelists
- In [config.yml](../config/config-latest#configyml) on RC-Velocity, go to the `whitelist` section.
- Set `enabled` to `true`
- Change the whitelist `name` to whatever you'd like (For this example, we'll call it `dev-whitelist`)
- Restart your Velocity server
- RC-Velocity will create a new file called `dev-whitelist.yml` inside of your `whitelists` folder. This file is loaded with the [whitelist.yml template](../config/config-latest#whitelistyml).
- Open `dev-whitelist.yml`
- Configure `dev-whitelist.yml` however you'd like.
- Restart RC-Velocity

# Family Wide Whitelists
- In the `families` folder. Open any particular [family.yml](../config/config-latest#configyml)
- Go to the `whitelist` section of your [family.yml](../config/config-latest#configyml)
- Set `enabled` to `true`
- Change the whitelist `name` to whatever you'd like (For this example, we'll call it `dev-family-whitelist`)
- Restart your Velocity server
- RC-Velocity will create a new file called `dev-family-whitelist.yml` inside of your `whitelists` folder. This file is loaded with the [whitelist.yml template](../config/config-latest#whitelistyml).
- Open `dev-family-whitelist.yml`
- Configure `dev-family-whitelist.yml` however you'd like.
- Restart RC-Velocity

# Server-Specific Whitelists
RustyConnectior doesn't have a custom implementation for server-specific whitelists. Instead, use Paper's built-in whitelist system via the `/whitelist` command.