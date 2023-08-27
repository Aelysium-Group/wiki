---
title: ⚙️ 插件指令
description: "有关Rusty Connector的指令"
sidebar_position: 4
displayed_sidebar: plugins_wiki_rusty_connector
---
Commands marked with an asterisk `*` are player useable. Otherwise, all commands are only allowed to be used from the console.
If you want to allow players to use some commands, use a plugin like EssentialsX or CMI to make a command alias.

# RustyConnector Velocity

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

# RustyConnector Paper
### NOTE: Because of an unknown bug, all RC-Paper commands must be executed using the plugin prefix: `rustyconnector-paper:rc` instead of just `rc`.

`/rc send <username> <family name>` | Sends a player to a specific family.

`/rc register` | Attempts to register the server to the proxy.

`/rc unregister` | Attempts to unregister the server from the proxy.
