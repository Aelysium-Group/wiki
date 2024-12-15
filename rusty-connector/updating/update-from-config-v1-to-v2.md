---
title: ℹ️ Updating from V1 to V2
sidebar_position: 2
---
On this page, we will walk you through how to update your config from v1 to v2!
## Disclaimer
It can be a hassle going through and updating config files.
If you'd rather just configure a fresh install of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.

## Unchanging
The following configuration files have not been functionally affected by this update. It's worth noting that we try to improve the comments in our plugin between config versions. The following list does not consider changes to comments.
- whitelist.yml
- logger.yml

## Walkthrough
### Updating the version node
In v2, we've changed the `config-version` node to just `version`.
- Navigate to [config.yml (RC-Velocity)](https://github.com/Aelysium-Group/rusty-connector/wiki/Config-v2#configyml-velocity) and change `config-version: 1` to `version: 2`.
- Navigate to [config.yml (RC-Paper)](https://github.com/Aelysium-Group/rusty-connector/wiki/Config-v2#configyml-paper) and change `config-version: 1` to `version: 2`.

### Adding TPA to family.yml
At the bottom of each of your [family.yml](https://github.com/Aelysium-Group/rusty-connector/wiki/Config-v2#familyyml-velocity); paste the following:
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

### Conclusion
The update from v1 to v2 isn't a large one, but it's enough to break some things. You should be able to boot up RustyConnector now!
While the first step should've covered this, just in case; make sure you've updated the `version` node on your velocity and paper servers so that it is now `version: 2`. This will tell RustyConnector that you have finished updating your configs and it can try parsing them!