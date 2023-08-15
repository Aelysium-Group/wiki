---
title: 📖 Installation Guide
sidebar_position: 1
---
So you’d like to switch to RustyConnector?
Here’s a crash course on how to get started!

First thing first, let’s understand how the plug-in works.

## How it works
Creating a RustyConnector network involves setting up RC on your Velocity server as well as on your individual Paper servers.
We refer to the Velocity version of RustyConnector as simply: “RC-Velocity” in these docs and the Paper version of RustyConnector as: “RC-Paper.”

Additionally, you will need to set up a Redis database so that your servers can talk to each other! Anytime “data channel” or “message” is mentioned, we are referring to the Redis database.

All RustyConnector communication happens over the Redis database connection.
RC-Velocity is the main powerhouse of your RustyConnector Network. On boot, RC-Velocity will load your configs and begin listening for RC-Paper servers on the data channel.
Anytime an RC-Paper server boots, RC-Paper will automatically send a registration request to RC-Velocity. RC-Velocity will compare its private key to that of RC-Paper and if it matches, RC-Paper will be registered into one of the predefined server families. (You can read up on Families [here](./Family))

If an RC-Paper server shuts down or crashes, it will attempt to inform RC-Velocity that it is dead. If the attempt is successful, RC-Velocity will automatically unregister RC-Paper from the network and the players will no longer be able to connect to that particular Paper server.

There are more details involved however this is the basis of how this system works.
If you have ten RC-Paper servers, they can all start and stop at any time and RC-Velocity will gracefully register or unregister them from the proxy.
This registering and unregistering process also works cleanly with the built-in whitelist and load balancers.

## Pre-Requisites
RC-Velocity completely replaces the `[servers]` part of your `velocity.toml` configuration file.
As such, once your RC network is built and ready to go, you won't have to open this config anymore to manage your servers.
That said, Velocity **REQUIRES** that you have at least one server defined in it.
If you are a larger network and want to have a backup in case something happens and RC-Velocity fails, you could set this default server to be a fallback server. Otherwise, feel free to just set this to a loopback address like `127.0.0.1:0`.
It should be noted that RC is built to be reliable. The only point it should be able to fail and shutdown is on-boot or during a config reload request. At runtime, RC shouldn't be able to shutdown.

## Getting Started
### Setting Up RC-Velocity
Load the latest version of RustyConnector into your Velocity server! RC-Velocity and RC-Paper are both contained in the same jar so no need to worry about two separate jars!

- Start up your server. This will cause RC-Velocity to load the initial [config.yml](../config/config-latest#configyml-velocity) for you to start configuring.
- Additionally, RC will create a file called ‘private.key’. This is the private key that will be used to validate messages. Make sure that you NEVER share this key with anyone!
- Open [config.yml](../config/config-latest#configyml-velocity) and set up your RC families (Read more about Families [here](./Family) for more info.) Make sure you edit `root-family.name` to match whichever family should be your default.
- Add your [Redis](./faq#redis) information.
- Restart your velocity server.

RC-Velocity will process your information and create family configs for each family that you've defined. Be sure to take a look at these configs and make changes to them as you see fit.

At this point, we are now ready to set up RC-Paper!

### Setting up RC-Paper
Load RustyConnector onto your Paper server! Preferably make sure that the RustyConnector version on your paper server is always updated to be the same as the one on your velocity server. Start the server and allow RC-Paper to generate a [config.yml](../config/config-latest#configyml-paper).
- Copy the private key from RC-Velocity and paste it into `private.key` on RC-Paper. __The private.key from RC-Paper MUST match private.key from RC-Velocity__.
- Set `name` to whatever you'd like. Each server name should be unique so you can tell servers apart while reading logs.
- Set `address` to equal what you would normally paste into the `velocity.toml` (for example: `127.0.0.1:25565`)
- Set `family` to be the same name as the family you want the server to register into on RC-Velocity. If the family doesn't exist on RC-Velocity, RC-Paper will fail to register.
- Set your player caps to a level that you are happy with.
- Lastly, update the Redis information so that RC-Paper can connect to the same Redis database as RC-Velocity. (Make sure the `data-channel` option is the same as well! If you left this as default between RC-Velocity and RC-Paper then you have nothing to worry about.)
- Restart your paper server.

It's important to take note that RC is specifically written in a top-down way. Paper servers never actually know if the Velocity server is listening. The Paper servers can only send their registration requests into the data channel and assume that the proxy has received them. As such, if any RC-Paper information is invalid and prevents the server from registering, that information will be shown on RC-Velocity and not RC-Paper. RC-Paper will not know if it has been registered unless players start joining it.

Everything should be working now! Try joining!
In order to switch between the families in your RC-Velocity, you'll need to use the [`/rc send` Command](../Commands).