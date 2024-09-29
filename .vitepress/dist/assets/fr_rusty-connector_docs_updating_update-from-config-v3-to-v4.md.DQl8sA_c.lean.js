import{_ as a,c as i,a1 as e,o as n}from"./chunks/framework.C7abYapc.js";const g=JSON.parse('{"title":"ℹ️ Updating from V3 to V4","description":"","frontmatter":{"title":"ℹ️ Updating from V3 to V4","sidebar_position":4},"headers":[],"relativePath":"fr/rusty-connector/docs/updating/update-from-config-v3-to-v4.md","filePath":"fr/rusty-connector/docs/updating/update-from-config-v3-to-v4.md"}'),l={name:"fr/rusty-connector/docs/updating/update-from-config-v3-to-v4.md"};function t(o,s,p,r,h,c){return n(),i("div",null,s[0]||(s[0]=[e(`<p>On this page, we will walk you through how to update your config from v3 to v4! v4 introduces many new config files! Be ready to do some copy and pasting.</p><h2 id="disclaimer" tabindex="-1">Disclaimer <a class="header-anchor" href="#disclaimer" aria-label="Permalink to &quot;Disclaimer&quot;">​</a></h2><p>It can be a hassle going through and updating config files. If you&#39;d rather just configure a fresh installation of the configs instead of attempting to update your already existing ones. You can simply delete your config files and RC will generate new ones on the next boot.</p><h2 id="unchanging" tabindex="-1">Unchanging <a class="header-anchor" href="#unchanging" aria-label="Permalink to &quot;Unchanging&quot;">​</a></h2><p>All configuration files are changed in some way.</p><h2 id="walkthrough" tabindex="-1">Walkthrough <a class="header-anchor" href="#walkthrough" aria-label="Permalink to &quot;Walkthrough&quot;">​</a></h2><h3 id="_1-update-config-version" tabindex="-1">1. Update config version <a class="header-anchor" href="#_1-update-config-version" aria-label="Permalink to &quot;1. Update config version&quot;">​</a></h3><p>In order for RC to load all of it&#39;s new configs, update your config.yml version to <code>version: 4</code> immediately.</p><h3 id="_2-update-server-lifecycle" tabindex="-1">2. Update server lifecycle. <a class="header-anchor" href="#_2-update-server-lifecycle" aria-label="Permalink to &quot;2. Update server lifecycle.&quot;">​</a></h3><p>In your config.yml, replace <code>services.server-lifecycle</code> with the following.</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Manages the lifecycles of servers.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Also manages the lifecycle of a player&#39;s home server if you are using Static Families.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    server-lifecycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Amount of time, in seconds, that a server can go without pinging the proxy.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If a server doesn&#39;t ping the proxy in this time, it will be declared stale</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and be unregistered from the proxy.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        server-timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Amount of time, in seconds, that a server should wait to ping the proxy.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This setting cannot be higher than &quot;server-timeout&quot;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        server-ping-interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span></code></pre></div><p>With the introduction of Magic Link, servers now ping the proxy continuously. There&#39;s no longer any such thing as a &quot;register&quot; or &quot;unregister&quot; request/command.</p><h3 id="_3-migrate-families-to-families-yml" tabindex="-1">3. Migrate <code>families</code> to <code>families.yml</code> <a class="header-anchor" href="#_3-migrate-families-to-families-yml" aria-label="Permalink to &quot;3. Migrate \`families\` to \`families.yml\`&quot;">​</a></h3><p>After adjusting your server lifecycle options, your config.yml should load properly allowing the rest of v4&#39;s new config files to load. Among these should be the new <code>families.yml</code>. Take all of your families data from <code>config.yml</code> and migrate it to <code>families.yml</code>. Make sure that you delete the entire <code>families</code> section from <code>config.yml</code> as it is no-longer needed.</p><p>Additionally, remove the <code>mysql</code> section from <code>config.yml</code> and move that to <code>families.yml</code> as well.</p><h3 id="_3-migrate-mysql-to-families-yml" tabindex="-1">3. Migrate <code>mysql</code> to <code>families.yml</code> <a class="header-anchor" href="#_3-migrate-mysql-to-families-yml" aria-label="Permalink to &quot;3. Migrate \`mysql\` to \`families.yml\`&quot;">​</a></h3><p>After migrating your families to <code>families.yml</code>. Go back and also migrate the <code>mysql</code> section from <code>config.yml</code> to <code>families.yml</code> as well.</p><h3 id="_4-clean-up-config-yml" tabindex="-1">4. Clean up <code>config.yml</code> <a class="header-anchor" href="#_4-clean-up-config-yml" aria-label="Permalink to &quot;4. Clean up \`config.yml\`&quot;">​</a></h3><p>Delete the following config nodes from <code>config.yml</code>. Also be sure to delete their respective sub-nodes and comments.</p><h4 id="delete" tabindex="-1">Delete: <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete:&quot;">​</a></h4><ul><li><code>families</code></li><li><code>mysql</code></li><li><code>message-tunnel</code></li><li><code>boot-commands</code></li></ul><h3 id="_5-adjust-logger-yml" tabindex="-1">5. Adjust <code>logger.yml</code> <a class="header-anchor" href="#_5-adjust-logger-yml" aria-label="Permalink to &quot;5. Adjust \`logger.yml\`&quot;">​</a></h3><p>Because of the addition of the Magic Link service, some logging stuff has changed. In <code>logger.yml</code> make the following changes.</p><ul><li><strong>Update</strong> <code>messaging.registration-request</code> to <code>messaging.registration</code></li><li><strong>Update</strong> <code>messaging.unregistration-request</code> to <code>messaging.unregistration</code></li><li><strong>Delete</strong> <code>messaging.pong</code></li><li><strong>Update</strong> <code>console-icons.requesting-registration</code> to <code>console-icons.attempting-registration</code></li><li><strong>Update</strong> <code>console-icons.requesting-unregistration</code> to <code>console-icons.attempting-unregistration</code></li><li><strong>Delete</strong> <code>console-icons.call-for-registration</code></li><li><strong>Delete</strong> <code>console-icons.pong</code></li></ul><h3 id="_6-add-parent-families-to-families-family-type-yml" tabindex="-1">6. Add parent families to <code>families/family.type.yml</code> <a class="header-anchor" href="#_6-add-parent-families-to-families-family-type-yml" aria-label="Permalink to &quot;6. Add parent families to \`families/family.type.yml\`&quot;">​</a></h3><p>In your <code>families</code> folder, adjust each of your individual family config files by adding the following code block just below the first comment block.</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                      Parent Family                       #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#               ---------------------------                #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | The parent family is the family that players will      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | be sent to when they run /hub (Enabled in              #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | dynamic_teleport.yml), or when a fallback occurs.      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | If the parent family is unavailable, the root family   #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | is used instead.                                       #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#               ---------------------------                #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">parent-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span></code></pre></div><h3 id="_7-migrate-tpa-settings-to-dynamic-teleport-yml" tabindex="-1">7. Migrate tpa settings to <code>dynamic_teleport.yml</code> <a class="header-anchor" href="#_7-migrate-tpa-settings-to-dynamic-teleport-yml" aria-label="Permalink to &quot;7. Migrate tpa settings to \`dynamic_teleport.yml\`&quot;">​</a></h3><p>Assuming you&#39;ve been using the <code>tpa</code> feature in your family configs; you&#39;ll need to migrate these settings to <code>dynamic_teleport.yml</code>. In <code>dynamic_teleport.yml</code> enable <code>tpa</code>, define which families it should be allowed in, and set the other options.</p><p>Afterward, delete the entire <code>tpa</code> block from each of your family configs.</p><h3 id="_8-update-load-balancing-comment-in-families-family-type-yml" tabindex="-1">8. Update load balancing comment in <code>families/family.type.yml</code> <a class="header-anchor" href="#_8-update-load-balancing-comment-in-families-family-type-yml" aria-label="Permalink to &quot;8. Update load balancing comment in \`families/family.type.yml\`&quot;">​</a></h3><p>In your <code>families</code> folder, replace each comment for <code>load-balancing</code> with the following.</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                        Algorithm                         #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#               ---------------------------                #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | Depending on your needs, you might want to balance     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | player influxes in various ways.                       #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | RustyConnector currently supports the following.       #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | balancing algorithms if there are other algorithms     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># | you&#39;d like to see in the future, let us know!          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  ⚫ LEAST_CONNECTION -                                   #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             Connects players to the server with the      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             the fewest players currently connected.      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             This mode is best if you want evenly         #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             distributed players across all servers.      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  ⚫ MOST_CONNECTION -                                    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             Connects players to the server with the      #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             the most players currently connected.        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             This mode is best if you want to fill        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             servers up as quickly as possible.           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  ⚫ ROUND_ROBIN -                                        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             Every time a connection occurs, the next     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             server in the load balancer will be queued   #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             for the next connection.                     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             Once the load balancer reaches the end of    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             the server queue, the load balancer will     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             loop back to the beginning and start again.  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#               ---------------------------                #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span></code></pre></div><p>This new comment lists a new load balancing algorithm called <code>MOST_CONNECTION</code>.</p>`,34)]))}const k=a(l,[["render",t]]);export{g as __pageData,k as default};