"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[37984],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=i,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},44996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return a}});var n=r(52263),i=r(13919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(44996),u=["components"],c={},l=void 0,p={unversionedId:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd",id:"version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd",isDocsHomePage:!1,title:"\u7ba1\u7406\u5458\u529f\u80fd",description:"\u7ba1\u7406\u5458\u529f\u80fd\u662f\u63d0\u4f9b\u7ba1\u7406\u5458\u67e5\u770b\u548c\u7ba1\u7406\u7528\u6237\u76f8\u5173\u4fe1\u606f\uff0c\u5177\u4f53\u5206\u4e3a\uff1a\u65e5\u5fd7\u4e3b\u9898\u3001\u4f5c\u4e1a\u7ec4\u7ef4\u62a4\u3001\u8d44\u4ea7\u4f4d\u7f6e\u7ef4\u62a4\u3001\u7cfb\u7edf\u6269\u5c55\u7ba1\u7406\u3001\u6d88\u606f\u7c7b\u578b\u7ba1\u7406\u3001\u6743\u9650\u8bbe\u7f6e\u3001\u7f51\u7ad9\u8bbe\u7f6e\u3001\u81ea\u5b9a\u4e49\u5bfc\u822a\u548c\u6d88\u606f\u8ba2\u9605\u7ba1\u7406\u3002",source:"@site/versioned_docs/version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd.md",sourceDirName:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef",slug:"/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd",permalink:"/docs/3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5458\u529f\u80fd.md",tags:[],version:"3.8.2",lastUpdatedAt:1620717348,formattedLastUpdatedAt:"5/11/2021",frontMatter:{}},f=[],s={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u529f\u80fd\u662f\u63d0\u4f9b\u7ba1\u7406\u5458\u67e5\u770b\u548c\u7ba1\u7406\u7528\u6237\u76f8\u5173\u4fe1\u606f\uff0c\u5177\u4f53\u5206\u4e3a\uff1a\u65e5\u5fd7\u4e3b\u9898\u3001\u4f5c\u4e1a\u7ec4\u7ef4\u62a4\u3001\u8d44\u4ea7\u4f4d\u7f6e\u7ef4\u62a4\u3001\u7cfb\u7edf\u6269\u5c55\u7ba1\u7406\u3001\u6d88\u606f\u7c7b\u578b\u7ba1\u7406\u3001\u6743\u9650\u8bbe\u7f6e\u3001\u7f51\u7ad9\u8bbe\u7f6e\u3001\u81ea\u5b9a\u4e49\u5bfc\u822a\u548c\u6d88\u606f\u8ba2\u9605\u7ba1\u7406\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u4e3b\u9898\uff1a\u9700\u8981\u4ec0\u4e48\u65e5\u5fd7\u4e3b\u9898\u5728\u6b64\u914d\u7f6e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f5c\u4e1a\u7ec4\u7ef4\u62a4\uff1a\u9875\u9762\u63d0\u4f9b\u5220\u9664\u9519\u8bef\u6216\u4e0d\u9700\u8981\u7684\u4f5c\u4e1a\u7ec4\uff0c\u5bfc\u51fa\u4f5c\u4e1a\u7ec4\u4fe1\u606f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8d44\u4ea7\u4f4d\u7f6e\u7ef4\u62a4\uff1a\u7ef4\u62a4\u5728\u5730\u56fe\u4e2d\u8d44\u4ea7\u7684\u4f4d\u7f6e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u6269\u5c55\u7ba1\u7406\uff1a\u5728\u6b64\u914d\u7f6e\u7528\u6237\u4e2a\u6027\u5316\u7684\u62a5\u8868\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6d88\u606f\u7c7b\u578b\u7ba1\u7406\uff1a\u914d\u7f6e\u4ec0\u4e48\u7c7b\u578b\u7684\u6d88\u606f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6743\u9650\u8bbe\u7f6e\uff1a\u8bbe\u7f6e\u5e93\u5b58\u548c\u77e5\u8bc6\u5e93\u7684\u76f8\u5173\u6743\u9650\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7f51\u7ad9\u8bbe\u7f6e\uff1a\u914d\u7f6e\u5e93\u5b58\u6743\u9650\u548c\u77e5\u8bc6\u5e93\u6743\u9650\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5bfc\u822a\uff1a\u7f51\u7ad9\u5bfc\u822a\u53ef\u4ee5\u5728\u6b64\u81ea\u5b9a\u4e49\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6d88\u606f\u8ba2\u9605\u7ba1\u7406\uff1a\u7ba1\u7406\u4eba\u5458\u5bf9\u6d88\u606f\u8ba2\u9605\u7684\u7c7b\u578b\u548c\u65b9\u5f0f\u3002"),(0,o.kt)("img",{alt:" ",src:(0,a.Z)("docimg/guanliyuan.png")}))))}m.isMDXComponent=!0}}]);