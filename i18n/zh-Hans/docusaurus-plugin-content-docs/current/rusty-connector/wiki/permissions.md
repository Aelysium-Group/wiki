---
title: "📌 权限节点"
description: "有关Rusty Connector的指令权限节点"
sidebar_position: 4
displayed_sidebar: plugins_wiki_rusty_connector
---
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

`rustyconnector.command.tpa` | Allows a player to use the `/tpa` command. (Assuming that command is enabled within a respective family)