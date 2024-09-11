---
title: ℹ️ Updating from v5 to V6
sidebar_position: 6
---
On this page, we will walk you through how to update your config from v5 to v6!
**Before updating to v6, remember that databases containing data from previous versions of RC will not work in v0.8.0 (Beta software lulz)**

## Disclaimer
It can be a hassle going through and updating config files.
If you'd rather just configure a fresh installation of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.

## Walkthrough
### 1. config.yml
Update `version` to be `6`.
Take the entire `server-lifecycle` and put it in the root yaml context. Rename `server-lifecycle` to be `magic-link`.
It should look like this
```yaml
magic-link:
#
# Amount of time, in seconds, that a server can go without pinging the proxy.
# If a server doesn't ping the proxy in this time, it will be declared stale
# and be unregistered from the proxy.
#
    server-timeout: 15

#
# Amount of time, in seconds, that a server should wait to ping the proxy.
# This setting cannot be higher than "server-timeout".
#
    server-ping-interval: 10
```

Remove the rest of `services` that remains after removing `server-lifecycle`

### 2. private.key
Create a new folder called `metadata` and move your `private.key` into it.

### 3. Port Redis and MySQL settings
Replace the current `storage` configuration nodes with:
```yaml
storage:
    provider: MYSQL



    additional-providers:
        MYSQL:
            host: "0.0.0.0"
            port: 3306
            user: "default"
            password: "password"
            database: "RustyConnector"
```
We plan on adding additional storage providers like SQLite, MongoDB, and more in the future. The strange formating here is laying the groundwork for that.

### 4. extras/data_transit.yml
Remove the entire `max-packet-length` parameter.

### 5. extras/dynamic_teleport.yml
At the end of the file, paste in:
```yaml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                     Family Injectors                     #
#                                                          #
#               ----------------------------               #
#                                                          #
# | Family injection is similar to Velocity's forced hosts #
# | system.                                                #
#                                                          #
# | It lets players connect to your network from certain   #
# | hosts, and it will connect them directly to a          #
# | specific family.                                       #
#               -----------------------------              #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
family-injectors:
    enabled: false

    #
    # List as many injectors as you'd like!
    #
    injectors:
        - host: "join.aelysium.group"
          family: "lobby"

```

### 6. extras/party.yml
After `switch-power`, paste in the following:
```yaml
    ############################################################
    #||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
    #                   On Server Overflow                     #
    #                                                          #
    #               ---------------------------                #
    # | Set the server overflow handler to use.                #
    # | A server is considered "overflown" based on            #
    # | Switch Power. If a server is overflown, this defines   #
    # | what should happen.                                    #
    #                                                          #
    #  ⚫ KICK_FROM_PARTY -                                    #
    #             The number of players that are over the      #
    #             server's threshold will be kicked from       #
    #             the party.                                   #
    #  ⚫ STAY_BEHIND -                                        #
    #             The number of players that are over the      #
    #             server's threshold will not be able to       #
    #             connect to the server but they'll stay       #
    #             in the party.                                #
    #             Next time the party switches servers,        #
    #             those players will also attempt to join the  #
    #             rest of the party.                           #
    #  ⚫ HARD_BLOCK -                                         #
    #             If there are to many players to fit into     #
    #             the new server, the entire party will be     #
    #             prevented from joining the server.           #
    #               ---------------------------                #
    #                                                          #
    #||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
    ############################################################
    on-server-overflow: HARD_BLOCK
```

## 7. families.yml
At the end of the file, paste in the following:
```yaml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Ranked Family                       #
#                                                          #
#               ---------------------------                #
#                                                          #
# | Ranked families implement matchmaking algorithms.      #
# | When a player attempts to connect to a ranked family   #
# | they will remain in their current family until         #
# | matchmaking is finished and a game can be started      #
# | the player is then connected to the family.            #
#                                                          #
# | Once a server is in-session it will automatically      #
# | be locked and new sessions won't be able to join       #
# | until the server is unlocked.                          #
#                                                          #
# | Ranked families can't be used as parent families.      #
#                                                          #
# WARNING:                                                 #
#   Ranked families are disrespectful of player parties    #
#   if a party attempts to connect to a ranked family      #
#   they will be blocked and forced to separate before     #
#   they can join. Full party support will most likely     #
#   come in a future update.                               #
#                                                          #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
ranked: []
```

## 8. Any family configs
Remove the `load-balancing` config option completly, instead paste in the following code block.
All load balancing configs now exist separate to the families. Be sure to copy your load balancing settings over from your individual families to the new load balancing configs.
```yaml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Load Balancing                      #
#                                                          #
#               ---------------------------                #
#                                                          #
# | Load balancing is the system through which networks    #
# | manage player influxes by spreading out players        #
# | across various server nodes.                           #
#                                                          #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
load-balancer: "default"
```

## 9. Port MCLoader configurations over to Magic Configs
Since most MCLoaders are usually duplicates of eachother, certain configurations have been moved to the proxy.
The new format for MCLoader `config.yml` is
```yaml title="MCLoader config.yml"
#
# If you need help updating your configs from an older version;
# take a look at our config migration docs:
#
# https://wiki.aelysium.group/rusty-connector/docs/updating/
#
version: 6

#
# Define the MCLoader Config to load from the proxy.
# To define new custom configs in the proxy look in the "magic_configs" folder.
# The definition below can contain ".yml" or not, it doesn't matter.
#
magic-config: "default"

#
# The address used to connect to this server.
# This address should match what a player would enter if they were trying to connect directly to this server.
# Make sure you also include the port number!
#
# If you leave this empty, RustyConnector will grab this server's port number and attempt to resolve your server's address from that.
#
# Example: 127.0.0.1:25565
#
address: ""

#
# An optional display name that can be used to represent this MCLoader in the console.
# If you do not provide a display name, this MCLoader's UUID will be shown instead.
# Please keep in mind that an MCLoader's UUID will change each time you restart it.
#
# Display names can't be longer than 16 characters.
#
display-name: ""
```

Notice how details such as `family`, `soft-cap`, and `hard-cap` have been removed? These now appear in `magic_configs` on the proxy.
MCLoaders now refernce a single magic_config by name. Then, once they register, they register using all the parameters listed in that magic config. This way you can update the family names for MCLoaders en-mass, without needing to access them all directly.

Feel free to set `magic-config` to whatever you want. If an MCLoader tries to connect with a magic config that doesn't exist, a new one will be created.