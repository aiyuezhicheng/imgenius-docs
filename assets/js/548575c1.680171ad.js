"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[35978],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=i,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},44996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return l}});var n=r(52263),i=r(13919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,l=a.forcePrependBaseUrl,u=void 0!==l&&l,o=a.absolute,p=void 0!==o&&o;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+c:c}(a,r,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},37239:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),l=r(44996),u=["components"],o={},p=void 0,c={unversionedId:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7",id:"version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7",isDocsHomePage:!1,title:"\u65e5\u5fd7",description:"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u767b\u5f55im\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\uff0c\u5e94\u7528\u65e5\u5fd7\u9875\u9762\u53ef\u4ee5\u6d4f\u89c8\u3001\u67e5\u8be2\u3001\u53d1\u5e03\u57fa\u4e8e\u8d44\u4ea7\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\u5de5\u7a0b\u5e08\u548c\u64cd\u4f5c\u4eba\u5458\u901a\u8fc7\u65e5\u5fd7\u5b9e\u73b0\u751f\u4ea7\u4fe1\u606f\u7684\u4ea4\u4e92\uff0c\u7a81\u53d1\u4e8b\u4ef6\u7684\u5b9e\u65f6\u5904\u7f6e\u4ee5\u53ca\u4ea4\u63a5\u73ed\u7b49\u751f\u4ea7\u4e8b\u4ef6\u7684\u5907\u5fd8\u3002",source:"@site/versioned_docs/version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7.md",sourceDirName:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef",slug:"/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7",permalink:"/docs/3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u65e5\u5fd7.md",tags:[],version:"3.8.2",lastUpdatedAt:1619677421,formattedLastUpdatedAt:"4/29/2021",frontMatter:{},sidebar:"version-3.8.2/someSidebar",previous:{title:"\u5206\u6790",permalink:"/docs/3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u5206\u6790"},next:{title:"\u77e5\u8bc6\u5e93",permalink:"/docs/3.8.2/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u77e5\u8bc6\u5e93"}},m=[{value:"\u65b0\u5efa\u65e5\u5fd7",id:"\u65b0\u5efa\u65e5\u5fd7",children:[],level:2},{value:"\u65e5\u5fd7\u5e94\u7528",id:"\u65e5\u5fd7\u5e94\u7528",children:[],level:2},{value:"\u65e5\u5fd7\u7b5b\u9009\u5668",id:"\u65e5\u5fd7\u7b5b\u9009\u5668",children:[],level:2},{value:"\u5bfc\u822a\u680f",id:"\u5bfc\u822a\u680f",children:[],level:2}],s={toc:m};function f(e){var t=e.components,r=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u767b\u5f55im\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\uff0c\u5e94\u7528\u65e5\u5fd7\u9875\u9762\u53ef\u4ee5\u6d4f\u89c8\u3001\u67e5\u8be2\u3001\u53d1\u5e03\u57fa\u4e8e\u8d44\u4ea7\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\u5de5\u7a0b\u5e08\u548c\u64cd\u4f5c\u4eba\u5458\u901a\u8fc7\u65e5\u5fd7\u5b9e\u73b0\u751f\u4ea7\u4fe1\u606f\u7684\u4ea4\u4e92\uff0c\u7a81\u53d1\u4e8b\u4ef6\u7684\u5b9e\u65f6\u5904\u7f6e\u4ee5\u53ca\u4ea4\u63a5\u73ed\u7b49\u751f\u4ea7\u4e8b\u4ef6\u7684\u5907\u5fd8\u3002"),(0,a.kt)("h2",{id:"\u65b0\u5efa\u65e5\u5fd7"},"\u65b0\u5efa\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u5165imgenius\u4f01\u4e1a\u79fb\u52a8\u73b0\u573a\u4f5c\u4e1a\u7ba1\u7406\u7cfb\u7edf\uff0c\u7528\u6237\u767b\u5f55im\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\u540e\uff0c\u9009\u62e9\u65e5\u5fd7\u9875\u9762\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,l.Z)("docimg/rizhi1.png")}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u65e5\u5fd7"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u53ea\u9700\u8981\u5728\u65e5\u5fd7\u680f\u8f93\u5165\u65e5\u5fd7\u5185\u5bb9\uff0c\u5b8c\u6210\u540e\u5355\u51fb\u53d1\u5e03\u5373\u53ef\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u8fd8\u53ef\u4ee5\u4e3a\u65e5\u5fd7\u9009\u62e9\u4e00\u4e2a\u8d44\u4ea7\uff0c\u4fbf\u4e8e\u7528\u6237\u67e5\u8be2\u65e5\u5fd7\u65f6\u8fdb\u884c\u7b5b\u9009\uff0c\u9009\u62e9\u8d44\u4ea7\u65f6\uff0c\u5728\u53f3\u8fb9\u7b5b\u9009\u5668\u680f\u2014\u8d44\u4ea7\u4e2d\uff0c\u53cc\u51fb\u9700\u8981\u9009\u62e9\u7684\u8d44\u4ea7\uff08\u9f20\u6807\u79fb\u52a8\u81f3\u8d44\u4ea7\u65f6\u5e95\u8272\u4f1a\u53d8\u8272\uff0c\u5728\u53d8\u8272\u6761\u4e0a\u4efb\u610f\u4f4d\u7f6e\u53cc\u51fb\u5373\u53ef\uff09"),(0,a.kt)("img",{alt:" ",src:(0,l.Z)("docimg/rizhi2.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u82e5\u9700\u8981\u53d6\u6d88\u9009\u62e9\u7684\u8d44\u4ea7\uff0c\u70b9\u51fb\u5220\u9664\u8d44\u4ea7\u6309\u94ae\u5373\u53ef\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u56de\u590d\u65e5\u5fd7"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u5bf9\u76f8\u5e94\u7684\u65e5\u5fd7\u4f7f\u7528\u56de\u590d\u529f\u80fd\uff0c\u5355\u51fb\u56de\u590d\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,l.Z)("docimg/rizhi3.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u65e5\u5fd7\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u56de\u590d\u7684\u5185\u5bb9\uff0c\u5b8c\u6210\u540e\u53d1\u5e03\u5373\u53ef\u3002"))))))),(0,a.kt)("h2",{id:"\u65e5\u5fd7\u5e94\u7528"},"\u65e5\u5fd7\u5e94\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u5e94\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u65e5\u5fd7\u641c\u7d22\u529f\u80fd\uff0c\u5bfc\u822a\u680f\u5feb\u6377\u67e5\u8be2\u6765\u51c6\u786e\u5feb\u901f\u7684\u67e5\u627e\u5230\u76f8\u5e94\u7684\u65e5\u5fd7\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u641c\u7d22\u529f\u80fd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728\u641c\u7d22\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u76f8\u5173\u503c\uff0c\u4f8b\u5982\u9700\u8981\u641c\u7d22\u65e5\u5fd7\u7684\u5173\u952e\u5b57\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9009\u62e9\u6309\u5185\u5bb9\uff0c\u6309\u8d44\u4ea7\u7b80\u5355\u540d\u79f0\uff0c\u6309\u8d44\u4ea7\u590d\u5408\u540d\u79f0\uff0c\u6309\u521b\u5efa\u7528\u6237\u8fdb\u884c\u641c\u7d22\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u822a\u680f\u5feb\u6377\u67e5\u8be2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u65e5\u5fd7\u9875\u9762\u7684\u5bfc\u822a\u680f\uff0c\u7528\u6237\u53ef\u4ee5\u9488\u5bf9\u56e2\u961f\u6216\u4e2a\u4eba\u7f16\u8f91\u5e76\u4fdd\u5b58\u7b5b\u9009\u5668\u4e2d\u9884\u9009\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u4f9b\u4eca\u540e\u65b9\u4fbf\u5730\u67e5\u8be2\u3002")))))),(0,a.kt)("h2",{id:"\u65e5\u5fd7\u7b5b\u9009\u5668"},"\u65e5\u5fd7\u7b5b\u9009\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u7b5b\u9009\u5668\u4e2d\u63d0\u4f9b\u4e24\u7c7b\u7b5b\u9009\u6761\u4ef6\uff1a\u521b\u5efa\u65f6\u95f4\u3001\u8d44\u4ea7\u548c\u7ec4\u7ec7\u5355\u5143\u3002\u7b5b\u9009\u5668\u4e3a\u5373\u9009\u5373\u663e\uff0c\u53ea\u8981\u52fe\u9009\u7b5b\u9009\u6761\u4ef6\uff0c\u5728\u5185\u5bb9\u680f\u5c31\u4f1a\u663e\u793a\u76f8\u5e94\u7684\u7b5b\u9009\u7ed3\u679c\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65f6\u95f4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4f5c\u4e1a\u7ec4\u521b\u5efa\u5230\u624b\u6301\u7ec8\u7aef\u7684\u65f6\u95f4\u4e3a\u521b\u5efa\u65f6\u95f4\uff0c\u63d0\u4f9b\u4e00\u4e0b\u65f6\u95f4\u7b5b\u9009\u6761\u4ef6\u3002\u521b\u5efa\u65f6\u95f4\u53ea\u80fd\u4e3a\u5355\u9009\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u4ea7",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ee5SDC\u521b\u5efa\u7684\u8d44\u4ea7\u4e3a\u7b5b\u9009\u6761\u4ef6\uff0c\u8d44\u4ea7\u53ef\u4ee5\u4e3a\u591a\u9009\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u5355\u5143",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ee5SDC\u4e2d\u914d\u7f6e\u7684\u7ec4\u7ec7\u5355\u5143\u4e3a\u7b5b\u9009\u6761\u4ef6\uff0c\u7ec4\u7ec7\u5355\u5143\u53ef\u4ee5\u4e3a\u591a\u9009\u3002")))))),(0,a.kt)("h2",{id:"\u5bfc\u822a\u680f"},"\u5bfc\u822a\u680f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7b5b\u9009\u5668\u4e2d\u9009\u62e9\u76f8\u5e94\u7684\u65f6\u95f4\u3001\u8d44\u4ea7\u548c\u7ec4\u7ec7\u5355\u5143\u540e\uff0c\u56de\u5230\u65e5\u5fd7\u754c\u9762\u5355\u51fb\u53e6\u5b58\u4e3a\uff0c\u51fa\u73b0\u53e6\u5b58\u67e5\u8be2\u6761\u4ef6\u6846\uff0c\u8f93\u5165\u67e5\u8be2\u540d\u4ee5\u53ca\u9009\u62e9\u4fdd\u5b58\u76ee\u5f55\u3002\u5355\u51fb\u4fdd\u5b58\u5b8c\u6210\u3002")))}f.isMDXComponent=!0}}]);