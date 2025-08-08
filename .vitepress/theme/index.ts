// https://vitepress.dev/guide/custom-theme
import { App, h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './style.css'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/vue3'


const autoImportComponents = (app: App<any>) => {
    const components = import.meta.glob('../../components/pages/**/*.vue', { eager: true })

    for (const path in components) {
        const component = components[path]
        const name = component.default.name || path.split('/').pop().replace('.vue', '')
        app.component(name, component.default)
    }
}

const enableParticles = (app: App<any>) => {
    if (typeof window === 'undefined') return;
    if (typeof document === 'undefined') return;

    app.use(Particles, {
        init: async engine => {
            await loadSlim(engine)
        }
    })
}

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app }) {
        enhanceAppWithTabs(app);
        autoImportComponents(app);
        enableParticles(app);
    }
} satisfies Theme
