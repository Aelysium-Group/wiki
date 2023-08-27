---
title: 🔖 Discord Webhooks
---

## 这是什么?
Discord webhooks允许您直接向Discord频道发送通知信息。
所有的webhook信息都被称为 "通知"，当发生特定事件时，会适当的向webhooks发送通知。

## Alert Privacy
Discord Webhooks will NEVER include private details such as IP Addresses in alerts!
Because of this, you should make sure you are setting human-readable names in your RC-Paper configurations.

## 响应范围
你可以使用响应范围标记设置webhook的响应范围。

下表为可用的响应类型:

| 类型 | 描述 |
|-------|-------------|
| `Proxy` | The proxy scope, alerts will be sent no matter what. |
| `Family` | A family scope (the name of the family to target should be provided using the `target-family` tag.) Alerts will only trigger if they are related to this specific family. |

## 通知
通知仅在正确的响应范围内使用才会触发。

### 响应类型: 代理端（Proxy）
| 类型 | Alert Name | 触发条件 |
|------|------------|---------|
| Servers | `register_all` | When the proxy sends a request for all servers to register themselves. |
| Servers | `server_register` | When a server registers to the proxy. |
| Servers | `server_unregister` | When a server unregisters from the proxy. |
| Players | `player_join` | When a player successfully connects to the proxy. |
| Players | `player_leave` | 玩家离开代理端时触发该事件。 |
| Players | `player_join_family` | When a player joins a family. |
| Players | `player_leave_family` | When a player leaves a family. |
| Players | `player_switch_server` | When a player switches from one server in the proxy to another. |
| Players | `player_switch_family` | When a player switches from one family in the proxy to another. |
| Players | `disconnect_catch` | When a player disconnects or is kicked from a family and the root family catches them before they're kicked from the proxy. |

### 响应类型: Family
| 类型 | Alert Name | 触发条件 |
|------|------------|---------|
| Servers | `register_all` | When `/rc register family` is used. |
| Servers | `server_register` | When a server successfully registers to the family. |
| Servers | `server_unregister` | When a server successfully unregisters from the family. |
| Players | `player_join` | When a player successfully connects to the family. |
| Players | `player_leave` | When a player leaves the family. |
| Players | `player_switch` | When a player switches from one server in the family to another. |