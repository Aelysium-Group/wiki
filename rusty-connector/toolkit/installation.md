---
title: ⚒️ Installation
description: "Ready to switch? Let's go!"
sidebar_position: 1
---

::: danger Wait a minute!
This page is for the RustyConnector SDK.
For the plugin wiki, go [here](/rusty-connector/docs/installation).
:::

The RustyConnector SDK grants you access to the power of RustyConnector through a custom Java API!

## Requirements
- Java 17 or later

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

::: danger Having Issues ?
If you're unable to install the Toolkit API, it's possible that our Maven Repository is down.
You can check its status [here](https://status.mrnavastar.me/status/services).

If it is down, [join our Discord](https://join.aelysium.group) and let us know.
:::

Once imported, you can access the RustyConnector SDK from either the proxy or server.
In order to use the SDK properly, you must ensure that RustyConnector is added as a dependency in your plugin.

## Accessing The Kernel
The kernel can be accessed using the `RustyConnector` class.
You can access your Kernel of choice using either the `.Proxy()` or `.Server()` accessors which will return an `Optional`.
The `Optional` will throw an exception if the kernel for that specific platform isn't available (Like if you try to access the proxy kernel from a server.),
if you properly set RustyConnector as a dependency in your plugin, this shouldn't happen.
```java
ProxyKernel tinder = RustyConnector.Proxy().orElseThrow();
```
```java
ServerKernel tinder = RustyConnector.Server().orElseThrow();
```

RustyConnector also offers a plethora of helpful utility methods for common requests via the `RC` class.
```java
ProxyKernel kernel = RC.P.Kernel();
```
```java
ServerKernel kernel = RC.S.Kernel();
```
::: warning
Something to note of the `RC` utility classes is that they have zero fault tolerance.
If a specific item is unavailable, they will immediately throw a `NoSuchElementException`.
:::

## ARA (Absolute Redundancy Architecture)
This wiki contains a whole site dedicated to ARA, so we won't cover all of it here.
ARA is a virtualized microservice architecture which RustyConnector uses to separate major code blocks from each-other.

Imagine you have a family which, after some configuration changes, you'd like to reload without having to reload all of RustyConnector;
or worst, the entire proxy.
ARA allows you to reload just that one specific family without disrupting any other aspects of RustyConnector.

ARA effectively separates each individual module into its own self-contained unit which we call a `Particle`.
All Particles exist inside a `Flux` object. When you have a `Flux`, you don't ever know if its `Particle` exists until you actually try to access it (Notice the correlation with quantum mechanics?)

The `Flux` object then contains lots of helpful methods you can use to handle a particle's presence or absence with.

::: info
A major difference between using the full-hand `RustyConnector` class versus the `RC` class to interact with the SDK is that
the `RC` class will bypass much of the fail-safe functionality of ARA and attempt to fetch the desired particle immedealty.

If you need more fault tolerance when making a Particle request, using `RustyConnector` may be the best move.
:::