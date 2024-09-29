---
title: ⚙️ Commands
description: "RustyConnector Commands"
sidebar_position: 3
displayed_sidebar: plugins_wiki_rusty_connector
---
Commands marked with an asterisk `*` are player useable. Otherwise, all commands are only allowed to be used from the console.
If you want to allow players to use some commands, use a plugin like EssentialsX or CMI to make a command alias.

# Proxy Commands

`/rc family` | View all registered families.

`/rc family <family name>` | View information about a specific family.

`/rc family <family name> sort` | Tell the family to completely resort itself in accordance with its load-balancing algorithm.

`/rc family <family name> resetIndex` | Reset the family's insertion point to the first server in the family queue.

`/rc message get <message ID>` | View a specific message.

`/rc message list` | View recent messages that have been processed.

`/rc register all` | Send a request for all servers to register themselves.

`/rc register family <family name>` | Send a request for all servers in a specific family to register themselves.

`/rc reload` | Shows different reload options for you to try.

`/rc send <username> <family name>` | Sends a player to a specific family.

`/rc send server <username> <server name>` | Sends a player to a specific server (ignores family load balancer, whitelist, and server soft/hard caps)

*`/tpa` | Teleport to another player within the family. (Works across servers within that family.)

*`/hub` | Teleport a family's parent family.

# MCLoader Commands
### NOTE: Because of an unknown bug, all MCLoader commands must be executed using the plugin prefix: `rustyconnector-paper:rc` instead of just `rc`.

`/rustyconnector-paper:rc send <username> <family name>` | Sends a player to a specific family.

`/rustyconnector-paper:rc register` | Attempts to register the server to the proxy.

`/rustyconnector-paper:rc unregister` | Attempts to unregister the server from the proxy.

`/rustyconnector-paper:rc lock` | Locks this MCLoader, preventing players from connecting to it without specifically being sent to it by the Proxy.

`/rustyconnector-paper:rc unlock` | Unlocks this MCLoader, allowing players to connect to it via it's family.
