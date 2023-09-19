---
title: 🗃️ Setup Connectors
position: 0
---

RC allows you to define as many connectors as you'd like and reference them individually when you need them during configuration.
Reference the list below to see database usages and parameters.
**Please note that RC requires that at least one messaging connection is defined.**

While setting up RC you'll find the configs asking for two types of connections: **📧 Messenger** and **💽 Storage** connectors.

---

## Defining a Connector
In your `connectors.yml` config file go to your respective connector type you wanna add (either `messenger` or `storage`) and add a new array entry:
```yml
messengers:
    - name: "Put a unique name here"
      type: "Put the type you want here"
```
Next set `name` and `type` properly. `name` can be whatever you want, `type` must be one of the supported types listed below.
It's important to not that `name` is what you will use throughout all of your configs.
When you want to reference this particular connector you want to use it's name.

---

## Supported Types
**📧 Messengers**
- [Redis](#redis-type-redis)
- [RabbitMQ](#redis-type-redis)
- [WebSocket](#websocket-type-websocket)

**💽 Storage**

---

# 📧 Messengers
Messengers are the connectors which will be used for message transportation in RC.


## Redis (`type`: `REDIS`)
### Parameters
| Name           | Type      | Description |
| -              | -         | -           |
| `hostname`     | `string`  | The hostname to connect to. |
| `port`         | `Integer` | The port to connect to. |
| `username`     | `string`  | The username to use. |
| `password`     | `string`  | The password to use. |
| `data-channel` | `string`  | The data channel that messages will be sent through. |
| `protocol`*    | `string`  | The Redis protocol to use. Can be `RESP2` or `RESP3` defaults to `RESP2` |
<sub>* Optional items</sub>

Please note that you're required to define a `username`. Redis typically defaults to `default` for `username`.

## RabbitMQ (`type`: `RABBITMQ`)
### Parameters
| Name           | Type      | Description |
| -              | -         | -           |
| `hostname`     | `string`  | The hostname to connect to. |
| `port`         | `Integer` | The port to connect to. |
| `username`     | `string`  | The username to use. |
| `password`     | `string`  | The password to use. |

## WebSocket (`type`: `WEBSOCKET`)
Currently websocket is an advanced feature and requires that you create your own WebSocket relay as the RC-Proxy and RC-SubServers cannot directly connect to eachother.
It's suggested that you only use this if you can leverage internal connections (i.e. loopback addresses) cause this isn't the most secure option currently.
### Parameters
| Name           | Type      | Description |
| -              | -         | -           |
| `hostname`     | `string`  | The hostname to connect to. |
| `port`         | `Integer` | The port to connect to. |
| `key`*          | `string`  | An authentication key to connect with. Must be exactly 32 characters long. |
<sub>* Optional items</sub>

Please note that `key` is only optional is the WebSocket-Bridge that you're connecting to has the "Secure Connector" disabled.

---

# 💽 Storage
Messengers are the connectors which will be used for message transportation in RC.


## MySQL (`type`: `MYSQL`)
### Parameters
| Name           | Type      | Description |
| -              | -         | -           |
| `hostname`     | `string`  | The hostname to connect to. |
| `port`         | `Integer` | The port to connect to. |
| `username`     | `string`  | The username to use. |
| `password`     | `string`  | The password to use. |
| `database`     | `string`  | The database to connect to. (The database should already be created) |