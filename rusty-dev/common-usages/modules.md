---
title: 🧩 Modules 101
order: 1
---

# 🧩 Modules 101

This page will go through all of the needed code & configuration to create a RustyConnector native module

## Installation

1. Create a new empty Gradle or Maven project.
2. Add the RustyConnector Core SDK (See [Installation](../documentation/installation.md))
3. In your project's root class, create an inner class called `Builder` which extends `ExternalModuleBuilder<?>`
4. In your `resources` directory create a `rc-module.json` and set the `main` attribute to be the classpath to this new `Builder` class you've made.

## Main Class

```java
public class ExampleModuleRegistry implements Module, ModuleHolder<ExampleModule> {
    private final ModuleCollection<ExampleModule> ExampleModules = new ModuleCollection<>(); // A ModuleCollection allows you to have internal processes running inside of your module. It's not always necessary.

    @Override
    public void close() throws Exception {
        // Function to stop your module
        // Closes this resource, relinquishing any underlying resources.
        this.ExampleModules.close();
    }
    
    @Override
    public @Nullable Component details() {
        // Returns a Component which describes the internal details of this module. If there's no details to show, can just return null.
        return join(
            JoinConfiguration.newlines(),
            // "rustyconnector-keyValue" is a visual component that organizes the text nicely
            RC.Lang("rustyconnector-keyValue").generate("Available ExampleModules", String.join(", ", this.ExampleModules.modules().keySet()))
        );
    }
    
    public static class Builder extends ExternalModuleBuilder<ExampleModuleRegistry> {
        @Override
        public void bind(@NotNull ProxyKernel kernel, @NotNull ExampleModuleRegistry instance) {
            // Runs after onStart(Context) successfully returns an instance and is registered into the RustyConnector kernel for the first time.
            // This method will only be run when your module is first registered to the kernel, or when the kernel is restarted. It should be used to specifically link into kernel resources on a one-off basis.
            // Example usages would be registering Lang nodes or adding events to the EventListener.
        }

        @NotNull
        @Override
        public ExampleModuleRegistry onStart(@NotNull Context context) throws Exception {
            // Runs when the RustyConnector kernel is ready to load your module.
            // This method should only be used to configure and start your module, you shouldn't interact with the RustyConnector kernel here.
            ExampleModuleRegistry registry = new ExampleModuleRegistry();
            return registry;
        }
    }
}
```

## `rc-module.json`

Here is the definition schema of the module's json:

```json
{
  "main": "com.example.MainClass$Builder",
  "name": "ExampleName",
  "description": "Provides an example of rc-module.json",
  "environments": [
    // The environments you want your module to load in.
    // "proxy" or "server"
  ],
  "dependencies": [],
  "softDependencies": []
}
```

## Examples
 
Want to see more code before writing some? Here are some examples to get started:

- Official ExampleModule (WIP)
- [Whitelist Module](https://github.com/Aelysium-Group/rcm-whitelists)
- [Static Module](https://github.com/Aelysium-Group/rcm-staticFamily)
