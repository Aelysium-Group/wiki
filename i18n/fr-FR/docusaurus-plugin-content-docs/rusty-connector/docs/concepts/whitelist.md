---
title: 👮 Whitelist
sidebar_position: 3
---
RustyConnector allows you to set whitelists for both your entire network and specific families!

With RustyConnector whitelists, you can create as many pre-defined whitelists as you like. Switching between these whitelists is as easy as changing the name of the whitelist in your configs.

# Network Wide Whitelists
- In config.yml on RC-Velocity, go to the `whitelist` section.
- Set `enabled` to `true`
- Change the whitelist `name` to whatever you'd like (For this example, we'll call it `dev-whitelist`)
- Restart your Velocity server
- RC-Velocity will create a new file called `dev-whitelist.yml` inside of your `whitelists` folder. This file is loaded with the whitelist.yml template.
- Open `dev-whitelist.yml`
- Configure `dev-whitelist.yml` however you'd like.
- Restart RC-Velocity

# Family Wide Whitelists
- In the `families` folder. Open any particular family.yml
- Go to the `whitelist` section of your family.yml
- Set `enabled` to `true`
- Change the whitelist `name` to whatever you'd like (For this example, we'll call it `dev-family-whitelist`)
- Restart your Velocity server
- RC-Velocity will create a new file called `dev-family-whitelist.yml` inside of your `whitelists` folder. This file is loaded with the whitelist.yml template.
- Open `dev-family-whitelist.yml`
- Configure `dev-family-whitelist.yml` however you'd like.
- Restart RC-Velocity

# Server-Specific Whitelists
RustyConnector doesn't have a custom implementation for Loader-specific whitelists. Instead, use your MCLoader's built-in whitelist system via the `/whitelist` command.