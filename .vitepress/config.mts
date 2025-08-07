import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withSidebar } from 'vitepress-sidebar';
import tailwindcss from '@tailwindcss/vite'

const vitePressConfigs = {
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
        },
        container: {
            tipLabel: '💡 TIP',
            warningLabel: '⚠️ WARNING',
            dangerLabel: '🔥 DANGER',
            infoLabel: '🔎 INFO',
            detailsLabel: '*️⃣ DETAILS',
        }
    },
    //ignoreDeadLinks: true,
    head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
            { text: 'RustyConnector', link: '/rusty-connector' },
            { text: 'Rusty for devs', link: '/rusty-dev' },
            { text: 'ARA', link: '/ara' },
            { text: 'Declarative YAML', link: '/declarative-yaml' }
        ],
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2019-2025 AELYSIUM'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Aelysium-Group' },
            { icon: 'discord', link: 'https://join.aelysium.group/' }
        ]
    },
    sitemap: {
        hostname: 'https://wiki.aelysium.group'
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    }
}

export default defineConfig(
    withSidebar(vitePressConfigs, [
        {
            documentRootPath: '/',
            scanStartPath: 'rusty-connector',
            resolvePath: '/rusty-connector/',
            useTitleFromFrontmatter: true,
            useFolderTitleFromIndexFile: true,
            sortMenusByFrontmatterOrder: true,
        },
        {
            documentRootPath: '/',
            scanStartPath: 'declarative-yaml',
            resolvePath: '/declarative-yaml/',
            useTitleFromFrontmatter: true,
            useFolderTitleFromIndexFile: true,
            sortMenusByFrontmatterOrder: true,
        },
        {
            documentRootPath: '/',
            scanStartPath: 'rusty-dev',
            resolvePath: '/rusty-dev/',
            useTitleFromFrontmatter: true,
            useFolderTitleFromIndexFile: true,
            sortMenusByFrontmatterOrder: true,
            collapsed: true,
        }
    ])
);
