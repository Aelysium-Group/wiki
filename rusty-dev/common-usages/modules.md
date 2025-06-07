---
title: 🧩 Modules 101
order: 1
---

# 🧩 Modules 101

This page will go thought all of the needed code & configuration to create a RustyConnector native module

## Installation

1. Create a new empty Gradle or Maven project.
2. Add the RustyConnector Core SDK (See above.)
3. In your project's `resources` directory, create a file called `rc-module.json`
4. In your project's root class, create an inner class called `Builder` which extends `ExternalModuleBuilder<?>`
5. In your `resources` directory create a `rc-module.json` and set the `main` attribute to be the classpath to this new `Builder` class you've made.

## Main Class

```java
public class ExampleModuleRegistry implements Module, ModuleHolder<ExampleModule> {
    private final ModuleCollection<ExampleModule> ExampleModules = new ModuleCollection<>();
    
    public void unregister(@NotNull String ExampleModuleName) {
        // Function to unregister your module
        this.ExampleModules.unregisterModule(ExampleModuleName);
    }

    public void register(@NotNull Module.Builder<ExampleModule> ExampleModule) throws Exception {
        // Function to register your module
        this.ExampleModules.registerModule(ExampleModule.name, ExampleModule);
    }

    public @Nullable Flux<ExampleModule> fetch(@NotNull String ExampleModuleName) {
        // WIP, waiting for juice's help
        // Ok it's fetch but for what ?
        return this.ExampleModules.fetchModule(ExampleModuleName);
    }

    @Override
    public void close() throws Exception {
        // Function to stop your module
        this.ExampleModules.close();
    }

    public @NotNull Map<String, Flux<ExampleModule>> ExampleModules() {
        // Return your module object
        return Map.copyOf(this.ExampleModules.modules());
    }

    @Override
    public Map<String, Flux<ExampleModule>> modules() {
        // Return the module(s) created by your code
        return Collections.unmodifiableMap(this.ExampleModules.modules());
    }
    
    @Override
    public @Nullable Component details() {
        // WIP, waiting for juice's help
        return join(
            JoinConfiguration.newlines(),
            RC.Lang("rustyconnector-keyValue").generate("Available ExampleModules", String.join(", ", this.ExampleModules.modules().keySet()))
        );
    }
    
    public static class Builder extends ExternalModuleBuilder<ExampleModuleRegistry> {
        @Override
        public void bind(@NotNull ProxyKernel kernel, @NotNull ExampleModuleRegistry instance) {
            // Here, you can listen to Rusty-Specific events.
        }

        @NotNull
        @Override
        public ExampleModuleRegistry onStart(@NotNull Context context) throws Exception {
            // Here lies your modules startup logic, like config creation, init, etc.
            // You need to return a "registry" object.
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
 
Want to see more code before writing some? Here is some examples to get started:

- Official ExampleModule (WIP)
- [Whitelist Module](https://github.com/Aelysium-Group/rcm-whitelists)
- [Static Module](https://github.com/Aelysium-Group/rcm-staticFamily)