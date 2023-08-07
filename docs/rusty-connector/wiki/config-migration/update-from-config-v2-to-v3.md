---
title: ℹ️ Migrating from V2 to V3
sidebar_position: 3
---
On this page, we will walk you through how to update your config from v2 to v3!
## Disclaimer
It can be a hassle going through and updating config files.
If you'd rather just configure a fresh install of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.

## Unchanging
All configuration files are changed in some way.

## Walkthrough
### 1. Remove private-key from config.yml
In all versions of RC, the private-key for your plugin is being moved to a new file called `private.key` you can create this file yourself, or Rc will generate one for you. Make sure that the string inside of `private.key` on your proxy matches `private.key` on all of your sub-servers!

While you're here, delete the entire `private-key` section from your `config.yml`

### 2. Rename all family configs
v3 introduces new scalar and static families. By default, all of your currently existing families are considered scalar families. to reflect this, change the file name of your family configs to include `.scalar` before `.yml` so your new config names should look like: `familyName.scalar.yml`

### 3. Update config.yml
The major change in v3 is the addition of scalar and static families. This change needs to be reflected in our config.yml. In your config.yml, replace `root-family` and `families` with the following block.
```yml
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
```
You should now paste your root family into `families.root-family.name`.
Additionally any families that you previously had saved in `families` should now be added to `families.scalar`.

### 4. Adjust database options
Staying in config.yml, scroll down a bit until you reach your redis configuration settings.
We've added the ability to define a user for your redis settings. Reflect this change by adding the user node inbetween `redis.password` and `redis.port`. As seen below:
```yml
redis:
    host: ""
    port: 3306
    user: "default"
    password: "password"
```
It's worth mentioning that RC no-longer requires you to provide a password for Redis.

Additionally, with the adding of static families, RC now integrates with MySQL. Add the following to your config.yml just below your Redis database settings:
```yml
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
```
Similarly to Redis, MySQL does not require that you provide a password.

### 5. Adjust the hearts
To better reflect the current operating system that RustyConnector uses we're changing `hearts` to `services`. Inside of your config.yml go to `hearts`. Replace it and it's proceeding comment with the following:
```yml
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
```
Also just above `server-lifecycle` adjust the comment to say:
```yml
#
# Manages the lifecycles of servers.
#
# Also manages the lifecycle of a player's home server if you are using Static Families.
#
```

Expect to see more updates to the `services` section in future RC versions.

### 6. Add inversion to whitelists
A new feature in v3 is inversion. By inverting a whitelist configuration, it will operate as a blacklist!
Paste the following into the very bottom of all of your whitelist configurations.
```yml
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

### 7. Update config version
Inside both your Velocity config.yml and Paper config.yml set `version: 3`. You should now be ready to start your server again!

## Conclusion
Config v3 adds a ton of amazing new features! Some items that we didn't look at here include the new `webhooks.yml` and also the addition of static families! If you used a scalar family in the past for a stateful minecraft gamemode (like survival or create) try giving the new static families a shot!