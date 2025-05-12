---
title: 📖 Installation
description: "Ready to switch? Let's go!"
order: 1
---

# 📖 Installation

So you'd like to switch to RustyConnector?
Here's a crash course on how to get started!

First thing first, let's understand how the plug-in works.

## How it works
Creating a RustyConnector network involves setting up RC on your proxy and backend servers.
These two nodes will then communicate with each-other over a WebSocket, or, if you have modules installed, other messaging protocols like Redis are supported.

## Pre-Requisites
RustyConnector completely replaces the `[servers]` part of your `velocity.toml` configuration file.
As such, once your RC network is built and ready to go, you won't have to open this config anymore to manage your servers.
That said, Velocity itself **REQUIRES** that you have at least one server defined in it. Feel free to just set this to a loopback address like `127.0.0.1:0`.

## Getting Started
1. Add the RustyConnector velocity plugin to Velocity.
2. Start Velocity. Configure `config.yml` and `magic_link.yml`.
3. Choose the plugin loader of your choice (Fabric, Paper, etc) and add the RustyConnector plugin for that loader to the server.
4. Start your server.
5. On the server, configure `config.yml`.
6. On the proxy, copy the file `plugins/rustyconnector/metadata/private.key`.
7. On Paper, paste `private.key` into `plugins/rustyconnector/metadata/`.
8. Restart Paper.
