"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[38365],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return u}});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},74124:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),u=r(44996),a=["components"],c={},l=void 0,p={unversionedId:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811",id:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811",isDocsHomePage:!1,title:"\u4f5c\u4e1a\u6811",description:"\u4f5c\u4e1a\u6811\u5305\u542b\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u5176\u4e0b\u6240\u6709\u4f5c\u4e1a\u548c\u4f5c\u4e1a\u9879\u3002\u8be6\u7ec6\u4fe1\u606f\u5305\u62ec\u8be5\u4f5c\u4e1a\u7ec4\u76f8\u5173\u7684\u6240\u6709\u8fd0\u884c\u4fe1\u606f\uff0c\u6bcf\u4e2a\u6d3b\u52a8\u7684\u7ed3\u679c\uff0c\u73b0\u573a\u4f5c\u4e1a\u7684\u7ed3\u679c\u548c\u4f8b\u5916\uff0c\u5404\u9879\u7684\u914d\u7f6e\u4fe1\u606f\u4ee5\u53ca\u4f5c\u4e1a\u9879\u7684\u5386\u53f2\u6570\u636e\u7b49\u3002",source:"@site/docs/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811.md",sourceDirName:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef",slug:"/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811",permalink:"/docs/next/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/docs/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u4f5c\u4e1a\u6811.md",tags:[],version:"current",lastUpdatedAt:1631873910,formattedLastUpdatedAt:"9/17/2021",frontMatter:{},sidebar:"someSidebar",previous:{title:"\u5ba1\u6838",permalink:"/docs/next/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u5ba1\u6838"},next:{title:"\u62a5\u8868",permalink:"/docs/next/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u62a5\u8868"}},s=[],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f5c\u4e1a\u6811\u5305\u542b\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u5176\u4e0b\u6240\u6709\u4f5c\u4e1a\u548c\u4f5c\u4e1a\u9879\u3002\u8be6\u7ec6\u4fe1\u606f\u5305\u62ec\u8be5\u4f5c\u4e1a\u7ec4\u76f8\u5173\u7684\u6240\u6709\u8fd0\u884c\u4fe1\u606f\uff0c\u6bcf\u4e2a\u6d3b\u52a8\u7684\u7ed3\u679c\uff0c\u73b0\u573a\u4f5c\u4e1a\u7684\u7ed3\u679c\u548c\u4f8b\u5916\uff0c\u5404\u9879\u7684\u914d\u7f6e\u4fe1\u606f\u4ee5\u53ca\u4f5c\u4e1a\u9879\u7684\u5386\u53f2\u6570\u636e\u7b49\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u4e00\u4e2a\u4f5c\u4e1a\u7ec4\uff0c\u5355\u51fb\u4f5c\u4e1a\u7ec4\u540d\u79f0\uff0c\u7cfb\u7edf\u8fdb\u5165\u4f5c\u4e1a\u6811\u754c\u9762\uff0c\u4f5c\u4e1a\u6811\u89c6\u56fe\u63cf\u8ff0\u4e86\u6574\u4e2a\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u5305\u62ec\u4f5c\u4e1a\u6216\u4f5c\u4e1a\u9879\u5b8c\u6210\u72b6\u6001\uff0c\u540d\u79f0\uff0c\u6570\u503c\u4ee5\u53ca\u76f8\u5173\u7684\u4f8b\u5916\uff0c \u4ee5\u53ca\u57fa\u672c\u4fe1\u606f\u548c\u4f5c\u4e1a\u9879\u6570\u4f8b\u5916\u4f5c\u4e1a(\u9879)\u6570\u7684\u53ef\u89c6\u5316\u663e\u793a\uff0c\u7167\u7247\u3001\u89c6\u9891\u4ee5\u53ca\u4fe1\u606f\u8fc7\u6ee4\u548c\u9ad8\u4eae\u663e\u793a\u81ea\u5b9a\u4e49\u4fe1\u606f\u3002\u70b9\u51fb\u8be6\u7ec6\u4fe1\u606f\uff0c\u8fd8\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u4f5c\u4e1a\u7ec4\u7684\u6709\u5173\u4fe1\u606f\u3002"),(0,i.kt)("img",{alt:" ",src:(0,u.Z)("docimg/zuoyeshuxianshi1.png")}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u4fe1\u606f\u4e2d\u5305\u542b\u4e86\u4f5c\u4e1a\u7ec4\u7684\u540d\u79f0\u3001\u5b8c\u6210\u72b6\u6001\u3001\u6267\u884c\u4eba\u3001\u7528\u65f6\u548c\u5f53\u524d\u6240\u5904\u7684\u72b6\u6001\uff0c\u53ef\u4ee5\u67e5\u770b\u6d41\u7a0b\u56fe"),(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u4e1a\u9879\u6570\u4e2d\u5217\u51fa\u4e86\u8ba1\u5212\u3001\u8981\u6c42\u3001\u5b8c\u6210\u8981\u6c42\u3001\u672a\u5b8c\u6210\u8981\u6c42\u548c\u5b8c\u6210\u989d\u5916\u7684\u4f5c\u4e1a\u9879\u6570\uff0c\u4f8b\u5916\u4f5c\u4e1a(\u9879)\u6570\u4e2d\u5217\u51fa\u4e86\u4f8b\u5916\u7b49\u7ea7\u5173\u8054\u7684\u4f5c\u4e1a(\u9879)\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6458\u8981\u4fe1\u606f\u8fc7\u6ee4\u4e2d\u53ef\u4ee5\u70b9\u51fb\u9009\u62e9\u8ba1\u5212\u3001\u8981\u6c42\u3001\u5b8c\u6210\u8981\u6c42\u3001\u672a\u5b8c\u6210\u8981\u6c42\u3001\u5b8c\u6210\u989d\u5916\u7684\u4f5c\u4e1a\u9879\uff0c\u4f8b\u5916\u4f5c\u4e1a(\u9879)\u7684\u4f8b\u5916\u7b49\u7ea7\uff0c\u8d44\u4ea7"),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6846\u4e2d\u53ef\u4ee5\u8f93\u5165\u5173\u952e\u5b57\u8fdb\u884c\u8fc7\u6ee4\u53ea\u663e\u793a\u5305\u542b\u5173\u952e\u5b57\u7684\u4f5c\u4e1a\u9879"),(0,i.kt)("li",{parentName:"ul"},"\u52fe\u9009\u4e0a\u9ad8\u4eae\u663e\u793a\u5219\u4f1a\u5c06\u8fc7\u6ee4\u51fa\u7684\u4f5c\u4e1a\u9879\u8fdb\u884c\u9ad8\u4eae\u663e\u793a\uff0c\u65b9\u4fbf\u67e5\u770b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb\u4f5c\u4e1a\u6811\u5904\u7684\u9009\u62e9\u6846\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u6210\u65f6\u95f4\u7ebf\u89c6\u56fe\uff0c\u5728\u65f6\u95f4\u7ebf\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u6bcf\u4e00\u9879\u4f5c\u4e1a\u6267\u884c\u65f6\u7684\u5177\u4f53\u65f6\u95f4\u548c\u76f8\u5173\u6267\u884c\u4fe1\u606f\u3002"),(0,i.kt)("img",{alt:" ",src:(0,u.Z)("docimg/zuoyeshu3.png")})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728SDC\u8bbe\u7f6e\u4e2d\u65b0\u589e\u4e86\u4f5c\u4e1a\u7ec4\u4e0d\u652f\u6301\u4e0b\u8f7d\u6e90\u6587\u4ef6\u9009\u9879\uff0c\u52fe\u9009\u4e0a\u4e4b\u540e\uff0c\u5728\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u91cc\u4f7f\u7528\u7684word\u548cexcel\u6a21\u677f\u5728EOC\u4e0a\u5bfc\u51fa\u65f6\u4f1a\u81ea\u52a8\u4ee5PDF\u683c\u5f0f\u5bfc\u51fa\uff0c\u5982\u672a\u52fe\u9009\u5219\u8fd8\u662f\u6e90\u6587\u4ef6\u683c\u5f0f\u3002"),(0,i.kt)("img",{alt:" ",src:(0,u.Z)("docimg/zuoyeshudaochupdf.png")}),(0,i.kt)("img",{alt:" ",src:(0,u.Z)("docimg/zuoyeshudaochupdf2.png")}))))}d.isMDXComponent=!0}}]);