---
title: ☁️ Families
---
Families are the backbone of RustyConnector.
They can be thought of as "server collections." MCLoaders always have a "theme" and therefore they always belong to a family.

The hard part about setting up a RustyConnector Network is deciding how to setup your families. If you can master that, you've mastered RustyConnector.

Let's dive in!

## How do they work?
You configure your families in `families.yml`, from there RustyConnector will create a custom config for your family in the `families` folder. This config will allow you to make further edits to your family!
If you remove a family from `families.yml` that family will no longer be registered on RustyConnector and MCLoaders will no longer be able to register to it.
When you setup your families you must define a family as your `root-family`. This is the family that players will automatically load into when they log onto your network.

:::info What's with all the clouds?
Families can be complex, we use Clouds to help us describe certain behaviors of families.
When reading family docs, keep a look out for info tabs with a ☁️ emoji.
:::

Different families are optimized for different usecases. Follow one of the links below to read up on them all!