---
title: 🔖 Discord Webhooks
---

Discord webhooks allow you to send alerts directly to Discord channels.
All webhook messages are referred to as "alerts." When a particular event occurs, an alert will be sent to the proper webhooks.

::: tip Privacy
Discord Webhooks will NEVER include private details such as IP Addresses in alerts!
Instead they will use the family and server names that you set in your config files!
Because of this, you should make sure you are setting human-readable names in your RC configurations.
:::

## Scope
You can set the scope of a webhook using the scope flag.
Available options are:

| Scope | Description |
|-------|-------------|
| `Proxy` | The proxy scope, alerts will be sent no matter what. |
| `Family` | A family scope (the name of the family to target should be provided using the `target-family` tag.) Alerts will only trigger if they are related to this specific family. |

::: danger Beware !
Alerts will only fire if they're used in the correct scope.
:::

### Scope: Proxy
| Type | Alert Name | Trigger |
|------|------------|---------|
| Servers | `register_all` | When the proxy sends a request for all servers to register themselves. |
| Servers | `server_register` | When a server registers to the proxy. |
| Servers | `server_unregister` | When a server unregisters from the proxy. |
| Players | `player_join` | When a player successfully connects to the proxy. |
| Players | `player_leave` | When a player leaves the proxy. |
| Players | `player_join_family` | When a player joins a family. |
| Players | `player_leave_family` | When a player leaves a family. |
| Players | `player_switch_server` | When a player switches from one server in the proxy to another. |
| Players | `player_switch_family` | When a player switches from one family in the proxy to another. |
| Players | `disconnect_catch` | When a player disconnects or is kicked from a family and the root family catches them before they're kicked from the proxy. |

### Scope: Family
| Type | Alert Name | Trigger |
|------|------------|---------|
| Servers | `register_all` | When `/rc register family` is used. |
| Servers | `server_register` | When a server successfully registers to the family. |
| Servers | `server_unregister` | When a server successfully unregisters from the family. |
| Players | `player_join` | When a player successfully connects to the family. |
| Players | `player_leave` | When a player leaves the family. |
| Players | `player_switch` | When a player switches from one server in the family to another. |