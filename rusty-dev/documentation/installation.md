---
title: ⚒️ Installation
description: "Ready to switch? Let's go!"
order: 1
---
# ⚒️ Installation
::: danger Wait a minute!
This page is for the RustyConnector SDK.
For the plugin wiki, go [here](/rusty-connector/docs/installation).
:::

The RustyConnector SDK grants you access to the power of RustyConnector through a custom Java API!

## Requirements
- Java 21 or later

## Getting Started
You can import the RustyConnector SDK via Maven and Gradle.

::: tabs
== Maven
```xml
<repositories>
    <repository>
        <id>mrnavastar-releases</id>
        <name>MrNavaStar's Repository</name>
        <url>https://maven.mrnavastar.me/releases</url>
    </repository>
</repositories>
<dependencies>
    <dependency>
        <groupId>group.aelysium</groupId>
        <artifactId>rustyconnector-core</artifactId>
        <version>0.9.0</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```
== Gradle (Groovy DSL)
```java
repositories {
    maven { url "https://maven.mrnavastar.me/releases" }
}

dependencies {\
    compileOnly "group.aelysium:rustyconnector-core:0.9.0"
}
```
== Gradle (Kotlin DSL)
```java
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    compileOnly("group.aelysium:rustyconnector-core:0.9.0")
}
```
:::

::: danger Having Issues?
If you're unable to install the Toolkit API, it's possible that our Maven Repository is down.
You can check its status [here](https://status.mrnavastar.me/status/services).

If it is down, [join our Discord](https://join.aelysium.group) and let us know.
:::

Once imported, you can access the RustyConnector SDK from either the proxy or server.
In order to use the SDK properly, you must ensure that RustyConnector is added as a dependency in your plugin.

## Native Modules (RCM)
RustyConnector Native Modules are platform independent and are managed specifically by the RustyConnector Kernel.
Creating a new RCM is pretty simple.
1. Create a new empty Gradle or Maven project.
2. Add the RustyConnector Core SDK (See above.)
3. In your project's `resources` directory, create a file called `rc-module.json`
4. In your project's root class, create an inner class called `Tinder` which extends `ExternalModuleTinder<?>`
5. In `rc-module.json` set the `main` attribute to be the classpath to this new `Tinder` class you've made.

### `rc-module.json`
```json
{
  "main": "com.example.MainClass$Tinder",
  "name": "ExampleName",
  "description": "Provides an example of rc-module.json",
  "details": "example-rootPluginDetails",
  "dependencies": [
    "haze"
  ],
  "softDependencies": []
}
```

## Platform Modules
When writing a platform specific module, you do not have the ability to use `ExternalModuleTinder<?>`

The kernel can be accessed using the `RustyConnector` class.
It'll be your job to make sure you properly configure your platform module to work with RustyConnector's ARA framework.
Check out the next page to see details on the ARA framework as it pertains to RustyConnector.