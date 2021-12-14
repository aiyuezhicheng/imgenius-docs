"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[84798],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(r),g=a,k=s["".concat(l,".").concat(g)]||s[g]||m[g]||i;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},44996:function(t,e,r){r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(52263),a=r(13919);function i(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,p=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(p)return e+r;var c=r.startsWith(e)?r:e+r.replace(/^\//,"");return u?t+c:c}(i,r,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},37507:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(44996),p=["components"],l={},u=void 0,c={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b",id:"version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b",isDocsHomePage:!1,title:"\u8d44\u4ea7\u7c7b\u522b",description:"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u5c06\u6709\u76f8\u540c\u73b0\u573a\u4f5c\u4e1a\u8981\u6c42\u7684\u8d44\u4ea7\u5f52\u4e3a\u4e00\u4e2a\u8d44\u4ea7\u7c7b\u522b\u3002\u5728imgenius\u4e2d\u8d44\u4ea7\u7c7b\u522b\u4e0d\u80fd\u5305\u542b\u8d44\u4ea7\u7c7b\u522b\u3002\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7c7b\u522b\u7684\u8d44\u4ea7\u79f0\u4e3a\u6b64\u8d44\u4ea7\u7c7b\u522b\u7684\u76f8\u5173\u8d44\u4ea7\u3002",source:"@site/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b.md",tags:[],version:"4.0.0",lastUpdatedAt:1619677421,formattedLastUpdatedAt:"4/29/2021",frontMatter:{},sidebar:"version-4.0.0/someSidebar",previous:{title:"\u8f6e\u73ed",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8f6e\u73ed"},next:{title:"\u8d44\u4ea7",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7"}},m=[{value:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b",id:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b",children:[],level:2},{value:"\u65b0\u5efa\u8d44\u4ea7\u7c7b\u522b",id:"\u65b0\u5efa\u8d44\u4ea7\u7c7b\u522b",children:[],level:2},{value:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b\u5c5e\u6027",id:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b\u5c5e\u6027",children:[],level:2}],s={toc:m};function g(t){var e=t.components,r=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u5c06\u6709\u76f8\u540c\u73b0\u573a\u4f5c\u4e1a\u8981\u6c42\u7684\u8d44\u4ea7\u5f52\u4e3a\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u3002\u5728imgenius\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u4e0d\u80fd\u5305\u542b",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u3002\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7c7b\u522b\u7684",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u79f0\u4e3a\u6b64",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u7684\u76f8\u5173\u8d44\u4ea7\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u53ef\u4ee5\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u79f0\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u5c5e\u6027\u3002",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u7684\u5c5e\u6027\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230\u76f8\u5173",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u7684\u5c5e\u6027\u4e2d\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b"},"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u5bfc\u822a\u680f\u2192\u5217\u8868\u7ba1\u7406\u5668\u2192\u8d44\u4ea7\u7c7b\u522b"),"\u5185\u53f3\u952e\u6f14\u793a-",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff0c\u5728\u5feb\u6377\u83dc\u5355\u4e2d\u5373\u53ef\u5b8c\u6210",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\u7684\u65b0\u5efa\u3001\u5220\u9664\u3001\u91cd\u547d\u540d\u3001\u914d\u7f6e\u5c5e\u6027\u3001\u590d\u5236\u3001\u7c98\u8d34\u3001\u6392\u5e8f\u3001\u9a8c\u8bc1\u3001\u5bfc\u5165\u548c\u5bfc\u51fa\u64cd\u4f5c\u3002")),(0,i.kt)("h2",{id:"\u65b0\u5efa\u8d44\u4ea7\u7c7b\u522b"},"\u65b0\u5efa\u8d44\u4ea7\u7c7b\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u5bfc\u822a\u680f\u2192\u5217\u8868\u7ba1\u7406\u5668\u2192\u8d44\u4ea7\u7c7b\u522b"),"\u5185\u9009\u62e9\u6f14\u793a-",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff0c\u53f3\u51fb\uff0c\u5728\u5feb\u6377\u83dc\u5355\u9009\u62e9\u65b0\u5efa\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b1.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u65b0\u8d44\u4ea7\u7c7b\u522b"),"\uff0c\u5728\u53f3\u8fb9\u5c5e\u6027\u680f\u4e2d\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u66f4\u6539\u65b0\u5efa\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b\u540d"),"\uff08\u4f8b\u5982\uff1a\u9600\u95e8\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b\u63cf\u8ff0"),"\u6846\u4e2d\u8f93\u5165\u76f8\u5173\u7684\u8bf4\u660e\u6587\u5b57\uff08\u4f8b\u5982\uff1a\u7a7a\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\u5c5e\u6027\u680f",(0,i.kt)("strong",{parentName:"li"},"\u76f8\u5173\u8d44\u4ea7"),"\u4e2d\u53ef\u4ee5\u67e5\u770b\u5c5e\u4e8e\u6b64",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u4ea7"),"\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b2.png")}))),(0,i.kt)("h2",{id:"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b\u5c5e\u6027"},"\u914d\u7f6e\u8d44\u4ea7\u7c7b\u522b\u5c5e\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u4e2d\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff08\u4f8b\u5982\u201c\u9600\u95e8\u201d\uff09\u53f3\u51fb\uff0c\u5728\u5feb\u6377\u83dc\u5355\u4e2d\u9009\u62e9\u914d\u7f6e\u5c5e\u6027\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b3.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fde\u7eed\u5355\u51fb2\u6b21\u65b0\u589e\uff0c\u6dfb\u52a02\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u5c5e\u6027"),"\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b4.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6309\u7167\u4e0b\u56fe\u4f9d\u6b21\u4fee\u6539",(0,i.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u540d"),"\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b5.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6309\u7167\u4e0b\u56fe\u4f9d\u6b21\u4fee\u6539",(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u7c7b\u578b"),"\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b6.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6309\u7167\u4e0b\u56fe\u4fee\u6539",(0,i.kt)("strong",{parentName:"p"},"\u7f3a\u7701\u503c"),"\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b7.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6309\u7167\u4e0b\u56fe\u4fee\u6539",(0,i.kt)("strong",{parentName:"p"},"\u5de5\u7a0b\u5355\u4f4d"),"\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b8.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7ec8\u7aef\u540c\u6b65"),"\u5168\u90e8\u52fe\u9009\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u8d44\u4ea7\u7c7b\u522b9.png")}))))}g.isMDXComponent=!0}}]);