"use strict";(self.webpackChunkaelysium_wiki=self.webpackChunkaelysium_wiki||[]).push([[215],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7462),r=n(7294),a=n(6010),i=n(2957),s=n(6550),l=n(5238),u=n(3609),c=n(2560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,u]=y({queryString:n,groupId:o}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=l??d;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var f=n(1048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==s&&(d(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,a.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",k.tabList)},r.createElement(b,(0,o.Z)({},e,t)),r.createElement(w,(0,o.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(g,(0,o.Z)({key:String(t)},e))}},5746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var o=n(7462),r=(n(7294),n(4137)),a=n(3992),i=n(425);const s={title:"\ud83d\udcd6 Installation",description:"Ready to switch? Let's go!",sidebar_position:1,displayed_sidebar:"plugins_wiki_rusty_connector"},l=void 0,u={unversionedId:"rusty-connector/docs/installation",id:"rusty-connector/docs/installation",title:"\ud83d\udcd6 Installation",description:"Ready to switch? Let's go!",source:"@site/docs/rusty-connector/docs/installation.mdx",sourceDirName:"rusty-connector/docs",slug:"/rusty-connector/docs/installation",permalink:"/rusty-connector/docs/installation",draft:!1,editUrl:"https://github.com/Aelysium-Group/wiki/docs/rusty-connector/docs/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcd6 Installation",description:"Ready to switch? Let's go!",sidebar_position:1,displayed_sidebar:"plugins_wiki_rusty_connector"},sidebar:"plugins_wiki_rusty_connector",previous:{title:"Introduction",permalink:"/rusty-connector/"},next:{title:"\ud83d\udcdc The Law",permalink:"/rusty-connector/docs/the_law"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Setting up the Proxy",id:"setting-up-the-proxy",level:3},{value:"Setting up an MCLoader",id:"setting-up-an-mcloader",level:3}],p=(m="TheLawTag",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const y={toc:d},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So you'd like to switch to RustyConnector?\nHere's a crash course on how to get started!"),(0,r.kt)("p",null,"First thing first, let's understand how the plug-in works."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Creating a RustyConnector network involves setting up RC on your Proxy server as well as on your individual MCLoaders."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Did you catch that?"),"RustyConnector supports a whole slew of different sources! Expand the tabs below to get an idea of how we refer to things in these docs.",(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"proxy",label:"Proxy",mdxType:"TabItem"},'While reading the RustyConnector docs, you\'ll see us refer to "Proxy" a lot. "Proxy" always refers to the copy of RustyConnector running on Velocity. In fact sometimes we might just say "Velocity".',(0,r.kt)("br",null),'When we refer to "Velocity" or "Proxy" we are referring RustyConnector, not necessarily the proxy itself. If we are referring to the Velocity proxy itself we will specifically refer to it as "Velocity Server".'),(0,r.kt)(i.Z,{value:"mcloader",label:"MCLoader",mdxType:"TabItem"},'RustyConnector supports loads of different Minecraft loaders like Paper, Folia, Purpur, Pufferfish, and Fabric. These softwares are referred to as "MCLoader" or just "Loader" (Always a capital ',(0,r.kt)("code",null,"L"),'). "MCLoader" refers to the copy of RC that runs on a loader like Paper, Folia, or Fabric.',(0,r.kt)("br",null),'When we refer to "MCLoader" we are referring RustyConnector, not necessarily the minecraft loader itself.')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'You\'ll just about never see the word "server" used in the RustyConnector docs.\nThis is because using "server" is too ambiguous, are you referring to the proxy? An MCLoader? The physical machine running one of your MCLoaders?'),(0,r.kt)("p",{parentName:"admonition"},'Because of the ambiguity, don\'t use "server" when working with RustyConnector.'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must have working Redis and MariaDB databases for RustyConnector to operate!")),(0,r.kt)("p",null,"All RustyConnector communication happens over Redis.\nVelocity is the main powerhouse of your RustyConnector Network. On boot, Velocity will load your configs and begin listening for MCLoaders over Redis.\nAnytime an MCLoader server boots it will automatically attempt to establish a Magic Link connection with the Proxy. If the connection is successful, the MCLoader will be registered into one of the predefined server families."),(0,r.kt)("p",null,"If an MCLoader shuts down or crashes, it's Magic Link with the Proxy will be broken and the MCLoader will be removed from the Proxy's pool of available Loaders."),(0,r.kt)("p",null,"There are more details involved however this is the basis of how this system works.\nIf you have ten MCLoaders, they can all start and stop at any time and their Magic Links with the Proxy will be gracefully handled accordingly."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,r.kt)("p",null,"RustyConnector completely replaces the ",(0,r.kt)("inlineCode",{parentName:"p"},"[servers]")," part of your ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity.toml")," configuration file.\nAs such, once your RC network is built and ready to go, you won't have to open this config anymore to manage your servers.\nThat said, the Velocity Server itself ",(0,r.kt)("strong",{parentName:"p"},"REQUIRES")," that you have at least one server defined in it. Feel free to just set this to a loopback address like ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:0"),"."),(0,r.kt)("p",null,"Additionally you'll have to have both a Redis and MariaDB database ready to go in order to use RustyConnector. "),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"setting-up-the-proxy"},"Setting up the Proxy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load the latest version of RustyConnector into your Velocity Server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your Velocity Server."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This will cause RustyConnector to load some initial config files for you to mess with.\nNotice how there's a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"private.key"),"? This key is used to encrypt and decrypt packets transported over Redis. When you set up your MCLoaders you'll want to copy this file over to them."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"families.yml")," and set up your RC families."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can read more about Families ",(0,r.kt)("a",{parentName:"p",href:"./concepts/families"},"here"),". Make sure you edit ",(0,r.kt)("inlineCode",{parentName:"p"},"root-family.name")," to match whichever family should be your default."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors.yml")," enter your Redis and MariaDB information."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Redis requires that you set a username, however you aren't required to set a password."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your velocity server."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"RustyConnector will process your information and create family configs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"families")," folder. Be sure to take a look at these configs and make changes to them as you see fit.")),(0,r.kt)("p",{parentName:"li"},"At this point, we are now ready to set up our first MCLoader!"))),(0,r.kt)("h3",{id:"setting-up-an-mcloader"},"Setting up an MCLoader"),(0,r.kt)("p",null,"Load RustyConnector onto your MCLoader of choice. Make sure that RustyConnector has support for it."),(0,r.kt)("p",null,"Ensure that the version of RustyConnector running on your MCLoader is always the same as the version running on your Velocity Server."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start your MCLoader so that RustyConnector can generate configs for you."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"private.key")," file from your proxy and paste it into your MCLoader."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," to be whatever you'd like.",(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's usually best to make the name something that somewhat describes the server. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"survival-1"),".\nThe names you list in your MCLoaders must always be unique, do not set duplicate names."))),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"address"),".",(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Address can be set to the same thing that you would normally paste into th ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity.toml")," (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:25565"),").\nThe address should represent what players would connect to if they wanted to join this MCLoader.\nMake sure that if the address of this MCLoader changes you also change it here!"))),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"family"),".",(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Family should be set so that it matches the name of one of the families you listed on the Proxy in ",(0,r.kt)("inlineCode",{parentName:"p"},"families.yml"),".\nIf the family doesn't exist, the MCLoader will fail to register to the Proxy."))),(0,r.kt)("li",{parentName:"ol"},"Set your player caps to a level that you are happy with."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"connectors.yml")," enter your Redis information. Make sure it's the same as the information used on the PRoxy."),(0,r.kt)("li",{parentName:"ol"},"Restart your MCLoader.")),(0,r.kt)("p",null,"Everything should be working now!\nOnce the MCLoader is able to establish a Magic Link with the Proxy, you should see a green confirmation message in the console."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's important to take note that RustyConnector is specifically written in a top-down way. MCLoaders never actually know if the Proxy exists and is ready to establish a Magic Link. The MCLoaders can only attempt to establish a Magic Link and wait for a response from the Proxy.")),(0,r.kt)("admonition",{title:"Lets be clear",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Once you setup RustyConnector, you are now a ",(0,r.kt)("strong",{parentName:"p"},"RustyConnector Network")," and you need to follow ",(0,r.kt)(p,{mdxType:"TheLawTag"},"The Law"),".")))}f.isMDXComponent=!0}}]);