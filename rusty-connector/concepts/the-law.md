---
title: 📜 The Law
description: "RustyConnector demands your tithes."
order: 5
---

So you've become a RustyConnector Network? Congratulations!
But with great power comes great responsibility! If you don't follow these guidelines, you'll regret it!

RustyConnector isn't just some plugin, it's your network backbone. We make the rules and your other plugins need to follow them.

## 1. The Rule of Families
Families must never contain <MCLoaderTag>MCLoaders</MCLoaderTag> of different likenesses.
Only a single template should ever be necessary to generate any number of MCLoaders in a family.

:::info Example
If you have a <StaticFamilyTag>survival</StaticFamilyTag> it must only ever contain survival Loaders. It can't contain survival Loaders and also some lobby Loaders.
The lobby Loaders must be put in their own family (maybe you can put them in a <ScalarFamilyTag>survival lobby</ScalarFamilyTag> family)
:::

## 2. Think in Terms of Families
Minecraft servers no longer exist. Instead you interact with Families.

:::info Example
In traditional Minecraft management, you know each server individually by name and you send players to a specific server.
When working in an RC Network you should be thinking in terms of families instead of individual servers.

In RustyConnector, you aren't sending players to a specific lobby server anymore.
Instead, create a new scalar family: <ScalarFamilyTag>lobby</ScalarFamilyTag> and send those players to that family.
It is now the <ScalarFamilyTag>lobby</ScalarFamilyTag> family's job to decide what <MCLoaderTag>MCLoader</MCLoaderTag> to send the player to.
:::