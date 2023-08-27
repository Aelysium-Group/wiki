---
title: ℹ️ 从V1迁移至V2
sidebar_position: 2
---
此文档我们将逐步教您从V1版本配置文件迁移至V2版本。
## 免责声明
由于查看和更新配置文件有可能会很麻烦，如果你不想更新已有的配置文件，而想重新安装配置文件，可直接删除旧版的配置文件（注意备份），RC会在下次启动时自动生成新的配置文件。

## 内容变化
以下配置文件在功能上未受到本次更新的影响，但值得注意的是，我们会尝试在不同的配置版本之间改进完善里面的注释，以下文件不包括针对对注释的修改。
- whitelist.yml
- logger.yml

## 更新指南
### 1.更新版本节点
In v2, we've changed the `config-version` node to just `version`.
- Navigate to [config.yml (RC-Velocity)](../config/legacy/Config-v2#configyml-velocity) and change `config-version: 1` to `version: 2`.
- Navigate to [config.yml (RC-Paper)](../config/legacy/Config-v2#configyml-paper) and change `config-version: 1` to `version: 2`.

### 2.添加TPA配置至family.yml
At the bottom of each of your [family.yml](../config/legacy/Config-v2#familyyml-velocity); paste the following:
```yml
tpa:
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                           TPA                            #
#                                                          #
#               ---------------------------                #
# | Should players inside this family be able to tpa       #
# | to each other across servers?                          #
# | If player1 is in one server and player2 is in another  #
# | server; player1 will connect to the new server and     #
# | then teleport to player2's coordinates.                #
#                                                          #
# | If both players are in the same server, player1 will   #
# | just automatically teleport to player1.                #
#                                                          #
#   NOTE: This command is player facing!                   #
#                                                          #
#               ----------------------------               #
#                        Permission:                       #
#                rustyconnector.command.tpa                #
#               ----------------------------               #
#                          Usage:                          #
#              /tpa <target players username>              #
#               ----------------------------               #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    enabled: false

#
# Should the tpa consider player caps before attempting to teleport?
# If false, the player must match the player caps of the server they
# are attempting to connect to.
#
    ignore-player-cap: false

#
# How many minutes a pending tpa request can exist for before it expires.
# Players are not allowed to issue new tpa requests if they already have one pending.
#
# If a player's tpa request is accepted or denied before it expires, they will
# be able to issue a new tpa request immediately.
# Otherwise, they must wait for their current request to expire before issuing a new one.
#
# Players will receive a notification in chat once their request expires.
#
# `request-lifetime` is in minutes.
#
    request-lifetime: 5
```

### 3.结语
V1到V2的更新和改动并不大，但足矣破坏一些东西，在完成上述流程后你应该就可以启动RstyConnector了，虽然第一步的操作应该已经涵盖了这一点，但为了以防万一，请确保你已同步更新了的Velocity和Paper服务器配置文件上的`version`版本字段，它现在应该是`version: 2`，这将告诉RustyConnector，你已经完成了配置更新，并可以尝试解析它们了 :P