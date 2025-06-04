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
```groovy
repositories {
    maven { url "https://maven.mrnavastar.me/releases" }
}

dependencies {
    implementation "group.aelysium.rustyconnector:rcm-whitelists:0.9.1-1"
}
```

== Gradle (Kotlin DSL)
```kotlin
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    implementation("group.aelysium.rustyconnector:rcm-whitelists:0.9.1-1")
}
```

:::

## Usage

::: warning
The Whitelist module is **proxy-only**!  
This means it is only accessible from the proxy and not from any Minecraft Loader.
:::

You can access the Whitelist Registry using the following code:

```java
WhitelistRegistry registry = RC.P.Module("Whitelists");
```

To manage (Create, Read, Update, Delete) a whitelist at runtime (for a proxy, family, or server), use:

```java
MetadataHolder#storeMetadata("whitelist", "whitelistName");
```

All the avaible methods are listed on the [module's Javadoc](https://maven.mrnavastar.me/javadoc/releases/group/aelysium/rustyconnector/rcm-whitelists/0.9.1-1). Happy Codding!
