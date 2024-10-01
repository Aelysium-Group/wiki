---
slug: "./"
title: Introduction
sidebar_position: 1
---
# Declarative YAML
Declarative YAML (dYAML), much like many of Aelysium's other projects, aims to provide a "magical" YAML experience.
We've put in an effort to abstract as much of the complicated YAML details away so that you can write your YAML definitions faster.

Lets get started!

## Installation

<Tabs>
    <TabItem value="maven" label="Maven">
        <pre><code>{"\
<repositories>\n\
    <repository>\n\
        <id>mrnavastar-releases</id>\n\
        <name>MrNavaStar's Repository</name>\n\
        <url>https://maven.mrnavastar.me/releases</url>\n\
    </repository>\n\
</repositories>\n\
<dependencies>\n\
    <dependency>\n\
        <groupId>group.aelysium</groupId>\n\
        <artifactId>declarative-yaml</artifactId>\n\
        <version>0.1.4</version>\n\
    </dependency>\n\
</dependencies>\
        "}</code></pre>
    </TabItem>
    <TabItem value="gradle-groovy" label="Gradle (Groovy DSL)">
        <pre><code>{"\
repositories {\n\
    maven { url \"https://maven.mrnavastar.me/releases\" }\n\
}\n\
\n\
dependencies {\n\
    implementation \"group.aelysium:declarative-yaml:0.1.4\"\n\
}\
        "}</code></pre>
    </TabItem>
    <TabItem value="gradle-kotlin" label="Gradle (Kotlin DSL)">
        <pre><code>{"\
repositories {\n\
    maven(\"https://maven.mrnavastar.me/releases\")\n\
}\n\
\n\
dependencies {\n\
    implementation(\"group.aelysium:declarative-yaml:0.1.4\")\n\
}\
        "}</code></pre>
    </TabItem>
</Tabs>