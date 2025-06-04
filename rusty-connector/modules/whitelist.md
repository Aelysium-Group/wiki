---
title: 👮 Whitelist
order: 4
---

RustyConnector allows you to set up whitelists for both your entire network and specific families!

With RustyConnector whitelists, you can create as many predefined whitelist configurations as needed. Switching between them is as simple as updating the whitelist name in your config files.

## 📥 Installation

The whitelist feature in RustyConnector is a **module**.  
This means you must install the corresponding JAR file for it to function.

1. Visit the [whitelist module repository](https://github.com/Aelysium-Group/rcm-whitelists).
2. Download the latest release.
3. Place the JAR file into your proxy’s `rc-modules` folder.

## 📝 Configuration

The whitelist module works with **whitelist configuration files**.  
Each config has a specific name that you will later assign to services.

Within each config, you can whitelist player UUIDs, usernames, or permissions.

Once your whitelist config is ready, add the following metadata to the proxy, family, or server config:

```yml
"whitelist": "<whitelistName>"
```

Finally, reload the RC kernel — and you're good to go!

## ✨️ How It Works

The whitelist module performs validation **at the proxy level**.  
This means that anything attempting to filter players from within the Minecraft Loader will have no effect.