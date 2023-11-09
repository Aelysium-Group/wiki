---
title: Introduction
sidebar_position: 1
---
![Aelysium Wordmark Image](https://github.com/Aelysium-Group/.github/blob/main/images/rustyconnector-wordmark.png?raw=true)
# Wiki
Meet RustyConnector! The premier Velocity player and server manager!
RustyConnector operates via Redis messaging to communicate with sub-servers. Once you've configured your server groups, called *families*, all you have to do is set up your sub-servers and they'll auto-register to your proxy whenever they're ready! You'll never have to touch your `velocity.toml` again when adding new servers to your network!


- ✅ Built for large networks
- ✅ Register brand new servers to the proxy during runtime
- ✅ Blazing fast data transmission with Redis integration
- ✅ Create pre-defined whitelist configs and activate them dynamically
- ✅ Register similar servers into families with family-level whitelists and load balancing
- ✅ Automatically unregister frozen servers from the proxy
- ✅ Set soft and hard player limits for servers
- ✅ Whitelist players based on permission, Username, UUID, or IP Address
- ✅ Allow players to /tpa between servers
- ✅ Works with LuckPerms-Velocity
- ✅ Works with Kubernetes
- ✅ Create network-wide whitelists

## Need Support?
If you run into an issue or need help setting up RC, join our [Discord server](http://join.aelysium.group/) and get support!
If you have a bug to report, feel free to open an issue in our Discord! If your bug report falls under a support issue and not an actual bug it will be closed immediately.

## Want to request a feature?
We accept feature requests from paying Discord members!
Join our [Discord server](http://join.aelysium.group/) and let us know what features you’d like to see!

# FAQ

## “Are you open to being sponsored?”
Yes! If you’re interested in sponsoring me please get in touch via [Discord](https://join.aelysium.group)!
I’ve spent lots of time working on the programs I’ve written and being able to be paid for the time I’ve spent would be wonderful.
That said, I am my own developer and I have no intentions of changing my policies and way of doing things simply because someone wants me to.

## "RustyConnector is making my players lag!"
Unless your Velocity server is maxing out on RAM, this is not physically possible. RustyConnector doesn't actually deal with player connections. All it does is tell Velocity where to connect players. Velocity handles all of the connection details itself.
If your network is lagging, check to make sure that your Velocity server isn't overloaded! It might be time to scale horizontally!

## "Do you have plans to support other servers like Bungeecord, Spigot, or Sponge?"
If there is enough interest in supporting a different server type, I'll certainly look into making it happen!
Regarding Spigot and Bungeecord. Frankly, they are older server software that are slowly being replaced by Velocity and Paper. As such, I'm not entirely interested in supporting them. However, just because of principle I may go and provide support for Spigot. We'll see what people want :)