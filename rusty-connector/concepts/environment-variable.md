---
title: 🏷️ Environment Variables
---

# 🏷️ Environment Variables 
As of 0.9.2, RustyConnector allows system admins to define environment variables on servers to bypass manually configuring the server's yaml files.
:::warning
Many parts of RustyConnector configs can be configured from the server's environment variables.
However the server's `private.key` is not one of these items. The `private.key` must be manually configured.
:::

## Server ID
The `server.id` config can be overridden by setting the `RUSTYCONNECTOR_SERVERID` environment variable.

## Server Config
The server's `config.yml` can be overridden by passing a JSON object to `RUSTYCONNECTOR_CONFIG`.
Below is a list of nodes you can attach to the JSON object.
The naming convention for each node is lowerCamelCase with yaml nodes separated by underscores instead of periods.
So if you would normally write the yaml:
```yaml
someNode:
    anotherNode: 2
```

This should be represented in the form of:
```json
{"someNode_anotherNode": 2}
```

An example of the default config file but as a JSON override object is:
```json
{
    "version": 7,
    "address": "127.0.0.1:25565",
    "family": "lobby",
    "magicLink_accessEndpoint": "http://127.0.0.1:8080",
    "useUUID": false,
    "metadata": "{\"softCap\": 30, \"hardCap\": 40}"
}
```

:::info
Pay special attention to the `metadata` node if you decide you'd like to override it.
The parameter passed to `metadata` should still be a **string**, do not pass a sub-object when you define the metadata.
:::

---
Please keep in-mind that the environment variables are override nodes. So if a value is not provided, RustyConnector will fallback to whatever is defined in the config itself.
