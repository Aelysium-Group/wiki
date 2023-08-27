---
slug: './'
id: rusty-connector
title: 👋 欢迎
sidebar_position: 1
displayed_sidebar: plugins_wiki_rusty_connector
tags:
  - rusty connector
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
*Support is only provided to paying Discord members.* If you have a bug to report, feel free to open an issue in our Discord! If your bug report falls under a support issue and not an actual bug it will be closed immediately.

## Want to request a feature?
We accept feature requests from paying Discord members!
Join our [Discord server](http://join.aelysium.group/) and let us know what features you’d like to see!

# FAQ

## “Why do I have to pay for support? It should be free!”
Hey everyone, this is Nathan :)
I’ve been a Minecraft admin for almost 10 years now. I totally understand where everyone is coming from.
I’ll explain why I decided to charge for support. This is not a topic I’m willing to discuss or negotiate so don’t waste your time trying.
I spend lots of time and effort trying to make these plugins easy to work with and make them very versatile.
That said, I have a full time job and I’m also in college. I have bills to pay and a life to live. Unfortunately maintaining a plug-in is the most expensive thing I can do with my time. Not exactly the best move on the board.

To offset this, I decided that I could pursue an attempt of making some money off of it.
In short, the system works like this:
Excluding bugs, if users have issues or suggestions that take my time to address, I will charge for that time spent.
I've made a pretty extensive Wiki which many will be able to simply reference in order to setup RC. However, if you need additional assistance, I'll offer my services personally :)

This system means that, if you know what you’re doing, you don’t have to pay anything and you can use the plug-in rather easily. However, if you aren’t sure what you’re doing and therefore need assistance, then you would pay for that assistance. (Just like how the real world works.)
In other words, when you don’t take up my time, you don’t have to pay me, but when you start taking up my time, you then need to pay me.

That said, if you ever have legitimate bugs, I believe that support for bug fixing should always be free. It just makes sense! Even though fixing a bug will take up my time, I owe it to you if you are using my software. So please if you believe you have a truly legitimate bug, join the discord server and let me know!
I still have a life and can't instantly address bugs, however, I'll still try to make time to take care of them.

## “Are you open to being sponsored?”
Yes! If you’re interested in sponsoring me please get in touch via [Discord](https://join.aelysium.group)!
I’ve spent lots of time working on the programs I’ve written and being able to be paid for the time I’ve spent would be wonderful.
That said, I am my own developer and I have no intentions of changing my policies and way of doing things simply because someone wants me to.

## "RustyConnector is making my players lag!"
Unless your Velocity server is maxing out on RAM, this is not physically possible. RustyConnector doesn't actually deal with player connections. All it does is tell Velocity where to connect players. Velocity handles all of the connection details itself.
If your network is lagging, check to make sure that your Velocity server isn't overloaded! It might be time to scale horizontally!

## "你们是否计划支持其他服务器，如 Bungeecord、Spigot 或 Sponge？"
如果有足够的兴趣支持不同的服务器类型，我一定会考虑实现它！
关于Spigot和Bungeecord。坦率地说，它们都是比较老的服务器软件，正在慢慢被Velocity和Paper所取代。因此，我对支持它们并不完全感兴趣。不过，出于原则，我可能会为Spigot提供支持。我们将看看人们想要什么:)