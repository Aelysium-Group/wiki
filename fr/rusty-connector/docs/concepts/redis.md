---
title: 🟥 Redis
---
Redis is an ultra-fast database technology typically used for database caching.
It's main difference from a traditional database is that it stores data on RAM as opposed to something like a Hard Drive. This means that data retrieval is ultra-fast.
Additionally, Redis can be used for sending messages across data channels. This is the main use that RC takes advantage of!
By moving messaging into a separate system we allow plugin messaging channels to remain clear for other uses.

You can set up a small, free, Redis server [here](https://redis.com/)! It's worth noting that the free Redis plan is not going to be suitable for larger networks. But chances are, if you're a larger network, you can certainly afford the cost of a higher-end Redis server.