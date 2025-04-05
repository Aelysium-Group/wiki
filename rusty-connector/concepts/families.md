---
title: ☁️ Families
---

# ☁️ Families

Families are the backbone of RustyConnector.
A family can be thought of as a collection of servers.
Consider a server. Servers always have a purpose or theme; whether that's to function as a lobby, pvp arena, or survival world,
every server has a function, as such every server has a family it belongs to.

Families exist to group servers together into individual chunks.
From there, players can connect to a family, and that family is in charge of choosing which of its servers the player should be sent to.
This process is called Load Balancing.

## How do they work?
When a server registers to RustyConnector that server must describe which family it wants to be registered to.
Servers are not allowed to register without specifying a family to connect to.

Once servers successfully register, they will then be managed by their family.
The family is responsible for managing player connections with servers and other families.

## Family Types
RustyConnector Core comes with Scalar Families built in.
Additional family types are available as RC Modules.

## 🌧️ Scalar Family
Scalar Families are built to complement stateless servers.
