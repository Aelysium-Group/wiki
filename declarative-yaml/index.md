---
title: Declarative YAML
---
# Declarative YAML

Declarative YAML (dYAML), much like many of Aelysium's other projects, aims to provide a "magical" YAML experience.
We've put in an effort to abstract as much of the complicated YAML details away so that you can write your YAML definitions faster.

Lets get started!

## Installation

:::tabs
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
        <artifactId>declarative-yaml</artifactId>
        <version>0.1.5</version>
    </dependency>
</dependencies>
```

== Gradle (Groovy DSL)
```java
repositories {
    maven { url "https://maven.mrnavastar.me/releases" }
}

dependencies {
    implementation "group.aelysium:declarative-yaml:0.1.5"
}
```

== Gradle (Kotlin DSL)
```java
repositories {
    maven("https://maven.mrnavastar.me/releases")
}

dependencies {
    implementation("group.aelysium:declarative-yaml:0.1.5")
}
```
:::
