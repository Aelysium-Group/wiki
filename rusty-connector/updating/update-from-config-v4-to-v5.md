---
title: ℹ️ Updating from v4 to V5
sidebar_position: 5
---
On this page, we will walk you through how to update your config from v4 to v5!
**Before updating to v5, make sure you have a working MariaDB system!**
Any existing data alreaddy stored on your MySQL database will be lost (Beta software lulz) unless you manually port it to the new format.

## Disclaimer
It can be a hassle going through and updating config files.
If you'd rather just configure a fresh installation of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.

## Unchanging

## Walkthrough
### 1. Update config version
In order for RC to load all of it's new configs, update your config.yml version to `version: 5` immediately.

### 2. Delete `private.key`
RustyConnector v0.8.0 implements a new AES-256 encryption system. You'll need a new `private.key` to use it.
Delete your current `private.key` and let RC generate a new one.
Then copy the new `private.key` to all your sub-servers.

### 3. Port Redis and MySQL settings
Remove the entire Redis section from your `config.yml`, when you next start RustyConnector, it should generate a new `connectors.yml` config.
You'll want to enter your Redis and MariaDB credentials into this config.

### 4. Add secure transit toggle
Add the following toggle to your `data_transit.yml`
```yml
#
# Should Data Transit operate via an AES SecureTransit protocol?
#
secure-transit: true
```

### 5. Remove disparate mysql nodes
In `families.yml` delete the entire MySQL set of nodes.
In `friends.yml` delete the entire MySQL set of nodes.

### 6. Update `logger.yml`
In `logger.yml` remove the entire `console-icons` section.
Console icons are now a part of the language system that RC uses.
If you'd like to edit them feel free to download the Lang folder from the `core` plugin module on the (RustyConnector GitHub](https://github.com/Aelysium-Group/rusty-connector) and edit it there.

### 7. Update `whitelist.yml`
If you have any whitelist configs, delete the entire `countries` section from them.
This feature will not be added in the forseeable future.