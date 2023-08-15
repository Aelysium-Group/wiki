---
title: ℹ️ Migrating from V3 to V4
sidebar_position: 4
---
On this page, we will walk you through how to update your config from v3 to v4!
v4 introduces many new config files! Be ready to do some copy and pasting.

## Disclaimer
It can be a hassle going through and updating config files.
If you'd rather just configure a fresh installation of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.

## Unchanging
All configuration files are changed in some way.

## Walkthrough
### 1. Update config version
In order for RC to load all of it's new configs, update your config.yml version to `version: 4` immediately.

### 2. Update server lifecycle.
In your config.yml, replace `services.server-lifecycle` with the following.
```yml
#
# Manages the lifecycles of servers.
#
# Also manages the lifecycle of a player's home server if you are using Static Families.
#
    server-lifecycle:
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
With the introduction of Magic Link, servers now ping the proxy continuously.
There's no longer any such thing as a "register" or "unregister" request/command.

### 3. Migrate `families` to `families.yml`
After adjusting your server lifecycle options, your config.yml should load properly allowing the rest of v4's new config files to load.
Among these should be the new `families.yml`. Take all of your families data from `config.yml` and migrate it to `families.yml`.
Make sure that you delete the entire `families` section from `config.yml` as it is no-longer needed.

Additionally, remove the `mysql` section from `config.yml` and move that to `families.yml` as well.

### 3. Migrate `mysql` to `families.yml`
After migrating your families to `families.yml`.
Go back and also migrate the `mysql` section from `config.yml` to `families.yml` as well.

### 4. Clean up `config.yml`
Delete the following config nodes from `config.yml`. Also be sure to delete their respective sub-nodes and comments.

#### Delete:
- `families`
- `mysql`
- `message-tunnel`
- `boot-commands`

### 5. Adjust `logger.yml`
Because of the addition of the Magic Link service, some logging stuff has changed.
In `logger.yml` make the following changes.
- **Update** `messaging.registration-request` to `messaging.registration`
- **Update** `messaging.unregistration-request` to `messaging.unregistration`
- **Delete** `messaging.pong`
- **Update** `console-icons.requesting-registration` to `console-icons.attempting-registration`
- **Update** `console-icons.requesting-unregistration` to `console-icons.attempting-unregistration`
- **Delete** `console-icons.call-for-registration`
- **Delete** `console-icons.pong`

### 6. Add parent families to `families/family.type.yml`
In your `families` folder, adjust each of your individual family config files by adding the following code block just below the first comment block.
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Parent Family                       #
#                                                          #
#               ---------------------------                #
# | The parent family is the family that players will      #
# | be sent to when they run /hub (Enabled in              #
# | dynamic_teleport.yml), or when a fallback occurs.      #
# | If the parent family is unavailable, the root family   #
# | is used instead.                                       #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
parent-family: ""
```

### 7. Migrate tpa settings to `dynamic_teleport.yml`
Assuming you've been using the `tpa` feature in your family configs; you'll need to migrate these settings to `dynamic_teleport.yml`.
In `dynamic_teleport.yml` enable `tpa`, define which families it should be allowed in, and set the other options.

Afterward, delete the entire `tpa` block from each of your family configs.

### 8. Update load balancing comment in `families/family.type.yml`
In your `families` folder, replace each comment for `load-balancing` with the following.
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Algorithm                         #
#                                                          #
#               ---------------------------                #
# | Depending on your needs, you might want to balance     #
# | player influxes in various ways.                       #
# | RustyConnector currently supports the following.       #
# | balancing algorithms if there are other algorithms     #
# | you'd like to see in the future, let us know!          #
#                                                          #
#  ⚫ LEAST_CONNECTION -                                   #
#             Connects players to the server with the      #
#             the fewest players currently connected.      #
#             This mode is best if you want evenly         #
#             distributed players across all servers.      #
#  ⚫ MOST_CONNECTION -                                    #
#             Connects players to the server with the      #
#             the most players currently connected.        #
#             This mode is best if you want to fill        #
#             servers up as quickly as possible.           #
#  ⚫ ROUND_ROBIN -                                        #
#             Every time a connection occurs, the next     #
#             server in the load balancer will be queued   #
#             for the next connection.                     #
#             Once the load balancer reaches the end of    #
#             the server queue, the load balancer will     #
#             loop back to the beginning and start again.  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
```
This new comment lists a new load balancing algorithm called `MOST_CONNECTION`.