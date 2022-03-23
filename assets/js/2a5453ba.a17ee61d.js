"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[84969],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(r),f=a,k=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13919:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},44996:function(t,e,r){r.d(e,{C:function(){return o},Z:function(){return i}});var n=r(52263),a=r(13919);function o(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,p=o.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return u?t+s:s}(o,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},87345:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(44996),l=["components"],p={},u=void 0,s={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7",id:"version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7",isDocsHomePage:!1,title:"\u8d44\u4ea7",description:"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f7f\u7528\u5217\u8868\u7ba1\u7406\u5668\u7684\u8d44\u4ea7\u9009\u9879\u5361\u6765\u7ba1\u7406\u751f\u4ea7\u6d3b\u52a8\u4e2d\u7684\u76f8\u5173\u8bbe\u5907\u6216\u8005\u903b\u8f91\u8bbe\u5907\u3002\u8d44\u4ea7\u53ef\u4ee5\u5305\u542b\u8d44\u4ea7\uff0c\u8fd9\u4e9b\u8d44\u4ea7\u6570\u636e\u5728\u8d44\u4ea7\u9009\u9879\u5361\u5185\u4ee5\u6811\u72b6\u89c6\u56fe\u7684\u5f62\u5f0f\u5b58\u5728\u3002",source:"@site/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7.md",tags:[],version:"4.0.0",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-4.0.0/someSidebar",previous:{title:"\u8d44\u4ea7\u7c7b\u522b",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u5217\u8868\u7ba1\u7406\u5668/\u8d44\u4ea7\u7c7b\u522b"},next:{title:"\u6982\u8ff0",permalink:"/docs/4.0.0/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u5668/\u6982\u8ff0"}},c=[{value:"\u914d\u7f6e\u8d44\u4ea7",id:"\u914d\u7f6e\u8d44\u4ea7",children:[],level:2},{value:"\u65b0\u5efa\u8d44\u4ea7",id:"\u65b0\u5efa\u8d44\u4ea7",children:[],level:2},{value:"\u914d\u7f6e\u8d44\u4ea7\u5c5e\u6027",id:"\u914d\u7f6e\u8d44\u4ea7\u5c5e\u6027",children:[],level:2}],m={toc:c};function f(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u4e2d\uff0c\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u5217\u8868\u7ba1\u7406\u5668"),"\u7684",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u9009\u9879\u5361\u6765\u7ba1\u7406\u751f\u4ea7\u6d3b\u52a8\u4e2d\u7684\u76f8\u5173\u8bbe\u5907\u6216\u8005\u903b\u8f91\u8bbe\u5907\u3002\u8d44\u4ea7\u53ef\u4ee5\u5305\u542b",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\uff0c\u8fd9\u4e9b",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u6570\u636e\u5728",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u9009\u9879\u5361\u5185\u4ee5\u6811\u72b6\u89c6\u56fe\u7684\u5f62\u5f0f\u5b58\u5728\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u53ef\u4ee5\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u79f0\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u5c5e\u6027"),"\u3002",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u6240\u5c5e",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u7c7b\u522b"),"\u7684\u5c5e\u6027\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7\u5c5e\u6027"),"\u4e2d\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6240\u5c5e",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7\u5355\u5143"),"\u9009\u9879\u5361\u67e5\u770b\u7ba1\u7406\u6b64",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u7684",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u7ec7\u5355\u5143"),"\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u8d44\u4ea7"},"\u914d\u7f6e\u8d44\u4ea7"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5bfc\u822a\u680f\u2192\u5217\u8868\u7ba1\u7406\u5668\u2192\u8d44\u4ea7"),"\u5185\u53f3\u952e",(0,o.kt)("strong",{parentName:"p"},"\u6f14\u793a-\u8d44\u4ea7"),"\uff0c\u5728\u5feb\u6377\u83dc\u5355\u4e2d\u5373\u53ef\u5b8c\u6210",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u7684\u65b0\u5efa\u3001\u5220\u9664\u3001\u91cd\u547d\u540d\u3001\u914d\u7f6e\u5c5e\u6027\u3001\u526a\u5207\u3001\u590d\u5236\u3001\u7c98\u8d34\u3001\u5168\u90e8\u5c55\u5f00\u3001\u5168\u90e8\u6536\u8d77\u3001\u6392\u5e8f\u3001\u9a8c\u8bc1\u3001\u5bfc\u5165\u548c\u5bfc\u51fa\u64cd\u4f5c\u3002"),(0,o.kt)("img",{alt:" ",src:(0,i.Z)("docimg/\u8d44\u4ea71.png")}))),(0,o.kt)("h2",{id:"\u65b0\u5efa\u8d44\u4ea7"},"\u65b0\u5efa\u8d44\u4ea7"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5bfc\u822a\u680f\u2192\u5217\u8868\u7ba1\u7406\u5668\u2192\u8d44\u4ea7"),"\u5185\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u6f14\u793a-\u8d44\u4ea7"),"\uff0c\u53f3\u51fb\uff0c\u5728\u5feb\u6377\u83dc\u5355\u4e2d\u9009\u62e9\u65b0\u5efa\u3002"),(0,o.kt)("img",{alt:" ",src:(0,i.Z)("docimg/\u8d44\u4ea72.png")})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9009\u4e2d\u65b0\u8d44\u4ea7\uff0c\u5728\u53f3\u8fb9\u5c5e\u6027\u680f\u7f16\u8f91\u5404\u5c5e\u6027\u3002",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u53f3\u8fb9\u5c5e\u6027\u6846\u914d\u7f6e\u793a\u4f8b\uff0c\u5982\u56fe\uff1a"),(0,o.kt)("img",{alt:" ",src:(0,i.Z)("docimg/\u8d44\u4ea73.png")}),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u540d"),"\uff1a\u8bbe\u5b9a\u8d44\u4ea7\u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u53f7"),"\uff1a\u8bbe\u5b9a\u8d44\u4ea7\u7f16\u7801\u3002\u6b64\u7f16\u7801\u5728\u9700\u8981\u4f7f\u7528\u73b0\u573a\u624b\u6301\u7ec8\u7aef\u626b\u63cf\u65f6\u4e3a\u8d44\u4ea7\u7684\u6761\u5f62\u7801\u6216RFID\u7f16\u7801\u7b49\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u63cf\u8ff0"),"\uff1a\u8d44\u4ea7\u7684\u76f8\u5173\u8bf4\u660e\u6587\u5b57\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\uff1a\u9009\u62e9\u76f8\u5e94\u7684\u8d44\u4ea7\u7c7b\u522b\u3002\u7a7a\u8868\u793a\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u8d44\u4ea7\u7c7b\u522b\u7684\u8d44\u4ea7\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f4d\u7f6e\u70b9"),"\uff1a\u52fe\u9009\u4f4d\u7f6e\u70b9\uff0c\u53ef\u5c06\u6b64\u8d44\u4ea7\u7684\u4f4d\u7f6e\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u7cfb\u7edf\u7684\u4f4d\u7f6e\u6807\u8bb0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f4d\u7f6e\u540d\u79f0"),"\uff1a\u8d44\u4ea7\u4f4d\u7f6e\u6240\u4ee3\u8868\u7684\u4f4d\u7f6e\u6807\u8bb0\u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u626b\u63cf\u70b9"),"\uff1a\u52fe\u9009\u6b64\u9009\u9879\u8868\u793a\u8d44\u4ea7\u8bbe\u7f6e\u4e86\u6761\u5f62\u7801\u6216RFID\u7f16\u7801\uff0c\u6b64\u7f16\u7801\u5e94\u8be5\u4e0e\u8d44\u4ea7\u53f7\u76f8\u540c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u65e0\u611f\u89e3\u9501\u7cbe\u5ea6\uff08\u5355\u4f4d\u5398\u7c73\uff09"),"\uff1a\u81ea\u52a8\u89e3\u9501\u7684\u7cbe\u5ea6\uff0c\u8fbe\u5230\u8be5\u7cbe\u5ea6\u53ef\u5b9e\u73b0\u81ea\u52a8\u89e3\u9501\u4f5c\u4e1a\u4efb\u52a1\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u8d44\u4ea7\u7c7b\u522b\u5173\u8054\u7269\u6599"),"\uff1a\u5173\u8054\u7269\u6599\u65f6\uff0c\u53ef\u52fe\u9009\u4f7f\u7528\u8be5\u8d44\u4ea7\u7684\u8d44\u4ea7\u7c7b\u522b\u6765\u5173\u8054\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5173\u8054\u7269\u6599"),"\uff1a\u4e3a\u8be5\u8d44\u4ea7\u5173\u8054\u4e0a\u7269\u6599\u3002\u82e5\u52fe\u9009\u4f7f\u7528\u8d44\u4ea7\u7c7b\u522b\u5219\u6ca1\u6709\u6b64\u9009\u9879\u3002")))),(0,o.kt)("h2",{id:"\u914d\u7f6e\u8d44\u4ea7\u5c5e\u6027"},"\u914d\u7f6e\u8d44\u4ea7\u5c5e\u6027"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9009\u4e2d\u67d0",(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7"),"\uff0c\u53f3\u51fb\uff0c\u5728\u5feb\u6377\u83dc\u5355\u680f\u4e2d\u9009\u62e9\u914d\u7f6e\u5c5e\u6027\uff0c\u5728\u4e3b\u5de5\u4f5c\u533a\u51fa\u73b0",(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u5c5e\u6027"),"\u914d\u7f6e\u5bf9\u8bdd\u6846\u3002\u5177\u4f53\u914d\u7f6e\u65b9\u6cd5\u4e0e",(0,o.kt)("strong",{parentName:"li"},"\u8d44\u4ea7\u7c7b\u522b"),"\u5c5e\u6027\u5bf9\u8bdd\u6846\u76f8\u540c\u3002")))}f.isMDXComponent=!0}}]);