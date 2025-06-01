---
order: 1
title: 👮 Whitelist
---
# Whitelist
## Installation

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
        <artifactId>rcm-whitelists</artifactId>
        <version>0.9.1-1</version>
    </dependency>
</dependencies>
```
== Gradle (Groovy DSL)
```java
repositories {
    maven { url "https://maven.mrnavastar.me/releases" }
}

dependencies {\
    implementation "group.aelysium.rustyconnector:rcm-whitelists:0.9.1-1"

}
```
== Gradle (Kotlin DSL)
```java
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    implementation("group.aelysium.rustyconnector:rcm-whitelists:0.9.1-1")
}
```
:::

## Usage
::: warning The Whitelist module is proxy only!
This means that you can't access the whitelist from a MC Loader, only from the proxy.
:::

You can access the Whitelist Registry with the folowing code:

```java
WhitelistRegistry registry = RC.P.Module("Whitelists");
```

Caller can CRUD a whitelist to proxy/family/server at runtime by calling `MetadataHolder#storeMetadata("whitelist", "whitelistName")`