---
title: Config V3
sidebar_position: 1
---
# Contents
## RC-Velocity
- [config.yml](#configyml-velocity)
- [logger.yml](#loggeryml-velocity)
- [whitelist.yml Generic](#whitelistyml-velocity)
- [family.scalar.yml Generic](#familyscalaryml-velocity)
- [family.static.yml Generic](#familystaticyml-velocity)
- [webhooks.yml](#webhooksyml-velocity)
## RC-Paper
- [config.yml](#configyml-paper)

A "Generic" config is a template that is copied and pasted into a config with a name different from what's listed. (You might have a family config named `lobby.yml` instead of `family.yml`)

All RustyConnector versions now have a `private.key` file which will generate with them. This file should contain nothing except for the private key that you want to use.

## config.yml (Velocity)
[Back to top](#contents)
```yml
###########################################################################################################
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
###########################################################################################################
#                                                                                                         #
#   /███████                           /██                                                                #
#  | ██__  ██                         | ██                                                                #
#  | ██  \ ██  /██   /██   /███████  /██████    /██   /██                                                 #
#  | ███████/ | ██  | ██  /██_____/ |_  ██_/   | ██  | ██                                                 #
#  | ██__  ██ | ██  | ██ |  ██████    | ██     | ██  | ██                                                 #
#  | ██  \ ██ | ██  | ██  \____  ██   | ██ /██ | ██  | ██                                                 #
#  | ██  | ██ |  ██████/  /███████/   |  ████/ |  ███████                                                 #
#  |__/  |__/  \______/  |_______/     \___/    \____  ██                                                 #
#                                               /██  | ██                                                 #
#                                              |  ██████/                                                 #
#    /██████                                    \______/                /██                               #
#   /██__  ██                                                          | ██                               #
#  | ██  \__/   /██████   /███████   /███████    /██████    /███████  /██████     /██████    /██████      #
#  | ██        /██__  ██ | ██__  ██ | ██__  ██  /██__  ██  /██_____/ |_  ██_/    /██__  ██  /██__  ██     #
#  | ██       | ██  \ ██ | ██  \ ██ | ██  \ ██ | ████████ | ██         | ██     | ██  \ ██ | ██  \__/     #
#  | ██    ██ | ██  | ██ | ██  | ██ | ██  | ██ | ██_____/ | ██         | ██ /██ | ██  | ██ | ██           #
#  |  ██████/ |  ██████/ | ██  | ██ | ██  | ██ |  ███████ |  ███████   |  ████/ |  ██████/ | ██           #
#   \______/   \______/  |__/  |__/ |__/  |__/  \_______/  \_______/    \___/    \______/  |__/           #
#                                                                                                         #
#                                                                                                         #
#                                        Welcome to RustyConnector!                                       #
#                            https://github.com/Aelysium-Group/rusty-connector                            #
#                                                                                                         #
#                            -------------------------------------------------                            #
#                                                                                                         #
# | RustyConnector is your go-to load-balancer and     | Built for usage on high-traffic networks;        #
# | player manager for Minecraft networks!             | RustyConnector is meant to be scalable and easy  #
#                                                      | to maintain!                                     #
#                                                                                                         #
#                               | If you ever need assistance setting up your                             #
#                               | plugin come join us in our discord server:                              #
#                               | https://join.aelysium.group/                                            #
#                                                                                                         #
#                            -------------------------------------------------                            #
#                                                                                                         #
#                                     Produced by: Aelysium | Nathan M.                                   #
#                                                                                                         #
#                            -------------------------------------------------                            #
#                                                                                                         #
###########################################################################################################
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
###########################################################################################################
#
# If you need help updating your configs from an older version;
# take a look at our config migration docs:
#
# https://github.com/Aelysium-Group/rusty-connector/wiki/Config-Migration
#
version: 3

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Families                          #
#                                                          #
#               ---------------------------                #
# | Families are a collection of servers. To register      #
# | new servers into a family, you need to configure       #
# | your sub-servers appropriately.                        #
#                                                          #
# | If your sub-servers use family names that don't match  #
# | what you define here, they will not be registered.     #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
families:

#
# The root family. Once a player connects and is validated.
# This is the family that they will automatically be routed to.
#
# The root family will ALWAYS be defined as a `scalar` family.
# Having a root family defined as `static` is not currently possible
#
    root-family:
        name: "lobby"

#
# If a player is kicked or disconnected from a family in this proxy.
# Should the root family catch them? If not, they will disconnect from the whole network.
# This setting is great if you want a player to join back into the lobby if they get kicked from
# a gamemode or sub-family.
#
# Currently, this method will only work for certain if all servers in the root-family are guaranteed to
# allow players to join. (i.e. they can't have a whitelist set).
# If some servers in your root family have whitelists set, a player may not be able to connect to the family!
#
        catch-disconnecting-players: false

#########################
#    Scalar Families    #
#########################
#
# Families defined here are optimized for stateless minecraft gamemodes.
# They support various load balancing algorithms and auto-scaling.
#
    scalar:
        - "skywars"
        - "kitpvp"

#########################
#    Static Families    #
#########################
#
# Families defined here are optimized for stateful minecraft gamemodes.
# When players join a static family, their initial server will be memorized, and they'll be connected
# back into that server on future family connections as well.
#
# To define a new static family change static from `static: []` to:
#
# static:
#       - "family name"
#       - "family name"
#
    static: []


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Database                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

#########################
#         Redis         #
#########################
#
# Redis is required in order to provide quick and easy syncing between the proxy and sub-servers
#
redis:
    host: ""
    port: 3306
    user: "default"
    password: "password"

#
# The name of the data channel that sync information should be sent over.
# If you don't know what this is, don't mess with it! The default value here is fine.
# You probably won't break anything, but you generally just shouldn't touch things you don't understand.
#
    data-channel: "rustyConnector-sync"

#########################
#         MySQL         #
#########################
#
# MySQL is required in order for static families to operate properly
#
mysql:
    host: ""
    port: 3306
    user: "root"
    password: "password"
    database: "RustyConnector"

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Whitelist                         #
#                                                          #
#               ---------------------------                #
# | RustyConnector attempts to be as flexible as possible  #
# | when configuring whitelists!                           #
# | To setup a whitelist, you'll need to navigate to the   #
# | "whitelists" folder and follow the directions in the   #
# | provided whitelist-template.                           #
#                                                          #
# | More often than not, you will have multiple whitelist  #
# | configurations that you may want to switch between     #
# | during various points in your network's lifetime.      #
# | This system allows you to set up as many pre-defined   #
# | whitelists as you'd like, and enable or switch between #
# | then whenever you want!                                #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
whitelist:
#
# If you set this to be on. You will be turning on a whitelist which will **effect your entire proxy**!
# If you only want to effect certain families or individual servers. Look into the appropriate configuration locations!
#
    enabled: false

#
# The name of the whitelist configuration file in your "whitelists" folder.
# You can include the ".yml" at the end of the name below if you'd like. It doesn't matter either way.
#
    name: "whitelist-template"

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                     Message Tunnel                       #
#                                                          #
#               ---------------------------                #
# | The message tunnel allows you to have more control     #
# | over what messages you will allow the proxy to accept  #
# | or decline.                                            #
# | This does NOT affect what messages are being sent over #
# | your Redis channels. All it does is control what your  #
# | proxy will and will not accept.                        #
#                                                          #
#  NOTE: This section has NOTHING to do with players!      #
#        Instead, it is used to provide better control     #
#        over where servers are allowed to auto-register   #
#        from.                                             #
#                                                          #
#  NOTE: This section can more or less completely destroy  #
#        the scalability that RustyConnector provides.     #
#        While it does prevent the registration of IPs     #
#        we don't recognize, it also prevents the          #
#        registration of new IPs without manually adding   #
#        them below.                                       #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
message-tunnel:
#
# The number of messages that will be saved into memory.
# The message cache allows you to view messages that have recently been received by the proxy.
# As new messages are generated, old messages will get pushed out of the cache.
#
# You can view cached messages using the `/rc message` command.
#
    message-cache-size: 50

#
# The max length that messages received over Redis are allowed to be.
# If a message is over this value it will get thrown away!
# The size below should work for just about everything that is sent by RustyConnector.
# If you are defining larger addresses or names on your paper servers, you might want to increase this.
#
    message-max-length: 512

#
# The tunnel whitelist.
#
# By listing IP addresses here. The plugin will NEVER accept messages if they don't contain one of these IP Addresses!
# If you know exactly which IP Addresses you want to allow messages from. You can whitelist them here!
#
# VERY IMPORTANT: If you are getting messages over your redis network that you don't recognize:
#                 YOU SHOULD RESET YOUR REDIS CREDENTIALS IMMEDIATELY!
  #                 This feature only exists to give you a bit more flexibility in how strict your plugin can be.
#
    whitelist:
        enabled: false
        addresses:
          - "127.0.0.1"

#
# The tunnel denylist.
#
# By listing IP addresses here. The plugin will NEVER accept messages containing one of these IP Addresses!
#
# NOTE: The denylist has precedence over the whitelist. If an IP is defined in both the whitelist AND the denylist
#       it will not be accepted.
#
# VERY IMPORTANT: If you are getting messages over your redis network that you don't recognize:
#                 YOU SHOULD RESET YOUR REDIS CREDENTIALS IMMEDIATELY!
#                 This feature only exists to give you a bit more flexibility in how strict your plugin can be.
#
    denylist:
        enabled: false
        addresses:
          - "127.0.0.1"


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Boot Commands                       #
#                                                          #
#               ---------------------------                #
# | You can run proxy commands when RustyConnector         #
# | finishes booting up!                                   #
#                                                          #
# | This is a great way to automatically send a            #
# | register all command through the data channel          #
# | after a server restart!                                #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
boot-commands:
    enabled: false

#
# The proxy commands to send on-boot.
# These commands will be sent, in order, from top to bottom.
# Remember that these are proxy commands. You won't be able to run commands on your sub-servers from here.
# This section doesn't care about whether other plugins on the proxy have started yet!
# If you run commands from other plugins, they might not work because those plugins may not have been booted up yet!
#
    commands:
      - "rc register all"

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Services                          #
#                                                          #
#               ---------------------------                #
# | Services are small, in-built applications that         #
# | carry out specific duties within RustyConnector        #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
services:
#
# Manages the lifecycles of servers.
#
# Also manages the lifecycle of a player's home server if you are using Static Families.
#
    server-lifecycle:
        enabled: true
#
# Time, in seconds, between sending out a ping and expecting a pong.
# Servers will also send their current player count with their pong response. This way, if the proxy
# somehow unsyncs it's player count from the actual count, it can be corrected.
#
        interval: 30
#
# If a server doesn't respond to the most recent ping before the heart's next interval.
# Should the server get unregistered?
#
# This is an additional life-cycle option in-case servers become unresponsive and unable to unregister themselves.
# If a server can't unregister itself (bad shutdown, server freezing, bad connection between server and proxy, etc) this will be able to see that it's unresponsive and unregister it.
#
        unregister-on-ignore: false

#
# Manages the load balancing of the proxy's families.
#
    family-server-sorting:
        enabled: true
#
# Time, in seconds, between when the families sort their servers. This interval will cause your proxy to sort ALL of the servers registered to it!
# The higher this value the higher accuracy your load balancing will operate at.
# If you have larger sets of servers on a family, setting the interval to be larger can help save resources.
#
# If you disable this heart, you are effectively setting load balancing for your entire network to be ROUND_ROBIN
#
        interval: 20
```

## logger.yml (Velocity)
[Back to top](#contents)
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                         Logger                           #
#                                                          #
#               ---------------------------                #
# | In order to operate, RustyConnector passes lots of     #
# | data around. In this file, you can control what does   #
# | and does not appear in your console when               #
# | something happens!                                     #
#                                                          #
# | Everything in this config is off by default            #
# | except for certain important messages.                 #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
#
# Generally speaking trashed messages are thrown away because they have an
# invalid private key or because they were sent by the proxy.
#
# You can usually set this to `false` so that only messages that are from other servers are saved.
#
save-trashed-messages: true

messaging:
# Should we log when a server requests to be registered?
# NOTE: This option can spam your proxy console if your proxy sends out a call-for-registration
#       which requires all listening servers to submit a registration request
    registration-request: false

# Should we log when a server requests to be unregistered?
    unregistration-request: false

# Should we log when the proxy calls for all servers to register themselves?
    call-for-registration: false

# Should we log when the proxy makes a ping request to servers?
    ping: false

# Should we log when the proxy receives a ping response from a server? (Also called a `pong`)
    pong: false

# Should we log anytime the message parser throws away a message? (Can generate lots of console spam on busy servers!)
    message-parser-trash: false

security:
# Should we log when a message fails message tunnel validation?
    message-tunnel-failed-message: true

log:
# Log what we do when a player joins the server
    player-join: false

# Log what happens when a player leaves the server
    player-leave: false

    # Log what happens when a player moves between servers
    player-move: false

    # Log anytime a family re-balances it's server priorities
    family-balancing: false

console-icons:
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Console Icons                       #
#                                                          #
#               ---------------------------                #
# | Any system developer will tell you that watching       #
# | logs can sometimes feel messy and overwhelming.        #
# | Sometimes, this is because there are just to many      #
# | things you have to read in such short amounts of time  #
#                                                          #
# | To address this issue. We've implemented something     #
# | we're calling Console Icons. These are short           #
# | combinations of characters meant to convey a meaning.  #
# | It's a known fact that the human eye recognizes shapes #
# | faster than it can process words. So we wanted to      #
# | take advantage of that ability.                        #
#                                                          #
# | If you find that it's not your style, you are welcome  #
# | to replace the icons below with your own worded        #
# | versions! Or you can adjust them in a way that helps   #
# | you interpret them faster and better!                  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

#
#   Symbol used when a server is requesting the proxy to register it into a family.
#   Example: [server name](127.0.0.1:25565) ?>>>? family-name
#
    requesting-registration: "?>>>?"

#
#   Symbol used when a server gets registered into a family
#   Example: [server name](127.0.0.1:25565) >>>>> family-name
#
    registered: ">>>>>"

#
#   Symbol used when the proxy asks all servers to register themselves
#   Example: (Velocity)[127.0.0.1] |>~=- ALL SERVERS
#
    call-for-registration: "|>~=-"

#
#   Symbol used when a server requests to be unregistered from a family
#   Example: [server name](127.0.0.1:25565) ?///? family-name
#
    requesting-unregistration: "?///?"

#
#   Symbol used when a server gets unregistered from a family
#   Example: [server name](127.0.0.1:25565) ///// family-name
#
    unregistered: "/////"

#
#   Symbol used when a previous request gets canceled as a result of an error
#   Example: [server name](127.0.0.1:25565) xxxxx family-name
#
    canceled-request: "xxxxx"

    #
    #   Symbol used when a family is balancing its servers
    #   Example: family-name /---\
    #
    family-balancing: "▲▼▲▼▲"

    #
    #   Symbol used when the proxy pings a server
    #   Example: Proxy |>>>> [family name] [server name](127.0.0.1:25565)
    #
    ping: "|>>>>"

    #
    #   Symbol used when a server responds to a ping
    #   Example: Proxy <<<<| [family name] [server name](127.0.0.1:25565)
    #
    pong: "<<<<|"
```

## family.scalar.yml (Velocity)
[Back to top](#contents)
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Scalar Family                       #
#                                                          #
#               ---------------------------                #
# | Families are a collection of servers. To register      #
# | new servers into a family, you need to configure       #
# | your sub-servers appropriately.                        #
#                                                          #
# | If your sub-servers use family names that don't match  #
# | what you define in config.yml, they will               #
# | not be registered.                                     #
#                                                          #
# | In this config you can manage this family's            #
# | load-balancing, whitelist, and more!                   #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Load Balancing                      #
#                                                          #
#               ---------------------------                #
# | Load balancing is the system through which networks    #
# | manage player influxes by spreading out players        #
# | across various server nodes.                           #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
load-balancing:

#
# If set to `true`. the load balancer will attempt to put players into the servers with the highest `weight`
# `weight` is defined in the individual server configs on RustyConnector-paper.
#
# If multiple server are set to be the same weight level, the load balancer will use `algorithm` on those servers
# until they have been filled. It will then step to the next, lower, weight level and continue.
#
    weighted: false
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
    algorithm: ROUND_ROBIN


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                       Persistence                        #
#                                                          #
#               ---------------------------                #
# | Persistence defines whether or not the load balancer   #
# | should give up if it's first attempt to connect a      #
# | player to this family fails.                           #
# | If this is off, the player will have to manually       #
# | try again if the attempt fails.                        #
# | If this is on, the load balancer will keep trying      #
# | until it's number of attempts has exceeded `attempts`  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    persistence:
        enabled: false

#
# This is how many times the load balancer will attempt to connect a player to this family before giving up.
# If you have lots of servers in this family with whitelists, it might be better to increase this value.
#
# Set to -1 for the family to never give up. (In most cases this isn't really the best idea)
#
        attempts: 5

whitelist:
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Whitelist                         #
#                                                          #
#               ---------------------------                #
# | RustyConnector attempts to be as flexible as possible  #
# | when configuring whitelists!                           #
# | To setup a whitelist, you'll need to navigate to the   #
# | "whitelists" folder and follow the directions in the   #
# | provided whitelist-template.                           #
#                                                          #
# | More often than not, you will have multiple whitelist  #
# | configurations that you may want to switch between     #
# | during various points in your network's lifetime.      #
# | This system allows you to set up as many pre-defined   #
# | whitelists as you'd like, and enable or switch between #
# | then whenever you want!                                #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    enabled: false

#
# The name of the whitelist configuration file in your "whitelists" folder.
# You can include the ".yml" at the end of the name below if you'd like. It doesn't matter either way.
#
    name: "whitelist-template"

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
# Players will receive a notification in-chat once their request expires.
#
# `request-lifetime` is in minutes.
#
    request-lifetime: 5
```

## family.static.yml (Velocity)
[Back to top](#contents)
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Static Family                       #
#                                                          #
#               ---------------------------                #
# | Families are a collection of servers. To register      #
# | new servers into a family, you need to configure       #
# | your sub-servers appropriately.                        #
#                                                          #
# | If your sub-servers use family names that don't match  #
# | what you define in config.yml, they will               #
# | not be registered.                                     #
#                                                          #
# | In this config you can manage this family's            #
# | load-balancing, whitelist, and more!                   #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                     First Connection                     #
#                                                          #
#               ---------------------------                #
# | When players first connect to a static family, they    #
# | will be routed to the best server based on the         #
# | family's load balancing algorithm (just like scalar    #
# | families.)                                             #
#                                                          #
# | Once the player is routed to the proper server,        #
# | that server will be linked to that player and anytime  #
# | the player joins the family in the future, they'll     #
# | be connected to that specific server.                  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
first-connection:
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Load Balancing                      #
#                                                          #
#               ---------------------------                #
# | Load balancing is the system through which networks    #
# | manage player influxes by spreading out players        #
# | across various server nodes.                           #
#                                                          #
# | In static families, load balancing only effects the    #
# | first time a player connects to the family.            #
# | Once the player connects for the first time, the       #
# | server they connected to will be remembered and        #
# | they'll be joined to that server on                    #
# | consecutive connections in the future too.             #
#                                                          #
# | The server that get's linked to a player is called     #
# | that player's "Home Server".                           #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    load-balancing:

#
# If set to `true`. the load balancer will attempt to put players into the servers with the highest `weight`
# `weight` is defined in the individual server configs on RustyConnector-paper.
#
# If multiple server are set to be the same weight level, the load balancer will use `algorithm` on those servers
# until they have been filled. It will then step to the next, lower, weight level and continue.
#
        weighted: false
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
        algorithm: ROUND_ROBIN


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                       Persistence                        #
#                                                          #
#               ---------------------------                #
# | Persistence defines whether or not the load balancer   #
# | should give up if it's first attempt to connect a      #
# | player to this family fails.                           #
# | If this is off, the player will have to manually       #
# | try again if the attempt fails.                        #
# | If this is on, the load balancer will keep trying      #
# | until it's number of attempts has exceeded `attempts`  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
        persistence:
            enabled: false

#
# This is how many times the load balancer will attempt to connect a player to this family before giving up.
# If you have lots of servers in this family with whitelists, it might be better to increase this value.
#
# Set to -1 for the family to never give up. (In most cases this isn't really the best idea)
#
            attempts: 5


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                 Consecutive Connections                  #
#                                                          #
#               ---------------------------                #
# | When a player connects to the family again after       #
# | already connecting at least once, they'll be routed    #
# | Directly to their home server if it's available.       #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
consecutive-connections:

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#            If The Home Server is Unavailable             #
#                                                          #
#               ---------------------------                #
# | If the home server is unavailable, what should happen  #
# | to the player?                                         #
#                                                          #
#  ⚫ CANCEL_CONNECTION_ATTEMPT -                          #
#             Stop the player from connecting to this      #
#             family. Tell them that their server is       #
#             unavailable and that they should try again   #
#             later.                                       #
#  ⚫ ASSIGN_NEW_HOME -                                    #
#             Connect the player to the load balancer and  #
#             give them a new home server.                 #
#             This option does not display an error to     #
#             the player.                                  #
#  ⚫ CONNECT_WITH_ERROR -                                 #
#             Connect the player to a random server in     #
#             the family (in accordance with the load      #
#             balancing algorithm) and inform them that    #
#             their home server was unavailable.           #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    home-server:
        if-unavailable: CANCEL_CONNECTION_ATTEMPT

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Expiration                        #
#                                                          #
#               ---------------------------                #
# | Set whether a player's home server should expire       #
# | after a certain amount of time.                        #
# | Set to "NEVER" if you don't want a player's home       #
# | server to ever expire.                                 #
# | Otherwise, set it as a number of months,               #
# | days, or hours.                                        #
#                                                          #
#   The time formats don't care if you:                    #
#       - Use shorthand versions ("d" instead of "day")    #
#       - Use plurals ("Day" versus "Days")                #
#       - Use caps ("day" versus "DAY")                    #
#       - Use whitespaces ("1d" versus "1 d")              #
#               ---------------------------                #
#                         Examples                         #
#                                                          #
#       "30 Months" - To expire after 30 months.           #
#       "2d" - To expire after 2 days.                     #
#       "1 hour" - To expire after 1 hour.                 #
#                                                          #
#               ---------------------------                #
#                           NOTE                           #
#       If you activate expiration (changing it from       #
#       `NEVER` to an actual value.)                       #
#       Any already existing home servers which were       #
#       originally set as `NEVER` will be updated to       #
#       expire at `expiration` amount of time from now.    #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
        expiration: NEVER

whitelist:
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Whitelist                         #
#                                                          #
#               ---------------------------                #
# | RustyConnector attempts to be as flexible as possible  #
# | when configuring whitelists!                           #
# | To setup a whitelist, you'll need to navigate to the   #
# | "whitelists" folder and follow the directions in the   #
# | provided whitelist-template.                           #
#                                                          #
# | More often than not, you will have multiple whitelist  #
# | configurations that you may want to switch between     #
# | during various points in your network's lifetime.      #
# | This system allows you to set up as many pre-defined   #
# | whitelists as you'd like, and enable or switch between #
# | then whenever you want!                                #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
    enabled: false

#
# The name of the whitelist configuration file in your "whitelists" folder.
# You can include the ".yml" at the end of the name below if you'd like. It doesn't matter either way.
#
    name: "whitelist-template"

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
# Players will receive a notification in-chat once their request expires.
#
# `request-lifetime` is in minutes.
#
    request-lifetime: 5
```


## whitelist.yml (Velocity)
[Back to top](#contents)
```yml
############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Whitelist                         #
#                                                          #
#               ---------------------------                #
# | Setup your whitelist! The name of this whitelist       #
# | is the same as the name you give this file!            #
#                                                          #
# | To make a new whitelist, just duplicate this           #
# | template, rename it, and configure it how you'd like!  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                         Players                          #
#                                                          #
#               ---------------------------                #
# | The players whitelist allows three parameters to give  #
# | your criteria more or less flexibility!                #
# | Username, uuid, and IP Address                         #
#                                                          #
# | You are free to use all three or only one of these     #
# | criteria to check if someone is whitelisted!           #
# | As a bear minimum, you MUST at least include username. #
#                                                          #
# NOTE: It's not hard for any good hacker to spoof an      #
#       IP Address. As such, make sure you are properly    #
#       validating your connections and not using only IP  #
#       Addresses as a whitelist criteria!                 #
# NOTE: Make sure that if you are working with player      #
#       IP Addresses that you properly inform your members #
#       and that you never leak that information!          #
#                                                          #
#       There are laws that protect user data!             #
#       Don't break them!                                  #
#                                                          #
# NOTE: You'll want to make sure that you use a UUID       #
#       format containing dashes! If you use the format    #
#       without dashes the whitelist will fail to load!    #
#                                                          #
#       Example:                                           #
#       00000000-0000-0000-0000-000000000000               #
#                                                          #
#       Example (INVALID):                                 #
#       00000000000000000000000000000000                   #
#                                                          #
#                                                          #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

#
# Should the whitelist validate player information
#
use-players: false
players:

# Only check for username
  - username: "user1-username"

# Check for username AND uuid
  - username: "user3-username"
    uuid: "00000000-0000-0000-0000-000000000000"

# Check for username AND IP Address
  - username: "user4-username"
    ip: "127.0.0.1"

# Check for username, uuid, AND IP Address
  - username: "user4-username"
    uuid: "00000000-0000-0000-0000-000000000000"
    ip: "127.0.0.1"


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Countries                         #
#                                                          #
#               ---------------------------                #
# | If you'd only like players from certain countries to   #
# | be allowed to join your server. You can use this!      #
# | It's possible that setting this might slow down the    #
# | time it takes for players to clear this whitelist!     #
#                                                          #
# NOTE: VPNs allow members to easily change what location  #
#       They appear to a network from. This isn't          #
#       something that can be fixed easily.                #
# NOTE: This setting involves using player IP Addresses    #
#       to get a VERY GENERAL idea of where they are.      #
#       Make sure that if you are working with player      #
#       IP Addresses that you properly inform your members #
#       and that you never leak that information!          #
#                                                          #
#       There are laws that protect user data!             #
#       Don't break them!                                  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

#
# Should the whitelist validate players based on their IP Address' country
# !!!!!!!!! THIS FEATURE ISN'T YET IMPLEMENTED !!!!!!!!!
#
use-country: false
countries:
  - US
  - CA
  - UK

# !!!!!!!!! THIS FEATURE ISN'T YET IMPLEMENTED !!!!!!!!!

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                       Permission                         #
#                                                          #
#               ---------------------------                #
# | If you'd only like players with a certain permission   #
# | to join this family, enable this value!                #
#                                                          #
#   rustyconnector.whitelist.<whitelist name>              #
# | Gives a player permission to pass the                  #
# | specific whitelist.                                    #
#                                                          #
#   rustyconnector.whitelist.*                             #
# | Gives a player permission to pass all whitelists.      #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
use-permission: false


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                      Kick Message                        #
#                                                          #
#               ---------------------------                #
# | The message to show a player if they                   #
# | fail the whitelist.                                    #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
message: "You aren't whitelisted on this server!"


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                         Strict                           #
#                                                          #
#               ---------------------------                #
# | Set if the whitelist is strict or not.                 #
#                                                          #
# | If `true` then a player must match all                 #
# | activated filters.                                     #
#                                                          #
# | If `false` then a player must only match one of the    #
# | activated filters.                                     #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
strict: false


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Inverted                          #
#                                                          #
#               ---------------------------                #
# | Inverting a whitelist will cause it to operate as      #
# | a blacklist.                                           #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
inverted: false
```

## webhooks.yml (Velocity)
[Back to top](#contents)
```yml
#################################################################################
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                                Discord Webhooks                               #
#                                                                               #
#                          ---------------------------                          #
#                                                                               #
# | Webhooks allow you to connect directly into Discord                         #
# | and send messages to specific channels.                                     #
#                                                                               #
# | You can use this file to configure as many webhooks                         #
# | as you want!                                                                #
#                                                                               #
#                          ---------------------------                          #
#                                                                               #
# | First time working with this file?                                          #
# | Check out our setup docs:                                                   #
#                                                                               #
#    https://github.com/Aelysium-Group/rusty-connector/wiki/Discord-Webhooks    #
#                                                                               #
#                          ---------------------------                          #
#                                                                               #
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#################################################################################

enabled: false

webhooks:
    - name: "Proxy Webhook"
      url: "https://example.com/"
      scope: PROXY
      flags:
          - "register_all"

    - name: "Family Webhook"
      url: "https://example.com/"
      scope: FAMILY
      target-family: "lobby"
      flags:
          - "player_join"
```

## config.yml (Paper)
[Back to top](#contents)
```yml
###########################################################################################################
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
###########################################################################################################
#                                                                                                         #
#   /███████                           /██                                                                #
#  | ██__  ██                         | ██                                                                #
#  | ██  \ ██  /██   /██   /███████  /██████    /██   /██                                                 #
#  | ███████/ | ██  | ██  /██_____/ |_  ██_/   | ██  | ██                                                 #
#  | ██__  ██ | ██  | ██ |  ██████    | ██     | ██  | ██                                                 #
#  | ██  \ ██ | ██  | ██  \____  ██   | ██ /██ | ██  | ██                                                 #
#  | ██  | ██ |  ██████/  /███████/   |  ████/ |  ███████                                                 #
#  |__/  |__/  \______/  |_______/     \___/    \____  ██                                                 #
#                                               /██  | ██                                                 #
#                                              |  ██████/                                                 #
#    /██████                                    \______/                /██                               #
#   /██__  ██                                                          | ██                               #
#  | ██  \__/   /██████   /███████   /███████    /██████    /███████  /██████     /██████    /██████      #
#  | ██        /██__  ██ | ██__  ██ | ██__  ██  /██__  ██  /██_____/ |_  ██_/    /██__  ██  /██__  ██     #
#  | ██       | ██  \ ██ | ██  \ ██ | ██  \ ██ | ████████ | ██         | ██     | ██  \ ██ | ██  \__/     #
#  | ██    ██ | ██  | ██ | ██  | ██ | ██  | ██ | ██_____/ | ██         | ██ /██ | ██  | ██ | ██           #
#  |  ██████/ |  ██████/ | ██  | ██ | ██  | ██ |  ███████ |  ███████   |  ████/ |  ██████/ | ██           #
#   \______/   \______/  |__/  |__/ |__/  |__/  \_______/  \_______/    \___/    \______/  |__/           #
#                                                                                                         #
#                                                                                                         #
#                                        Welcome to RustyConnector!                                       #
#                            https://github.com/Aelysium-Group/rusty-connector                            #
#                                                                                                         #
#                            -------------------------------------------------                            #
#                                                                                                         #
# | RustyConnector is your go-to load-balancer and     | Built for usage on high-traffic networks;        #
# | player manager for Minecraft networks!             | RustyConnector is meant to be scalable and easy  #
#                                                      | to maintain!                                     #
#                                                                                                         #
#                               | If you ever need assistance setting up your                             #
#                               | plugin come join us in our discord server:                              #
#                               | https://join.aelysium.group/                                            #
#                            -------------------------------------------------                            #
#                                                                                                         #
#                                     Produced by: Aelysium | Nathan M.                                   #
#                                                                                                         #
#                            -------------------------------------------------                            #
#                                                                                                         #
###########################################################################################################
#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
###########################################################################################################
#
# If you need help updating your configs from an older version;
# take a look at our config migration docs:
#
# https://github.com/Aelysium-Group/rusty-connector/wiki/Config-Migration
#
version: 3

server:
#
# This field is required.
# The name of this server.
# This is mostly used to help you identify this server when reading your proxy logs.
#
# Names between multiple servers are allowed to be duplicate, though this is not suggested.
#
    name: ""

#
# This field is required.
# Enter the address of this server! This address should match what a player would enter if they were trying to
# connect directly to this server. Make sure you also include the port number!
#
# Example: 127.0.0.1:25565
#
    address: ""

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                Family and Load Balancing                 #
#                                                          #
#               ---------------------------                #
# | Families are a collection of servers. To register      #
# | new servers into a family, you need to configure       #
# | your sub-servers appropriately.                        #
#                                                          #
# | If your sub-servers use family names that don't match  #
# | what you define in your  proxy, they will not          #
# | be registered.                                         #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
#
# The name of the family that this plugin should be registered into.
# If this name does not match one of the names listed on your proxy; yhis server will not get registered.
#
    family: ""

#########################
#     Load Balancing    #
#########################
#
# If the family that this server is associated with has load balancing which involves "weight" you can set this server's weight level here.
# When servers are added to a weighted family. The family will first add players to the servers with the highest weight.
#
    weight: 0

#########################
#      Player Caps      #
#########################
    player-cap:
#
# The soft player cap will define, at what point, this server should stop accepting regular players.
# This allows you to mark the server as "full" while still allowing extra space for VIP and staff.
#
# To allow players to join past this point, you can give them one of two permissions:
# rustyconnector.softCapBypass - Bypass the soft cap of any server on this network
# rustyconnector.<family name>.softCapBypass - Bypass the soft cap of any server inside of this family
#
        soft: 20

#
# The hard player cap is the point at which no more players are allowed to join the server.
# if you wish to still allow high-level staff to access a server at hard player cap. You can grant them the permission:
# rustyconnector.hardCapBypass - Bypass the hard cap of any server on this network
# rustyconnector.<family name>.hardCapBypass - Bypass the hard cap of any server inside of this family. This also bypasses the soft cap too.
#
        hard: 30

#
# NOTE: If you set soft-player-cap to be the same number as hard-player-cap.
#       This server will run in player-limit mode. In which case, once player count
#       reaches the defined value, no more players will be allowed to enter.
#
# rustyconnector.<family name>.* - Bypass the hard and soft cap of the family.
#

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                          Redis                           #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

#
# Redis is required in order to provide quick and easy syncing between the proxy and sub-servers
#
# Every server that you define will connect to your Redis database. Make sure your database has enough available "connections"
# so that you don't run into issues creating new servers and registering them.
#
redis:
    host: ""
    port: 3306
    user: "default"
    password: "password"

#
# The name of the data channel that information should be sent over.
# If you don't know what this is, don't mess with it! The default value here is fine.
# You probably won't break anything, but you generally just shouldn't touch things you don't understand.
#
# NOTE: Make sure that, if you do change this. It matches the data-channel that is set in your proxy!
#
    data-channel: "rustyConnector-sync"


############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                        Whitelist                         #
#                                                          #
#               ---------------------------                #
# | At this time RustyConnector-paper provides support for #
# | Minecraft's built in whitelist!                        #
# | If RustyConnector attempts to connect a player to a    #
# | server with a whitelist and the attempt fails,         #
# | the attempt will then act in accordance with           #
# | `load-balancing.persistence` set in                    #
# | your family's config.                                  #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################

############################################################
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
#                    Register on Boot                      #
#                                                          #
#               ---------------------------                #
# | Change this setting to decide if this server should    #
# | issue a registration request once it's                 #
# | finished booting up.                                   #
#                                                          #
# | If this is set to `false`, the only way this server    #
# | can get registered is if the proxy issues a            #
# | register all request.                                  #
# | Or if this server sends a registration request to      #
# | the proxy via the `rc register` command.               #
#               ---------------------------                #
#                                                          #
#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#
############################################################
register-on-boot: true
```