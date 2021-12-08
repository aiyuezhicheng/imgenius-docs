"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[41804],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},44996:function(t,e,r){r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(52263),a=r(13919);function i(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,p=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return e+r;var c=r.startsWith(e)?r:e+r.replace(/^\//,"");return p?t+c:c}(i,r,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},58741:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(44996),l=["components"],u={},p=void 0,c={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f",id:"version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f",isDocsHomePage:!1,title:"\u5168\u5c40\u5c5e\u6027\u6a21\u677f",description:"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u5206\u4e3a\u56db\u7c7b\uff1a\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u6a21\u677f\uff0c\u7ec4\u7ec7\u5355\u5143\u5c5e\u6027\u6a21\u677f\uff0c\u5c97\u4f4d\u5c5e\u6027\u6a21\u677f\uff0c\u7528\u6237\u5c5e\u6027\u6a21\u677f\uff0c\u53ef\u4ee5\u8fd0\u7528\u5230\u76f8\u5e94\u7684\u5c5e\u6027\u4e2d\u4ee5\u53ca\u6d41\u7a0b\u4e2d\u53bb",source:"@site/versioned_docs/version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.3/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u5168\u5c40\u5c5e\u6027\u6a21\u677f.md",tags:[],version:"4.0.3",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-4.0.3/someSidebar",previous:{title:"\u4f8b\u5916\u7b49\u7ea7",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u4f8b\u5916\u7b49\u7ea7"},next:{title:"\u8f6e\u73ed",permalink:"/docs/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8f6e\u73ed"}},m=[{value:"\u65b0\u5efa\u5168\u5c40\u5c5e\u6027\u6a21\u677f",id:"\u65b0\u5efa\u5168\u5c40\u5c5e\u6027\u6a21\u677f",children:[],level:2},{value:"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u5e94\u7528",id:"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u5e94\u7528",children:[],level:2}],s={toc:m};function d(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),"\u5206\u4e3a\u56db\u7c7b\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u6a21\u677f\uff0c\u7ec4\u7ec7\u5355\u5143\u5c5e\u6027\u6a21\u677f\uff0c\u5c97\u4f4d\u5c5e\u6027\u6a21\u677f\uff0c\u7528\u6237\u5c5e\u6027\u6a21\u677f"),"\uff0c\u53ef\u4ee5\u8fd0\u7528\u5230\u76f8\u5e94\u7684\u5c5e\u6027\u4e2d\u4ee5\u53ca\u6d41\u7a0b\u4e2d\u53bb"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5168\u5c40\u5c5e\u6027\u6a21\u677f1.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u6a21\u677f\u5c5e\u6027\u7684\u5c5e\u6027\u6709\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u540d\u79f0\uff1a\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u5206\u4e3a\u5217\u8868\uff0c\u5b57\u7b26\u4e32\u7b49"),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u7701\u503c\uff1a\u9ed8\u8ba4\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u7ec8\u7aef\u540c\u6b65\uff1a\u7ec8\u7aef\u540c\u6b65")))),(0,i.kt)("h2",{id:"\u65b0\u5efa\u5168\u5c40\u5c5e\u6027\u6a21\u677f"},"\u65b0\u5efa\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6839\u636e\u8981\u5efa\u7684\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u7c7b\u578b\uff0c\u9009\u62e9\u76f8\u5e94\u7684\u4f4d\u7f6e\u65b0\u5efa\uff0c\u5982\u9009\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u6a21\u677f"),"\u53f3\u952e\uff0c\u70b9\u51fb\u65b0\u5efa\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5168\u5c40\u5c5e\u6027\u6a21\u677f2.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u53f3\u4fa7\u5c5e\u6027\u6846\u4e2d\u4fee\u6539\u540d\u79f0\u4ee5\u53ca\u8bbe\u7f6e\u6570\u636e\u7c7b\u578b\uff0c\u6dfb\u52a0\u9ed8\u8ba4\u503c\u4ee5\u53ca\u52fe\u4e0a\u7ec8\u7aef\u540c\u6b65\uff0c\u793a\u4f8b\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5217\u8868\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u9a8c\u6536\u662f\u5426\u901a\u8fc7"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5217\u8868"),(0,i.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7/\u4e0d\u901a\u8fc7")))),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5168\u5c40\u5c5e\u6027\u6a21\u677f3.png")}))),(0,i.kt)("h2",{id:"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u5e94\u7528"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u7684\u5e94\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7531",(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u7ec4"),"\u5c5e\u6027\u6a21\u677f\u4e3a\u4f8b\uff0c\u5728",(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u7ec4\u7ba1\u7406\u5668"),"\u9009\u62e9\u4f5c\u4e1a\u7ec4\uff0c\u53cc\u51fb\u6216\u8005\u53f3\u952e\u9009\u62e9\u914d\u7f6e\u5c5e\u6027\uff0c\u5728\u5c5e\u6027\u6846\u4e2d\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u65b0\u589e\u5168\u5c40\u5c5e\u6027"),"\uff0c\u6dfb\u52a0\u4f5c\u4e1a\u7ec4\u6a21\u677f\u5c5e\u6027\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5168\u5c40\u5c5e\u6027\u6a21\u677f4.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u6210\u529f\u70b9\u51fb\u4fdd\u5b58\uff0c\u5982\u56fe\uff1a"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/\u5168\u5c40\u5c5e\u6027\u6a21\u677f5.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7\u5355\u5143\uff0c\u5c97\u4f4d\uff0c\u7528\u6237"),"\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u6dfb\u52a0\u65b9\u5f0f\u540c\u7406\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u6d41\u7a0b\u4e2d\u5982\u4f55\u6dfb\u52a0\u5168\u5c40\u5c5e\u6027\u6a21\u677f\uff0c\u8bf7\u5230",(0,i.kt)("a",{parentName:"p",href:"/docs/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E6%B5%81%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8/%E6%B5%81%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8"},"\u6d41\u7a0b"),"\u67e5\u770b"))))}d.isMDXComponent=!0}}]);