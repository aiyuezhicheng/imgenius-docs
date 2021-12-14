"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[29534],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):E(E({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,f=l["".concat(p,".").concat(m)]||l[m]||s[m]||o;return r?n.createElement(f,E(E({ref:t},c),{},{components:r})):n.createElement(f,E({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,E=new Array(o);E[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,E[1]=i;for(var u=2;u<o;u++)E[u]=r[u];return n.createElement.apply(null,E)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},44996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return E}});var n=r(52263),a=r(13919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,E=o.forcePrependBaseUrl,i=void 0!==E&&E,p=o.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(i)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+c:c}(o,r,e,t)}}}function E(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},44129:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),E=(r(44996),["components"]),i={},p=void 0,u={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0",id:"version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f01\u4e1a\u5b9e\u9645\u751f\u4ea7\u6d3b\u52a8\u6d89\u53ca\u7684\u8bbe\u5907\u8d44\u4ea7\u3001\u751f\u4ea7\u8f6e\u73ed\u5236\u5ea6\u3001\u5217\u8868\u7c7b\u578b\u7684\u6570\u636e\u3001\u4f7f\u7528\u7684\u5de5\u7a0b\u5355\u4f4d\u7b49\u6570\u636e\u4f7f\u7528\u5217\u8868\u7ba1\u7406\u5668\u6765\u9884\u8bbe\u5e76\u8fdb\u884c\u7ba1\u7406\uff0c\u8fd9\u4e9b\u9884\u8bbe\u6570\u636e\u5c06\u7528\u4e8e\u89e3\u51b3\u65b9\u6848\u7684\u5f00\u53d1\uff0c\u5217\u8868\u7ba1\u7406\u5668\u5c06\u5176\u5206\u5c5e\u4e3a\u4e03\u4e2a\u7c7b\u522b\uff1a\u8d44\u4ea7\u3001\u8d44\u4ea7\u7c7b\u522b\u3001\u8f6e\u73ed\u3001\u81ea\u5b9a\u4e49\u5217\u8868\u3001\u4f8b\u5916\u7b49\u7ea7\u3001\u5de5\u7a0b\u5355\u4f4d\u3001\u9644\u4ef6\u3001\u5168\u5c40\u5c5e\u6027\u6a21\u677f\u3002",source:"@site/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u6982\u8ff0.md",tags:[],version:"4.0.0",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-4.0.0/someSidebar",previous:{title:"\u89e3\u51b3\u65b9\u6848\u8bbe\u7f6e",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u89e3\u51b3\u65b9\u6848\u8bbe\u7f6e/\u89e3\u51b3\u65b9\u6848\u8bbe\u7f6e"},next:{title:"\u81ea\u5b9a\u4e49\u5217\u8868",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u81ea\u5b9a\u4e49\u5217\u8868"}},c=[],s={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,E);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f01\u4e1a\u5b9e\u9645\u751f\u4ea7\u6d3b\u52a8\u6d89\u53ca\u7684\u8bbe\u5907",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u3001\u751f\u4ea7",(0,o.kt)("strong",{parentName:"p"},"\u8f6e\u73ed"),"\u5236\u5ea6\u3001\u5217\u8868\u7c7b\u578b\u7684\u6570\u636e\u3001\u4f7f\u7528\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5de5\u7a0b\u5355\u4f4d"),"\u7b49\u6570\u636e\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u5217\u8868\u7ba1\u7406\u5668"),"\u6765\u9884\u8bbe\u5e76\u8fdb\u884c\u7ba1\u7406\uff0c\u8fd9\u4e9b\u9884\u8bbe\u6570\u636e\u5c06\u7528\u4e8e\u89e3\u51b3\u65b9\u6848\u7684\u5f00\u53d1\uff0c\u5217\u8868\u7ba1\u7406\u5668\u5c06\u5176\u5206\u5c5e\u4e3a\u4e03\u4e2a\u7c7b\u522b\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u3001\u8d44\u4ea7\u7c7b\u522b\u3001\u8f6e\u73ed\u3001\u81ea\u5b9a\u4e49\u5217\u8868\u3001\u4f8b\u5916\u7b49\u7ea7\u3001\u5de5\u7a0b\u5355\u4f4d\u3001\u9644\u4ef6\u3001\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E8%B5%84%E4%BA%A7"},"\u8d44\u4ea7"),"\uff09\uff1a\u751f\u4ea7\u6d3b\u52a8\u4e2d\u7528\u5230\u7684\u76f8\u5173\u8bbe\u5907\u6216\u8005\u903b\u8f91\u8bbe\u5907\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E8%B5%84%E4%BA%A7%E7%B1%BB%E5%88%AB"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff09\uff1a\u5c06\u6709\u76f8\u540c\u73b0\u573a\u4f5c\u4e1a\u8981\u6c42\u7684\u8d44\u4ea7\u5f52\u4e3a\u4e00\u4e2a\u8d44\u4ea7\u7c7b\u522b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u8f6e\u73ed"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E8%BD%AE%E7%8F%AD"},"\u8f6e\u73ed"),"\uff09\uff1a\u7528\u4e8e\u5236\u5b9a\u4f01\u4e1a\u7684\u8f6e\u73ed\u5236\u5ea6\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u5217\u8868"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%97%E8%A1%A8"},"\u81ea\u5b9a\u4e49\u5217\u8868"),"\uff09\uff1a\u6dfb\u52a0\u7684\u5217\u8868\u6570\u636e\u5c06\u51fa\u73b0\u5728\u624b\u6301\u7ec8\u7aef\u4e0a\u7684\u76f8\u5173\u4f5c\u4e1a\u4e2d\uff0c\u4f9b\u64cd\u4f5c\u5458\u5728\u73b0\u573a\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u4f8b\u5916\u7b49\u7ea7"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E4%BE%8B%E5%A4%96%E7%AD%89%E7%BA%A7"},"\u4f8b\u5916\u7b49\u7ea7"),"\uff09\uff1a\u7528\u6765\u9884\u8bbe\u4f8b\u5916\u7b49\u7ea7\u5217\u8868\uff0c\u53ef\u7528\u4e8e\u4f5c\u4e1a\u7ba1\u7406\u5668\u914d\u7f6e\u4f5c\u4e1a\u9879\u903b\u8f91\uff0c\u4f5c\u4e3a\u5173\u8054\u4f8b\u5916\u7b49\u7ea7\u7684\u5907\u9009\u9879\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5de5\u7a0b\u5355\u4f4d"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E5%B7%A5%E7%A8%8B%E5%8D%95%E4%BD%8D"},"\u5de5\u7a0b\u5355\u4f4d"),"\uff09\uff1a\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\u7528\u4e8e\u9884\u8bbe\u5de5\u7a0b\u5355\u4f4d\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u9644\u4ef6"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E9%99%84%E4%BB%B6"},"\u9644\u4ef6"),"\uff09\uff1a\u7528\u4e8e\u6dfb\u52a0\u9644\u4ef6\uff0c\u53ef\u4ee5\u8d77\u5230\u6307\u5bfc\u73b0\u573a\u64cd\u4f5c\u7684\u4f5c\u7528\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),"\uff08\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0/%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C/%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%99%A8/%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E6%A8%A1%E6%9D%BF"},"\u5168\u5c40\u5c5e\u6027\u6a21\u677f"),"\uff09\uff1a\u53ef\u4ee5\u7528\u5230\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u6a21\u677f\uff0c\u6d41\u7a0b\u8868\u8fbe\u5f0f\u4e2d\u3002"))))}l.isMDXComponent=!0}}]);