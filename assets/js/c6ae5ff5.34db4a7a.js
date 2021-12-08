"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[18853],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(r),g=i,f=s["".concat(p,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return i}})},44996:function(t,e,r){r.d(e,{C:function(){return a},Z:function(){return o}});var n=r(52263),i=r(13919);function a(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,l=void 0!==o&&o,p=a.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(l)return e+r;var c=r.startsWith(e)?r:e+r.replace(/^\//,"");return u?t+c:c}(a,r,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},39403:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=r(44996),l=["components"],p={},u=void 0,c={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d",id:"version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d",isDocsHomePage:!1,title:"\u5c97\u4f4d",description:"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f7f\u7528\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668\u4e2d\u7684\u5c97\u4f4d\u9009\u9879\u5361\u8fdb\u884c\u5c97\u4f4d\u7684\u5b9a\u4e49\u3002\u5c97\u4f4d\u662f\u4e00\u4e2a\u5217\u8868\u89c6\u56fe\uff0c\u5c97\u4f4d\u4e0d\u80fd\u5305\u542b\u5c97\u4f4d\u3002\u4e00\u4e2a\u5c97\u4f4d\u5bf9\u5e94\u4e00\u79cd\u8f6f\u4ef6\u4f7f\u7528\u6743\u9650\u3002",source:"@site/versioned_docs/version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u5c97\u4f4d.md",tags:[],version:"4.0.3",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-4.0.3/someSidebar",previous:{title:"\u4e1a\u52a1\u8303\u7574",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u4e1a\u52a1\u8303\u7574"},next:{title:"\u7ec4\u7ec7\u5355\u5143",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u7ec4\u7ec7\u5355\u5143"}},m=[{value:"\u914d\u7f6e\u5c97\u4f4d",id:"\u914d\u7f6e\u5c97\u4f4d",children:[],level:2},{value:"\u65b0\u5efa\u5c97\u4f4d",id:"\u65b0\u5efa\u5c97\u4f4d",children:[],level:2}],s={toc:m};function g(t){var e=t.components,r=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668"),"\u4e2d\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u9009\u9879\u5361\u8fdb\u884c",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u7684\u5b9a\u4e49\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u662f\u4e00\u4e2a\u5217\u8868\u89c6\u56fe\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u4e0d\u80fd\u5305\u542b",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u3002\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\u5bf9\u5e94\u4e00\u79cd\u8f6f\u4ef6\u4f7f\u7528\u6743\u9650\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5c97\u4f4d"},"\u914d\u7f6e\u5c97\u4f4d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5bfc\u822a\u680f\u2192\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668\u2192\u5c97\u4f4d"),"\u5185\u53f3\u952e\u6f14\u793a-\u5c97\u4f4d\uff0c\u5728\u5feb\u6377\u83dc\u5355\u4e2d\u5373\u53ef\u5b8c\u6210\u5c97\u4f4d\u7684\u65b0\u5efa\u3001\u5220\u9664\u3001\u91cd\u547d\u540d\u3001\u590d\u5236\u3001\u7c98\u8d34\u3001\u6392\u5e8f\u3001\u9a8c\u8bc1\u3001\u5bfc\u5165\u548c\u5bfc\u51fa\u64cd\u4f5c\u3002"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d1.png")}))),(0,a.kt)("h2",{id:"\u65b0\u5efa\u5c97\u4f4d"},"\u65b0\u5efa\u5c97\u4f4d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5bfc\u822a\u680f\u2192\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668\u2192\u5c97\u4f4d\u5185\u9009\u62e9\u6211\u7684\u5e94\u7528-",(0,a.kt)("strong",{parentName:"p"},"\u5c97\u4f4d"),"\uff0c\u53f3\u51fb\uff0c\u5728\u5feb\u6377\u83dc\u5355\u680f\u4e2d\u9009\u62e9\u65b0\u5efa\u3002"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d2.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u65b0\u5efa\u7684\u5c97\u4f4d\uff0c\u5728\u53f3\u4fa7\u5c5e\u6027\u680f\u5c97\u4f4d\u914d\u7f6e\u7a97\u53e3\u5185\u914d\u7f6e\uff08\u4f8b\u5982\uff09\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\uff1a\u5c97\u4f4d\u540d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u63cf\u8ff0"),"\uff1a\u5c97\u4f4d\u63cf\u8ff0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6743\u9650"),"\uff1a\u6b64\u5c97\u4f4d\u5bf9\u5e94\u7684\u8f6f\u4ef6\u4f7f\u7528\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u591a\u5c5e\u6027"),"\uff1a\u4e3a\u5c97\u4f4d\u6dfb\u52a0\u66f4\u591a\u5c5e\u6027\u5c5e\u6027\uff0c\u5728",(0,a.kt)("strong",{parentName:"li"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),"\u4e2d",(0,a.kt)("strong",{parentName:"li"},"\u5c97\u4f4d\u5c5e\u6027\u6a21\u677f"),"\u4e2d\u914d\u7f6e\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5c97\u4f4d\u6743\u9650\uff0c\u5355\u51fb",(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u6269\u5c55\u7b26\u53f7\u56fe.png")}),"\u8fdb\u5165\u914d\u7f6e\u6743\u9650\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d3.png")}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"im\u65b9\u6848\u5f00\u53d1\u4e2d\u5fc3"),"\uff1a\u5728\u8be5\u5c97\u4f4d\u7684\u7528\u6237\u5177\u5907im\u5f00\u53d1\u4e2d\u5fc3\u7684\u767b\u5f55\u6743\u9650\uff0c\u53ef\u5728\u5f00\u53d1\u4e2d\u5fc3\u521b\u5efa\u3001\u914d\u7f6e\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"im\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3"),"\uff1a\u5177\u5907imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u7684\u95e8\u6237\u7f51\u7ad9\u767b\u5f55\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"im\u79fb\u52a8\u5de5\u4f5c\u7ad9"),"\uff1a\u79fb\u52a8\u7ec8\u7aef\u7684\u7528\u6237\u767b\u5f55\u6743\u9650\uff1a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"im\u7cfb\u7edf\u7ba1\u7406\u4e2d\u5fc3"),"\uff1a\u7ba1\u7406\u6574\u4e2a\u7cfb\u7edf\u7684\u6838\u5fc3\u6570\u636e\u5e93\uff0c\u652f\u6301\u914d\u7f6e\u548c\u8fd0\u884c\u7684\u6570\u636e\u7684\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"im\u6743\u9650\u7cfb\u7edf"),"\uff1a\u5177\u5907\u8bbe\u7f6e\u6743\u9650\u5206\u914d\u7684\u6743\u9650\u3002")))),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u6ce8\u610f.png")}),"**\u6ce8\u610f**\uff1a\u6743\u9650\u914d\u7f6e\u4ec5\u5728**\u89e3\u51b3\u65b9\u6848**\u542f\u7528\u4e86\u5b89\u5168\u4ee5\u540e\u6709\u6548\u3002",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9009\u4e2d\u89e3\u51b3\u65b9\u6848\u540d\uff0c\u5728\u5c5e\u6027\u680f\u52fe\u9009\u542f\u7528\u5b89\u5168\uff0c\u8f93\u5165\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\u540d\u53ca\u5bc6\u7801\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d4.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u7528\u4e86\u5b89\u5168\u7684\u89e3\u51b3\u65b9\u6848\u5728\u542f\u52a8\u89e3\u51b3\u65b9\u6848\u5f00\u53d1\u4e2d\u5fc3\u65f6\uff0c\u5c06\u5f39\u51fa\u767b\u5f55\u9a8c\u8bc1\u5bf9\u8bdd\u6846\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d5.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u66f4\u591a\u5c5e\u6027\u5355\u51fb",(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u6269\u5c55\u7b26\u53f7\u56fe.png")}),"\u8fdb\u5165\u66f4\u591a\u5c5e\u6027\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5c97\u4f4d6.png")}))),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u6ce8\u610f.png")}),"**\u6ce8\u610f**\uff1a\u66f4\u591a\u5c5e\u6027\u662f\u4e0d\u80fd\u5728\u6b64\u76f4\u63a5\u914d\u7f6e\u7684\uff0c\u9700\u8981\u524d\u5f80**\u5217\u8868\u7ba1\u7406\u5668-\u5168\u5c40\u5c5e\u6027\u6a21\u677f-\u5c97\u4f4d\u5c5e\u6027\u6a21\u677f**\u4e2d\u6dfb\u52a0\u3002")}g.isMDXComponent=!0}}]);