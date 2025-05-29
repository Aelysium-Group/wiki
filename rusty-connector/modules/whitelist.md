---
title: 👮 Whitelist
order: 4
---

RustyConnector allows you to set whitelists for both your entire network and specific families!

With RustyConnector whitelists, you can create as many pre-defined whitelists as you like. Switching between these whitelists is as easy as changing the name of the whitelist in your configs.

# 📥 Installation

The whietlist feature of RustyConnector is a **module**. That mean that you will need to install the required jar file to make it working. Go to the [whitelist's module repo](https://github.com/Aelysium-Group/rcm-whitelists), download the latest release and put it in the proxy's modules folder.

# 📝 Simple Config
The whitelist modules works with **whietlist configs**. Each config have a specific name, that you will use to asign it to services afterwards. You can add plauer uuids, username or permissions to the whitelist.

When you are done, add the metadata `"whitelist": "<whitelistName>"` to the proxy/family/server config file.

# ✨️ How it works
The whitelist module do its validation on the proxy. That means that anything filtering the player on the MC Loader will not be usefull
