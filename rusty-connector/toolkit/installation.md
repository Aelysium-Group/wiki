---
title: ⚒️ Installation
description: "Ready to switch? Let's go!"
sidebar_position: 1
---

::: danger Wait a minute!
This page is for the RustyConnector API.
For the plugin wiki, go [here](/rusty-connector/docs/installation).
:::

The RustyConnector Toolkit grants you access to the power of RustyConnector through a custom Java API!

## Requirements
- Java 17 or later

## Getting Started
You can import the RustyConnector Toolkit via Maven and Gradle.

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
        <artifactId>rustyconnector-toolkit</artifactId>
        <version>0.8.0</version>
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
    compileOnly "group.aelysium:rustyconnector-toolkit:0.8.0"
}
```
== Gradle (Kotlin DSL)
```java
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    compileOnly("group.aelysium:rustyconnector-toolkit:0.8.0")
}
```
:::

::: danger Having Issues ?
If you're unable to install the Toolkit API, it's possible that our Maven Repository is down.
You can check it's status [here](https://status.mrnavastar.me/status/services).

If it is down, [join our Discord](https://join.aelysium.group) and let us know.
:::

Once imported, you can access the RustyConnector Toolkit from either the Proxy or MCLoader.
In order to use Toolkit, you must ensure that RustyConnector is added as a dependency in your plugin.

## Accessing Toolkit
Toolkit can be accessed using the `RustyConnector.Toolkit` package.
You can access Toolkit using either the `.proxy()` or `.mcLoader()` accessors which will return an `Optional`.
The Optional will throw an exception if the api for the specific RustyConnector loader hasn't been registered yet.
If you properly set RustyConnector as a dependency in your plugin, this shouldn't happen.
```java title="Proxy Plugin"
VelocityTinder tinder = RustyConnector.Toolkit.proxy().orElseThrow();
```
```java title="MCLoader Plugin"
MCLoaderTinder tinder = RustyConnector.Toolkit.mcLoader().orElseThrow();
```

## Accessing Flame
The Flame is the running kernel of RustyConnector.
As a module developer, you have no way of knowing if or when the Flame is available.
Instead you hook into the `Tinder#onStart` and `Tinder#onStop` methods to react to Flame availability.
```java title="Proxy Plugin"
VelocityTinder tinder = RustyConnector.Toolkit.proxy().orElseThrow();

tinder.onStart(flame -> {
    System.out.println(flame.versionAsString());
});

tinder.onStop(() -> {
    logger.log("Lost connection to RustyConnector! Waiting for it to restart...");
});
```
If a flame already exists and you call `Tinder#onStart`, it will immediately return the existing flame to the passed `Consumer`.
