"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[70373],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},98254:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),c=["components"],u={},l=void 0,p={unversionedId:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55",id:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55",isDocsHomePage:!1,title:"\u767b\u5f55",description:"* \u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u5728\u7f51\u5740\u680f\u8f93\u5165\u7cfb\u7edf\u670d\u52a1\u5668\u5730\u5740",source:"@site/docs/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55.md",sourceDirName:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef",slug:"/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55",permalink:"/docs/next/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/docs/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55.md",tags:[],version:"current",lastUpdatedAt:1620717348,formattedLastUpdatedAt:"5/11/2021",frontMatter:{},sidebar:"someSidebar",previous:{title:"\u62a5\u8868\u548c\u5206\u6790",permalink:"/docs/next/\u5feb\u901f\u5165\u95e8/\u62a5\u8868\u548c\u5206\u6790"},next:{title:"\u81ea\u5b9a\u4e49\u4e3b\u9875",permalink:"/docs/next/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875"}},s=[],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u5728\u7f51\u5740\u680f\u8f93\u5165\u7cfb\u7edf\u670d\u52a1\u5668\u5730\u5740"),(0,o.kt)("img",{alt:" ",src:(0,a.Z)("docimg/webduan.png")})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7528\u81ea\u5df1\u7684\u767b\u5f55\u540d\u548c\u5bc6\u7801\u767b\u5f55"),(0,o.kt)("img",{alt:" ",src:(0,a.Z)("docimg/webduan1.png")}))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6709\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\u767b\u5f55\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u767b\u5f55\u3002"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u767b\u5f55\u540e\u7684\u9875\u9762\u4e00\u89c8"),(0,o.kt)("img",{alt:" ",src:(0,a.Z)("docimg/webduan2.png")}))))}f.isMDXComponent=!0}}]);