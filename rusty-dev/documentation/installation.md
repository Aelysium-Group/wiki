---
title: ⚒️ Installation
description: "Ready to switch? Let's go!"
order: 1
---
# ⚒️ Installation
::: danger Wait a minute!
This page is for the RustyConnector SDK.
For the plugin wiki, go [here](/rusty-connector/).
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
        <groupId>group.aelysium.rustyconnector</groupId>
        <artifactId>core</artifactId>
        <version>0.9.1</version>
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
    compileOnly "group.aelysium.rustyconnector:core:0.9.1"
}
```
== Gradle (Kotlin DSL)
```java
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    compileOnly("group.aelysium.rustyconnector:core:0.9.1")
}
```
:::

Once imported, you can access the RustyConnector SDK from either the proxy or server.
In order to use the SDK properly, you must ensure that RustyConnector is added as a dependency in your plugin.

::: info
RustyConnector use the Adventure API by default.
:::

## Native Modules (RCM)
RustyConnector Native Modules are platform independent and are managed specifically by the RustyConnector Kernel.
Creating a new RCM is pretty simple. You can see a basic guide [here](../common-usages/modules.md).

## Platform Modules
When writing a platform specific module, you do not have the ability to use `ExternalModuleBuilder<?>`

The kernel can be accessed using the `RustyConnector` class.
It'll be your job to make sure you properly configure your platform module to work with RustyConnector's ARA framework.
Check out the next page to see details on the ARA framework as it pertains to RustyConnector.
