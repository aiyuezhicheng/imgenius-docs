"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[26822],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),E=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=E(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=E(r),f=o,B=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(B,a(a({ref:t},l),{},{components:r})):n.createElement(B,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var E=2;E<i;E++)a[E]=r[E];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,E=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return E?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2068:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return E},toc:function(){return l},default:function(){return s}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=(r(44996),["components"]),u={},c=void 0,E={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0",id:"version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"* \u76ee\u524d\u5728\u65b0\u5efa\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u4f1a\u6709\u56db\u4e2a\u5185\u7f6e\u6a21\u677f\u53ef\u4f9b\u9009\u62e9\uff0c\u5185\u7f6e\u6a21\u677f\u4f1a\u6709\u76f8\u5bf9\u5e94\u7684\u4e00\u4e9b\u9884\u8bbe\u5185\u5bb9\uff0c\u5206\u522b\u4e3a\u57fa\u7840\u6a21\u677f\u3001\u5de1\u68c0\u548c\u7ef4\u4fee\u4f5c\u4e1a\u6a21\u677f\u3001\u8bbe\u5907\u7ba1\u7406\u6a21\u677f\u548c\u5b89\u5168\u4f5c\u4e1a\u6a21\u677f\uff0c\u76f8\u5173\u4ecb\u7ecd\u53ef\u67e5\u770b\uff1a",source:"@site/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0.md",tags:[],version:"4.0.0",lastUpdatedAt:1620717348,formattedLastUpdatedAt:"5/11/2021",frontMatter:{},sidebar:"version-4.0.0/someSidebar",previous:{title:"\u5185\u7f6e\u6d41\u7a0b\u540e\u548c\u7ec8\u7aef\u51fd\u6570",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5185\u7f6e\u6d41\u7a0b\u540e\u548c\u7ec8\u7aef\u51fd\u6570"},next:{title:"\u57fa\u7840\u6a21\u677f",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f"}},l=[],p={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d\u5728\u65b0\u5efa\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u4f1a\u6709\u56db\u4e2a\u5185\u7f6e\u6a21\u677f\u53ef\u4f9b\u9009\u62e9\uff0c\u5185\u7f6e\u6a21\u677f\u4f1a\u6709\u76f8\u5bf9\u5e94\u7684\u4e00\u4e9b\u9884\u8bbe\u5185\u5bb9\uff0c\u5206\u522b\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u57fa\u7840\u6a21\u677f"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u5de1\u68c0\u548c\u7ef4\u4fee\u4f5c\u4e1a\u6a21\u677f"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u7ba1\u7406\u6a21\u677f"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u5b89\u5168\u4f5c\u4e1a\u6a21\u677f"),"\uff0c\u76f8\u5173\u4ecb\u7ecd\u53ef\u67e5\u770b\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E6%A8%A1%E6%9D%BF%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E/%E5%9F%BA%E7%A1%80%E6%A8%A1%E6%9D%BF"},"\u57fa\u7840\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E6%A8%A1%E6%9D%BF%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E/%E5%B7%A1%E6%A3%80%E5%92%8C%E7%BB%B4%E4%BF%AE%E4%BD%9C%E4%B8%9A%E6%A8%A1%E6%9D%BF"},"\u5de1\u68c0\u548c\u7ef4\u4fee\u4f5c\u4e1a\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E6%A8%A1%E6%9D%BF%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E6%A8%A1%E6%9D%BF"},"\u8bbe\u5907\u7ba1\u7406\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E6%A8%A1%E6%9D%BF%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E/%E5%AE%89%E5%85%A8%E4%BD%9C%E4%B8%9A%E6%A8%A1%E6%9D%BF"},"\u5b89\u5168\u4f5c\u4e1a\u6a21\u677f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u4e0d\u9009\u62e9\uff0c\u5219\u4e3a\u7a7a\u6a21\u677f\uff0c\u4e0d\u4f1a\u6709\u9884\u8bbe\u7684\u5185\u5bb9\u3002"))))}s.isMDXComponent=!0}}]);