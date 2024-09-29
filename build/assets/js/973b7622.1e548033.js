"use strict";(self.webpackChunkaelysium_wiki=self.webpackChunkaelysium_wiki||[]).push([[455],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const i={title:"\ud83d\udce6 Packets",sidebar_position:4},o=void 0,c={unversionedId:"rusty-connector/toolkit/packets",id:"rusty-connector/toolkit/packets",title:"\ud83d\udce6 Packets",description:"Packets are a major backbone of RustyConnector.",source:"@site/docs/rusty-connector/toolkit/packets.md",sourceDirName:"rusty-connector/toolkit",slug:"/rusty-connector/toolkit/packets",permalink:"/rusty-connector/toolkit/packets",draft:!1,editUrl:"https://github.com/Aelysium-Group/wiki/docs/rusty-connector/toolkit/packets.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udce6 Packets",sidebar_position:4},sidebar:"plugins_wiki_rusty_connector",previous:{title:"\ud83c\udf9f\ufe0f Events",permalink:"/rusty-connector/toolkit/events"},next:{title:"\ud83d\udcf2 Item References",permalink:"/rusty-connector/toolkit/references"}},s={},l=[{value:"Magic Link",id:"magic-link",level:2},{value:"Custom Packets",id:"custom-packets",level:2},{value:"Packet Identification",id:"packet-identification",level:3},{value:"Adding Parameters",id:"adding-parameters",level:3},{value:"Listening for packets",id:"listening-for-packets",level:2},{value:"Packet Wrappers",id:"packet-wrappers",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Packets are a major backbone of RustyConnector.\nThis page will help you plug into RustyConnector's Magic Link service and issue your own packets!"),(0,r.kt)("h2",{id:"magic-link"},"Magic Link"),(0,r.kt)("p",null,"Magic Link is the connection backbone used by RustyConnector for handling connections between the Proxy and MCLoaders.\nIt's sole directive is ensuring that all MCLoaders on the Proxy are active and ready to handle tasks."),(0,r.kt)("p",null,"Magic Link also employs AES 256-bit end-to-end encryption via its Secure Transit module as well as packet filtering and caching via its Data Transit module."),(0,r.kt)("h2",{id:"custom-packets"},"Custom Packets"),(0,r.kt)("p",null,"The Packet Builder can be fetched from the MagicLink service.\nSince MagicLink is a service it means it must be fetched from the Flame.\nThis is done because the builder that you receive from MagicLink contains some already necessary metadata about your environment (for example is it a packet from an MCLoader or from the Proxy?) which you'd otherwise have to provide yourself."),(0,r.kt)("p",null,"Here's a basic example of creating a custom packet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Proxy Plugin"',title:'"Proxy','Plugin"':!0},'tinder.onStart(flame -> {\n    Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()\n        .identification(PacketIdentification.from("RC_MY_MODULE", "NAME_OF_PACKET"))\n        .sendTo(Packet.Target.mcLoader(target_uuid));\n});\n')),(0,r.kt)("p",null,"It's important to note that the ",(0,r.kt)("inlineCode",{parentName:"p"},".sendTo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".replyTo")," both build and send the packet.\nThere is no way to build a packet without building it."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"identification")," is always required before you can send or add parameters to a packet.")),(0,r.kt)("h3",{id:"packet-identification"},"Packet Identification"),(0,r.kt)("p",null,"When a packet is created, it needs to be assigned identification.\nA packet's ID contains two values; the Module that the packet is from (",(0,r.kt)("inlineCode",{parentName:"p"},"pluginID"),"), and the ID of the packet itself (",(0,r.kt)("inlineCode",{parentName:"p"},"packetID"),").\nYou can create a new PacketIdentification using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// pluginID = "MY_MODULE"\n// packetID = "NAME_OF_PACKET"\nPacketIdentification.from("MY_MODULE", "NAME_OF_PACKET");\n')),(0,r.kt)("p",null,"Both values can technically be whatever you want. But it's suggested that you set both to be in ",(0,r.kt)("inlineCode",{parentName:"p"},"UPPER_SNAKE_CASE")," format."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should set the ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginID")," to be something unique, preferably the name of your plugin."),(0,r.kt)("p",{parentName:"admonition"},"It should be noted that if your packet happens to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"PacketIdentification")," that is equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PacketIdentification")," of someone\nelse's plugin. Your packets will intercept eachother and cause issues.")),(0,r.kt)("h3",{id:"adding-parameters"},"Adding Parameters"),(0,r.kt)("p",null,"Adding a custom parameter is as easy as using the ",(0,r.kt)("inlineCode",{parentName:"p"},".parameter()")," method along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PacketParameter")," wrapper.\n",(0,r.kt)("inlineCode",{parentName:"p"},"PacketParameter")," lets you set parameters of type ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Proxy Plugin"',title:'"Proxy','Plugin"':!0},'Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()\n    .identification(PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET"))\n    .parameter("example_int", new PacketParameter(1000))\n    .parameter("example_long", new PacketParameter(1000000000000))\n    .parameter("example_double", new PacketParameter(2.5))\n    .parameter("example_string", new PacketParameter("hello!"))\n    .parameter("example_boolean", new PacketParameter(true))\n    .sendTo(Packet.Target.mcLoader(target_uuid));\n')),(0,r.kt)("h2",{id:"listening-for-packets"},"Listening for packets"),(0,r.kt)("p",null,"Listening for packets is a similar ordeal to listening for Events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomPacketListener.java"',title:'"CustomPacketListener.java"'},'public class CustomPacketListener implements PacketListener<CustomPacket> {\n    @Override\n    public PacketIdentification target() {\n        return PacketIdentification.from("MY_MODULE", "NAME_OF_PACKET");\n    }\n\n    @OVerride\n    public CustomPacket wrap(Packet packet) {\n        return new CustomPacket(packet);\n    }\n\n    @Override\n    public void execute(CustomPacket packet) throws Exception {\n        System.out.println(packet);\n    }\n}\n')),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"PacketListener")," we implement ",(0,r.kt)("inlineCode",{parentName:"p"},".target()")," which tells us what ",(0,r.kt)("inlineCode",{parentName:"p"},"PacketIdentification")," to listen for.\nAdditionally, we implement ",(0,r.kt)("inlineCode",{parentName:"p"},".execute()")," which lets us act upon the specific packet.\nAnd finally, we implement ",(0,r.kt)("inlineCode",{parentName:"p"},".wrap()")," which will wrap our packet using a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Packet.Wrapper")," that we've defined."),(0,r.kt)("h2",{id:"packet-wrappers"},"Packet Wrappers"),(0,r.kt)("p",null,"Once you start adding parameters to packets you'll probably want to make a wrapper to more easily interact with those parameters.\nPacket Wrappers effectivly allow you to create custom types that you can use in your Packet Listeners."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomPacket.java"',title:'"CustomPacket.java"'},'/**\n * The following is a packet wrapper for the following example packet:\n * Packet packet = flame.services().magicLink().packetManger().newPacketBuilder()\n *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))\n *      .parameter("example_data", "hello!")\n *      .sendTo(Packet.Target.allAvailableProxies());\n */\n\npublic class CustomPacket extends Packet.Wrapper {\n    public CustomPacket(Packet packet) { super(packet); }\n\n    // Convenience getter for fetching a custom parameter so we don\'t have to manually every time.\n    public String exampleData() {\n        return this.parameter(Parameters.EXAMPLE_DATA).getAsString();\n    }\n\n    // Convenience enum which lists all the valid Parameters that this custom packet supports\n    public interface Parameters {\n        String EXAMPLE_DATA = "example_data";\n    }\n}\n\n')),(0,r.kt)("p",null,"Then, with this new wrapper we can update our PacketListener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomPacketListener.java"',title:'"CustomPacketListener.java"'},'public class CustomPacketListener implements PacketListener<CustomPacket> {\n    @Override\n    public PacketIdentification target() {\n        return PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET");\n    }\n\n    @Override\n    public CustomPacket wrap(Packet packet) {\n        return new CustomPacket(packet);\n    }\n\n    @Override\n    public void execute(CustomPacket packet) throws Exception {\n        System.out.println(packet.exampleData());\n    }\n}\n')),(0,r.kt)("p",null,"If you want to take your packet wrapper a step further you can add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Packet.Builder")," implementation.\nTo better show this example, lets update our custom packet we've been using so that its example parameter holds a player's username."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * The following is a packet wrapper for the following example packet:\n * Packet packet = flame.services().magicLink().packetManager().newPacketBuilder()\n *      .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))\n *      .parameter("username", "Notch")\n *      .sendTo(Packet.Target.allAvailableProxies());\n */\n\npublic class CustomPacket extends Packet.Wrapper {\n    private CustomPacket(Packet packet) { super(packet); }\n\n    // Convenience getter for fetching a custom parameter so we don\'t have to manually every time.\n    public String username() {\n        return this.parameter(Parameters.USERNAME).getAsString();\n    }\n\n    // Convenience enum which lists all the valid Parameters that this custom packet supports\n    public interface Parameters {\n        String USERNAME = "username";\n    }\n\n    public static CustomPacket createAndSend(VelocityFlame flame, UUID target_uuid, String username) {\n        return new CustomPacket(\n            flame.services().magicLink().packetManager().newPacketBuilder()\n                .identification(PacketIdentification.from("MY_MODULE", "CUSTOM_PACKET"))\n                .parameter("username", "Notch")\n                .sendTo(Packet.Target.allAvailableProxies())\n        );\n    }\n}\n')))}m.isMDXComponent=!0}}]);