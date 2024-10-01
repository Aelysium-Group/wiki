import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aelysium Wiki",
  description: "The wiki for all of the Aelysium's projects, including RustyConnector",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'RustyConnector', link: '/rusty-connector' },
      { text: 'ARA', link: '/ara' },
      { text: 'Declarative YAML', link: '/declarative-yaml' }
    ],
    footer: {
      message: 'Released under the XXX License.',
      copyright: 'Copyright © 2019-2024 AELYSIUM'
    },
    sidebar: {
      'rusty-connector/': [
        {
          text: 'RustyConnector',
          link: '/rusty-connector/',
          items: [
            {
              text: '📥 Installation',
              link: '/rusty-connector/docs/installation',
              items: [
                { text: '📜 The Law', link: '/rusty-connector/docs/the-law' },
                { text: '⚙️ Commands', link: '/rusty-connector/docs/commands' },
                { text: '📌 Permissions', link: '/rusty-connector/docs/permissions' },
              ]
            },
            {
              text: '📖 Concepts',
              items: [
                {
                  text: '☁️ Families', link: '/rusty-connector/docs/concepts/families/',
                  items: [
                    { text: '🌧️ Scalar Family', link: '/rusty-connector/docs/concepts/families/scalar.md' },
                    { text: '🌩️ Static Family', link: '/rusty-connector/docs/concepts/families/static.md' },
                    { text: '🌨️ Ranked Family', link: '/rusty-connector/docs/concepts/families/ranked.md' }
                  ]
                },
                { text: '👮 Whitelist', link: '/rusty-connector/docs/concepts/whitelist' },
                { text: '🔖 Discord Webhooks', link: '/rusty-connector/docs/concepts/discord-webhooks' },
                { text: '🌊 Liquid Timestamp', link: '/rusty-connector/docs/concepts/liquid-timestamps' },
                { text: '⤵️ Load Balancing', link: '/rusty-connector/docs/concepts/load-balancing' },
                { text: '📦 MCLoaders', link: '/rusty-connector/docs/concepts/loader' },
                { text: '🟥 Redis', link: '/rusty-connector/docs/concepts/redis' }
              ]
            },
            {
              text: '📈 Config Updating',
              items: [
                { text: '2️⃣ Updating from V1 to V2', link: '/rusty-connector/docs/updating/update-from-config-v1-to-v2' },
                { text: '3️⃣ Updating from V2 to V3', link: '/rusty-connector/docs/updating/update-from-config-v2-to-v3' },
                { text: '4️⃣ Updating from V3 to V4', link: '/rusty-connector/docs/updating/update-from-config-v3-to-v4' },
                { text: '5️⃣ Updating from v4 to V5', link: '/rusty-connector/docs/updating/update-from-config-v4-to-v5' },
                { text: '6️⃣ Updating from v5 to V6', link: '/rusty-connector/docs/updating/update-from-config-v5-to-v6' }
              ]
            },
            {
              text: '📖Lang',
              items: [
                { text: '⚠️ WIP', link: '/rusty-connector/lang/installation' }
              ]
            },
            {
              text: '⚒️ Toolkit',
              items: [
                { text: '📥 Installation', link: '/rusty-connector/toolkit/installation' },
                { text: '🛜 Services', link: '/rusty-connector/toolkit/services' },
                { text: '🎟️ Events', link: '/rusty-connector/toolkit/events' },
                { text: '📦 Packets', link: '/rusty-connector/toolkit/packets' },
                { text: '📲 Item References', link: '/rusty-connector/toolkit/references' },
                { text: '🏆 Matchmaker API', link: '/rusty-connector/toolkit/ranked-families' }
              ]
            }]
        }
      ],
      'declarative-yaml/': [
        {
          text: 'Declarative YAML',
          link: '/declarative-yaml/',
          items: [
            {
              text: '📖 Getting Started',
              link: '/declarative-yaml/getting-started'
            },
            {
              text: '🛜 Nodes',
              link: '/declarative-yaml/nodes',
              items: [
                {
                  text: '🔀 Ordering',
                  link: '/declarative-yaml/nodes#ordering'
                },
                {
                  text: '🎯 Targeting',
                  link: '/declarative-yaml/nodes#targeting-nodes'
                },
              ]
            },
            {
              text: '💬 Comments',
              link: '/declarative-yaml/comments'
            },
            {
              text: '🔣 Data Types',
              link: '/declarative-yaml/data-types'
            },
            {
              text: "🎨 Custom Objects",
              link: "/declarative-yaml/custom-objects"
            },
            {
              text: "⤵️ Path Parameters",
              link: "/declarative-yaml/path-parameters"
            },
            {
              text: "🔽 All Contents",
              link: "/declarative-yaml/all-contents"
            }
          ]
        }
      ],
      'ara/': [
        { text: '📥 Installation', link: '/rusty-connector/toolkit/installation' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aelysium-Group/wiki' },
      { icon: 'discord', link: 'https://discord.com/invite/jAZkAXf7zT' }
    ]
  }
})
