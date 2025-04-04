---
title: 🌫️ Haze
order: 2
---

# 🌫️ Haze

Haze is a specially designed database abstraction which allows you, the system administrator,
to set up a database (like MySQL for example) one time, and then, you can use that database type for all of your RustyConnector modules that support Haze.

Haze, itself, is just an abstraction layer, in order to actually leverage it, you must install a "haze driver" on your RustyConnector instance.

### Officially Supported Haze Drivers
- [**MySQL Driver**](https://github.com/Aelysium-Group/rcm-mysql) - (Supports: MySQL, MariaDB, Percona Server for MySQL, Drizzle, WebScaleSQL)
- [Coming soon] [**CassandraDB Driver**] - (Supports: CassandraDB, ScyllaDB, Elassandra, KairosDB)
- [Coming Soon] [**MongoDB Driver**] - (Supports: MongoDB, FerretDB, Tigris, DocumentDB)
- [Coming Soon] [**PostgreSQL Driver**] - (Supports: PostgreSQL, Greenplum, TimescaleDB, Neon, EDB Postgres Advanced Server, AgensGraph)
- [Coming Soon] [**SQL Server Driver**]

## Installation
Choose the Haze Driver you'd like to use, from the list above.
Once you do, download the jar for whatever version supports your currently installed version of RustyConnector.

Next, load that jar into the `rc-modules` folder on your proxy. If you have modules on your servers which require Haze on the server too, put it on your servers as well.

Start your server once, so that Haze can create some configs.

Now, you can go into your driver's config folder, there should be a `default.yml` config.
this represents your "default" database.
It's important to note that any config files in this folder will be loaded as database configs.
If you have a database called "RustyConnectorData" you want a config called "RustyConnectorData.yml"

From there you can setup as many databases as you'd like.

After you've setup Haze, all you need to do is go into your various different modules and, if they support haze, just configure them to use the database name(s) you've setup.