// .vitepress/config.mts
import { defineConfig } from "file:///E:/dev/wiki/node_modules/vitepress/dist/node/index.js";
import { tabsMarkdownPlugin } from "file:///E:/dev/wiki/node_modules/vitepress-plugin-tabs/dist/index.js";
import { withSidebar } from "file:///E:/dev/wiki/node_modules/vitepress-sidebar/dist/index.js";

// lib/components/ContentToggle.tsx
import React, { useState, useEffect } from "file:///E:/dev/wiki/node_modules/react/index.js";
import Cookies from "file:///E:/dev/wiki/node_modules/js-cookie/dist/js.cookie.mjs";
var ToggleComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    const savedState = Cookies.get("toggleState");
    if (savedState) {
      setIsEnabled(savedState === "true");
    }
  }, []);
  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    Cookies.set("toggleState", newState.toString());
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: isEnabled, onChange: handleToggle }), "Toggle"), isEnabled ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Second set of components")) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "First set of components")));
};
var ContentToggle_default = ToggleComponent;

// .vitepress/config.mts
var vitePressConfigs = {
  title: "Aelysium Wiki",
  description: "The wiki for all of the Aelysium's projects, including RustyConnector",
  locales: {
    root: {
      label: "English",
      lang: "en"
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
    container: {
      tipLabel: "\u{1F4A1} TIP",
      warningLabel: "\u26A0\uFE0F WARNING",
      dangerLabel: "\u{1F525} DANGER",
      infoLabel: "\u{1F50E} INFO",
      detailsLabel: "*\uFE0F\u20E3 DETAILS"
    }
  },
  //ignoreDeadLinks: true,
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "RustyConnector", link: "/rusty-connector" },
      { text: "Rusty for devs", link: "/rusty-dev" },
      { text: "ARA", link: "/ara" },
      { text: "Declarative YAML", link: "/declarative-yaml" }
    ],
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright \xA9 2019-2025 AELYSIUM"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Aelysium-Group" },
      { icon: "discord", link: "https://join.aelysium.group/" }
    ]
  },
  sitemap: {
    hostname: "https://wiki.aelysium.group"
  },
  enhanceApp({ app }) {
    app.component("ToggleComponent", ContentToggle_default);
  }
};
var config_default = defineConfig(
  withSidebar(vitePressConfigs, [
    {
      documentRootPath: "/",
      scanStartPath: "rusty-connector",
      resolvePath: "/rusty-connector/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      sortMenusByFrontmatterOrder: true
    },
    {
      documentRootPath: "/",
      scanStartPath: "declarative-yaml",
      resolvePath: "/declarative-yaml/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      sortMenusByFrontmatterOrder: true
    },
    {
      documentRootPath: "/",
      scanStartPath: "rusty-dev",
      resolvePath: "/rusty-dev/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      sortMenusByFrontmatterOrder: true
    }
  ])
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgImxpYi9jb21wb25lbnRzL0NvbnRlbnRUb2dnbGUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZGV2XFxcXHdpa2lcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZGV2XFxcXHdpa2lcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kZXYvd2lraS8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCB7IHRhYnNNYXJrZG93blBsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tdGFicydcclxuaW1wb3J0IHsgd2l0aFNpZGViYXIgfSBmcm9tICd2aXRlcHJlc3Mtc2lkZWJhcic7XHJcbmltcG9ydCBDb250ZW50VG9nZ2xlIGZyb20gJy4uL2xpYi9jb21wb25lbnRzL0NvbnRlbnRUb2dnbGUnO1xyXG5cclxuY29uc3Qgdml0ZVByZXNzQ29uZmlncyA9IHtcclxuICB0aXRsZTogXCJBZWx5c2l1bSBXaWtpXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHdpa2kgZm9yIGFsbCBvZiB0aGUgQWVseXNpdW0ncyBwcm9qZWN0cywgaW5jbHVkaW5nIFJ1c3R5Q29ubmVjdG9yXCIsXHJcbiAgbG9jYWxlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBsYWJlbDogJ0VuZ2xpc2gnLFxyXG4gICAgICBsYW5nOiAnZW4nXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGNvbmZpZyhtZCkge1xyXG4gICAgICBtZC51c2UodGFic01hcmtkb3duUGx1Z2luKVxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICB0aXBMYWJlbDogJ1x1RDgzRFx1RENBMSBUSVAnLFxyXG4gICAgICB3YXJuaW5nTGFiZWw6ICdcdTI2QTBcdUZFMEYgV0FSTklORycsXHJcbiAgICAgIGRhbmdlckxhYmVsOiAnXHVEODNEXHVERDI1IERBTkdFUicsXHJcbiAgICAgIGluZm9MYWJlbDogJ1x1RDgzRFx1REQwRSBJTkZPJyxcclxuICAgICAgZGV0YWlsc0xhYmVsOiAnKlx1RkUwRlx1MjBFMyBERVRBSUxTJyxcclxuICAgIH1cclxuICB9LFxyXG4gIC8vaWdub3JlRGVhZExpbmtzOiB0cnVlLFxyXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJy9sb2dvLnBuZycgfV1dLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICBsb2dvOiAnL2xvZ28ucG5nJyxcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdSdXN0eUNvbm5lY3RvcicsIGxpbms6ICcvcnVzdHktY29ubmVjdG9yJyB9LFxyXG4gICAgICB7IHRleHQ6ICdSdXN0eSBmb3IgZGV2cycsIGxpbms6ICcvcnVzdHktZGV2JyB9LFxyXG4gICAgICB7IHRleHQ6ICdBUkEnLCBsaW5rOiAnL2FyYScgfSxcclxuICAgICAgeyB0ZXh0OiAnRGVjbGFyYXRpdmUgWUFNTCcsIGxpbms6ICcvZGVjbGFyYXRpdmUteWFtbCcgfVxyXG4gICAgXSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgdGhlIEdQTC0zLjAgTGljZW5zZS4nLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMTktMjAyNSBBRUxZU0lVTSdcclxuICAgIH0sXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0FlbHlzaXVtLUdyb3VwJyB9LFxyXG4gICAgICB7IGljb246ICdkaXNjb3JkJywgbGluazogJ2h0dHBzOi8vam9pbi5hZWx5c2l1bS5ncm91cC8nIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHNpdGVtYXA6IHtcclxuICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly93aWtpLmFlbHlzaXVtLmdyb3VwJ1xyXG4gIH0sXHJcbiAgZW5oYW5jZUFwcCh7IGFwcCB9KSB7XHJcbiAgICBhcHAuY29tcG9uZW50KCdUb2dnbGVDb21wb25lbnQnLCBDb250ZW50VG9nZ2xlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhcclxuICB3aXRoU2lkZWJhcih2aXRlUHJlc3NDb25maWdzLCBbXHJcbiAgICB7XHJcbiAgICAgIGRvY3VtZW50Um9vdFBhdGg6ICcvJyxcclxuICAgICAgc2NhblN0YXJ0UGF0aDogJ3J1c3R5LWNvbm5lY3RvcicsXHJcbiAgICAgIHJlc29sdmVQYXRoOiAnL3J1c3R5LWNvbm5lY3Rvci8nLFxyXG4gICAgICB1c2VUaXRsZUZyb21Gcm9udG1hdHRlcjogdHJ1ZSxcclxuICAgICAgdXNlRm9sZGVyVGl0bGVGcm9tSW5kZXhGaWxlOiB0cnVlLFxyXG4gICAgICBzb3J0TWVudXNCeUZyb250bWF0dGVyT3JkZXI6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkb2N1bWVudFJvb3RQYXRoOiAnLycsXHJcbiAgICAgIHNjYW5TdGFydFBhdGg6ICdkZWNsYXJhdGl2ZS15YW1sJyxcclxuICAgICAgcmVzb2x2ZVBhdGg6ICcvZGVjbGFyYXRpdmUteWFtbC8nLFxyXG4gICAgICB1c2VUaXRsZUZyb21Gcm9udG1hdHRlcjogdHJ1ZSxcclxuICAgICAgdXNlRm9sZGVyVGl0bGVGcm9tSW5kZXhGaWxlOiB0cnVlLFxyXG4gICAgICBzb3J0TWVudXNCeUZyb250bWF0dGVyT3JkZXI6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkb2N1bWVudFJvb3RQYXRoOiAnLycsXHJcbiAgICAgIHNjYW5TdGFydFBhdGg6ICdydXN0eS1kZXYnLFxyXG4gICAgICByZXNvbHZlUGF0aDogJy9ydXN0eS1kZXYvJyxcclxuICAgICAgdXNlVGl0bGVGcm9tRnJvbnRtYXR0ZXI6IHRydWUsXHJcbiAgICAgIHVzZUZvbGRlclRpdGxlRnJvbUluZGV4RmlsZTogdHJ1ZSxcclxuICAgICAgc29ydE1lbnVzQnlGcm9udG1hdHRlck9yZGVyOiB0cnVlLFxyXG4gICAgfVxyXG4gIF0pXHJcbik7IiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgVG9nZ2xlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzRW5hYmxlZCwgc2V0SXNFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSBDb29raWVzLmdldCgndG9nZ2xlU3RhdGUnKTtcclxuICAgICAgICBpZiAoc2F2ZWRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0VuYWJsZWQoc2F2ZWRTdGF0ZSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gIWlzRW5hYmxlZDtcclxuICAgICAgICBzZXRJc0VuYWJsZWQobmV3U3RhdGUpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCd0b2dnbGVTdGF0ZScsIG5ld1N0YXRlLnRvU3RyaW5nKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0VuYWJsZWR9IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICBUb2dnbGVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAge2lzRW5hYmxlZCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNlY29uZCBzZXQgb2YgY2hpbGQgY29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cD5TZWNvbmQgc2V0IG9mIGNvbXBvbmVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZpcnN0IHNldCBvZiBjaGlsZCBjb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IHNldCBvZiBjb21wb25lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQ29tcG9uZW50OyJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1AsU0FBUyxvQkFBb0I7QUFDalIsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxtQkFBbUI7OztBQ0Y1QixPQUFPLFNBQVMsVUFBVSxpQkFBaUI7QUFDM0MsT0FBTyxhQUFhO0FBRXBCLElBQU0sa0JBQWtCLE1BQU07QUFDMUIsUUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQVMsS0FBSztBQUVoRCxZQUFVLE1BQU07QUFDWixVQUFNLGFBQWEsUUFBUSxJQUFJLGFBQWE7QUFDNUMsUUFB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
