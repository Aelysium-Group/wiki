---
title: 🏆 Matchmaker API
---

Ranked Families are a specific type of Family in RustyConnector which allow for matchmaking a player ranks.
Ranked Families __require__ Toolkit implementation in order for them to work.
Let's look into how you can create a fully functioning Ranked Family!

## Building Your Game
First things first, you have to create your game.
RustyConnector Toolkit provides some basic functionalities that let you say who is a winner and who is a loser of a game.
But your plugin/system is solely responsible for actually handling the ranking logic.

## Lifecycle
Toolkit MCLoader provides a couple [Events](events.md) which you can plug into for game lifecycle: `RankedGameStartEvent` and `RankedGameEndEvent`.
- `RankedGameStartEvent` | Fires when a new session of players have loaded onto the MCLoader and are ready to start their game session.
- `RankedGameEndEvent` | Fires when a currently active game session on this MCLoader has finished.

For information on how you can listen for Events, you can check out the [Events](events.md) documentation.

### Game Starting
`RankedGameStartEvent` is considered the starting point for a Ranked Game on an MCLoader.
To start a new round of your gamemode, you should start by listening for this event.

### Game Ending
Ending a Ranked Game is as easy as calling `.end()` on the MCLoader that is housing the Ranked Game.
Specifically you use `IRankedGameInterfaceService.end()`, and pass the UUIDs of all the players that are considered winners.
Once this method has been run, `RankedGameEndEvent` will fire, and the players that were part of this Ranked Game session will be returned
to their parent Family.

`IRankedGameInterfaceService` can be accessed using the Flame services system:
```java title="MCLoaderPlugin"
    RustyConnector.Toolkit.mcLoader().onStart(flame -> {
        IRankedGameInterfaceService service = flame.rankedGameInterface().orElseThrow();
    });
```

It's worth noting that `.rankedGameInterface()` returns an `Optional`. This is because an MCLoader's Ranked Game Interface will only activate if that MCLoader is registered into a Ranked Family. If the MCLoader is loaded into something like a Scalar Family, the Ranked Game Interface won't be activated.