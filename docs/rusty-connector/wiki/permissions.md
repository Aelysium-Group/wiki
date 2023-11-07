---
title: 📌 Permissions
description: "RustyConnector Permission Commands"
sidebar_position: 101
displayed_sidebar: plugins_wiki_rusty_connector
---
Any permission can have the wildcard `*` added to the end to allow all sub-permission of that node.


`rustyconnector.*` | Bypass all permission checks. Full permission.
## Whitelist
`rustyconnector.whitelist.*` | Bypass all RC-Velocity whitelists.

`rustyconnector.whitelist.<whitelist name>` | Bypass a specific RC-Velocity whitelist.

**NOTE:** Whitelist permissions only bypass whitelists that have `use-permission` set to true. Whitelist permission do not bypass server-specific whitelists.

## Player Limits
`rustyconnector.<family name>.*` | Bypass the hard and soft caps of a specific family.

`rustyconnector.softCapBypass` | Bypass the soft-cap of any RC-Paper server.

`rustyconnector.<family name>.softCapBypass` | Bypass the soft-cap of any RC-Paper server inside of a specific family.

`rustyconnector.hardCapBypass` | Bypass the hard-cap of any RC-Paper server.

`rustyconnector.<family name>.hardCapBypass` | Bypass the hard-cap of any RC-Paper server inside of a specific family.

**NOTE:** The hard cap bypass permissions will automatically bypass soft-cap as well.

## Commands
Unless otherwise stated; all commands must be sent from the console. There's no need for command permissions.

`rustyconnector.command.*` | Allows a player to use all player-facing commands.

`rustyconnector.command.tpa` | Allows a player to use the `/tpa` command where it's enabled.

`rustyconnector.command.party` | Allows a player to use the `/party` command where it's enabled.

`rustyconnector.command.friends` | Allows a player to use the `/friends` command where it's enabled.

`rustyconnector.command.unfriend` Allows a player to use the `/unfriend` command where it's enabled.

`rustyconnector.command.hub` | Allows a player to use the `/hub` command where it's enabled.

`rustyconnector.command.anchor.<anchor name>` | Allows a player to use the `/<anchor name>` command where it's enabled. Anchors are a part of the dynamic teleport module and the name of the command is configurable.

`rustyconnector.command.anchor` | Allows a player to use any anchor command where it's enabled. Anchors are a part of the dynamic teleport module and the name of the command is configurable. This permission is equivalent to `rustyconnector.command.anchor.*`

`rustyconnector.command.tpa` | Allows a player to use the `/tpa` command where it's enabled.