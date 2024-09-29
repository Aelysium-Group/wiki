import{_ as o,c as a,a1 as t,o as r}from"./chunks/framework.C7abYapc.js";const u=JSON.parse('{"title":"⚙️ Commands","description":"RustyConnector Commands","frontmatter":{"title":"⚙️ Commands","description":"RustyConnector Commands","sidebar_position":3,"displayed_sidebar":"plugins_wiki_rusty_connector"},"headers":[],"relativePath":"rusty-connector/docs/commands.md","filePath":"rusty-connector/docs/commands.md"}'),s={name:"rusty-connector/docs/commands.md"};function c(n,e,i,d,l,m){return r(),a("div",null,e[0]||(e[0]=[t('<p>Commands marked with an asterisk <code>*</code> are player useable. Otherwise, all commands are only allowed to be used from the console. If you want to allow players to use some commands, use a plugin like EssentialsX or CMI to make a command alias.</p><h1 id="proxy-commands" tabindex="-1">Proxy Commands <a class="header-anchor" href="#proxy-commands" aria-label="Permalink to &quot;Proxy Commands&quot;">​</a></h1><p><code>/rc family</code> | View all registered families.</p><p><code>/rc family &lt;family name&gt;</code> | View information about a specific family.</p><p><code>/rc family &lt;family name&gt; sort</code> | Tell the family to completely resort itself in accordance with its load-balancing algorithm.</p><p><code>/rc family &lt;family name&gt; resetIndex</code> | Reset the family&#39;s insertion point to the first server in the family queue.</p><p><code>/rc message get &lt;message ID&gt;</code> | View a specific message.</p><p><code>/rc message list</code> | View recent messages that have been processed.</p><p><code>/rc register all</code> | Send a request for all servers to register themselves.</p><p><code>/rc register family &lt;family name&gt;</code> | Send a request for all servers in a specific family to register themselves.</p><p><code>/rc reload</code> | Shows different reload options for you to try.</p><p><code>/rc send &lt;username&gt; &lt;family name&gt;</code> | Sends a player to a specific family.</p><p><code>/rc send server &lt;username&gt; &lt;server name&gt;</code> | Sends a player to a specific server (ignores family load balancer, whitelist, and server soft/hard caps)</p><p>*<code>/tpa</code> | Teleport to another player within the family. (Works across servers within that family.)</p><p>*<code>/hub</code> | Teleport a family&#39;s parent family.</p><h1 id="mcloader-commands" tabindex="-1">MCLoader Commands <a class="header-anchor" href="#mcloader-commands" aria-label="Permalink to &quot;MCLoader Commands&quot;">​</a></h1><h3 id="note-because-of-an-unknown-bug-all-mcloader-commands-must-be-executed-using-the-plugin-prefix-rustyconnector-paper-rc-instead-of-just-rc" tabindex="-1">NOTE: Because of an unknown bug, all MCLoader commands must be executed using the plugin prefix: <code>rustyconnector-paper:rc</code> instead of just <code>rc</code>. <a class="header-anchor" href="#note-because-of-an-unknown-bug-all-mcloader-commands-must-be-executed-using-the-plugin-prefix-rustyconnector-paper-rc-instead-of-just-rc" aria-label="Permalink to &quot;NOTE: Because of an unknown bug, all MCLoader commands must be executed using the plugin prefix: `rustyconnector-paper:rc` instead of just `rc`.&quot;">​</a></h3><p><code>/rustyconnector-paper:rc send &lt;username&gt; &lt;family name&gt;</code> | Sends a player to a specific family.</p><p><code>/rustyconnector-paper:rc register</code> | Attempts to register the server to the proxy.</p><p><code>/rustyconnector-paper:rc unregister</code> | Attempts to unregister the server from the proxy.</p><p><code>/rustyconnector-paper:rc lock</code> | Locks this MCLoader, preventing players from connecting to it without specifically being sent to it by the Proxy.</p><p><code>/rustyconnector-paper:rc unlock</code> | Unlocks this MCLoader, allowing players to connect to it via it&#39;s family.</p>',22)]))}const f=o(s,[["render",c]]);export{u as __pageData,f as default};