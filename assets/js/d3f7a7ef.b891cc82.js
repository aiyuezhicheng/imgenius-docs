"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[76744],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=i,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},44996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(52263),i=r(13919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,l=void 0!==o&&o,u=a.absolute,p=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+c:c}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},37485:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=r(44996),l=["components"],u={},p=void 0,c={unversionedId:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875",id:"version-4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u4e3b\u9875",description:"\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u4e3b\u9875\u5185\u5bb9\uff0c\u5176\u7f3a\u7701\u4e3b\u9875\u7684\u5185\u5bb9\u662f\u201c\u6211\u7684\u4f5c\u4e1a\u201d\uff0c\u5217\u51fa\u4e86\u4e0e\u5f53\u524d\u7528\u6237\u76f8\u5173\u7684\u6240\u6709\u6d3b\u52a8\u4e2d\u7684\u4f5c\u4e1a\u7ec4\u3002\u8fd9\u4e9b\u4f5c\u4e1a\u7ec4\u8fd8\u5728\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6d41\u8f6c\uff0c\u5e76\u672a\u7ed3\u675f\u5f52\u6863\u3002\u6240\u6709\u5f52\u6863\u7684\u4f5c\u4e1a\u7ec4\u4e0d\u5728\u8fd9\u91cc\u5217\u51fa\uff0c\u7528\u6237\u53ef\u53bb\u201c\u62a5\u8868\u201d\u4e2d\u67e5\u8be2\u201c\u5f52\u6863\u4f5c\u4e1a\u7ec4\u201d\u7684\u8be6\u60c5\u3002",source:"@site/versioned_docs/version-4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875.md",sourceDirName:"\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef",slug:"/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875",permalink:"/docs/4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u81ea\u5b9a\u4e49\u4e3b\u9875.md",tags:[],version:"4.0.3",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-4.0.3/someSidebar",previous:{title:"\u767b\u5f55",permalink:"/docs/4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u767b\u5f55"},next:{title:"\u7ba1\u7406\u5bfc\u822a\u680f",permalink:"/docs/4.0.3/\u7528\u6237\u4f7f\u7528\u624b\u518c/\u7f51\u9875\u7aef/\u7ba1\u7406\u5bfc\u822a\u680f"}},m=[{value:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9875",id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9875",children:[],level:2}],s={toc:m};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f01\u4e1a\u8fd0\u8425\u4e2d\u5fc3\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u4e3b\u9875\u5185\u5bb9\uff0c\u5176\u7f3a\u7701\u4e3b\u9875\u7684\u5185\u5bb9\u662f\u201c\u6211\u7684\u4f5c\u4e1a\u201d\uff0c\u5217\u51fa\u4e86\u4e0e\u5f53\u524d\u7528\u6237\u76f8\u5173\u7684\u6240\u6709\u6d3b\u52a8\u4e2d\u7684\u4f5c\u4e1a\u7ec4\u3002\u8fd9\u4e9b\u4f5c\u4e1a\u7ec4\u8fd8\u5728\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6d41\u8f6c\uff0c\u5e76\u672a\u7ed3\u675f\u5f52\u6863\u3002\u6240\u6709\u5f52\u6863\u7684\u4f5c\u4e1a\u7ec4\u4e0d\u5728\u8fd9\u91cc\u5217\u51fa\uff0c\u7528\u6237\u53ef\u53bb\u201c\u62a5\u8868\u201d\u4e2d\u67e5\u8be2\u201c\u5f52\u6863\u4f5c\u4e1a\u7ec4\u201d\u7684\u8be6\u60c5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5df2\u521b\u5efa:\u5f53\u524d\u7528\u6237\u5df2\u7ecf\u521b\u5efa\u7684\u8ba1\u5212")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5df2\u8ba1\u5212:\u7531\u5f53\u524d\u7528\u6237\u8fdb\u884c\u4e86\u8ba1\u5212\u5e76\u521b\u5efa\u4e86\u7684\u4f5c\u4e1a\u7ec4\u53ca\u76f8\u5173\u6982\u8981\u4fe1\u606f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f85\u6267\u884c:\u76ee\u524d\u9700\u8981\u5f53\u524d\u7528\u6237\u6267\u884c\u7684\u4f5c\u4e1a\u7ec4\u4ee5\u53ca\u76f8\u5173\u6982\u8981\u4fe1\u606f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5df2\u6267\u884c:\u7531\u5f53\u524d\u7528\u6237\u5728\u624b\u6301\u7ec8\u7aef\u4e0a\u6267\u884c\u5e76\u540c\u6b65\u56de\u4f20\u4e86\u7684\u4f5c\u4e1a\u7ec4\u53ca\u76f8\u5173\u6982\u8981\u4fe1\u606f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f85\u5ba1\u6838:\u76ee\u524d\u9700\u8981\u5f53\u524d\u7528\u6237\u8fdb\u884c\u5ba1\u6838\u64cd\u4f5c\u7684\u4f5c\u4e1a\u7ec4\u53ca\u76f8\u5173\u6982\u8981\u4fe1\u606f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5df2\u5ba1\u6838:\u7531\u5f53\u524d\u7528\u6237\u5ba1\u6838\u4e86\u4f46\u8fd8\u672a\u7ed3\u675f\u7684\u4f5c\u4e1a\u7ec4\u53ca\u76f8\u5173\u6982\u8981\u4fe1\u606f"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye1.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53f3\u4e0a\u89d2\u56db\u4e2a\u6309\u94ae\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7ba1\u7406\u81ea\u5b9a\u4e49\u9762\u677f\uff0c\u70b9\u51fb\u53ef\u4ee5\u9009\u62e9\u8fdb\u5165\u5df2\u4fdd\u5b58\u7684\u4e3b\u9875\u9762\u677f\uff0c\u4e3a\u5df2\u4fdd\u5b58\u9762\u677f\u91cd\u547d\u540d\uff0c\u5220\u9664\u5df2\u4fdd\u5b58\u7684\u9762\u677f\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye2.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53e6\u5b58\u4e3a\u81ea\u5b9a\u4e49\u9762\u677f\uff0c\u5373\u5c06\u5f53\u524d\u4e3b\u9875\u5b58\u4e3a\u81ea\u5b9a\u4e49\u9762\u677f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5168\u5c4f\u663e\u793a\uff0c\u5c06\u5f53\u524d\u4e3b\u9875\u5168\u5c4f\u663e\u793a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u53ef\u4ee5\u81ea\u7531\u7f16\u8f91\u5f53\u524d\u4e3b\u9875\uff0c\u7f16\u8f91\u5b8c\u6210\u540e\u9000\u51fa\u53e6\u5b58\u5373\u53ef\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye3.png")}))))),(0,a.kt)("h2",{id:"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9875"},"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9875"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\u540e\uff0c\u70b9\u51fb\u4e3b\u9875\u5f53\u4e2d\u7684\u201c\u7530\u201d\u5b57\u6837\u6309\u94ae\uff0c\u5373\u53ef\u6dfb\u52a0\u884c\uff0c\u52fe\u9009\u4e0a\u6dfb\u52a0\u6807\u9898\u680f\u540e\uff0c\u53ef\u9009\u62e9\u6587\u672c\u683c\u5f0f\u6216html\u683c\u5f0f\uff0chtml\u683c\u5f0f\u6709\u9ed8\u8ba4\u6837\u4f8b\u53ef\u4f9b\u9009\u62e9\u4fee\u6539\u3002"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye4.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u884c\u4e2d\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e0a\u79fb\u3001\u4e0b\u79fb\u3001\u7f16\u8f91\u884c\u3001\u6dfb\u52a0\u5c0f\u90e8\u4ef6\u548c\u5220\u9664\u7684\u64cd\u4f5c\u3002\u4e0a\u4e0b\u79fb\u53ef\u4ee5\u6539\u53d8\u6b64\u884c\u5728\u4e3b\u9875\u4e2d\u663e\u793a\u7684\u4f4d\u7f6e\uff0c\u7f16\u8f91\u884c\u4f1a\u5f39\u51fa\u6dfb\u52a0\u884c\u65f6\u7684\u7a97\u53e3\u7528\u4ee5\u4fee\u6539\u884c\u8bbe\u7f6e\uff0c\u6dfb\u52a0\u5c0f\u90e8\u4ef6\u5206\u4e3a\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u548c\u5185\u7f6e\u5c0f\u90e8\u4ef6\uff0c\u53ef\u4ee5\u5728\u6b64\u884c\u4e2d\u6dfb\u52a0\u5404\u7c7b\u5217\u6570\u4e3a1-12\u6574\u6570\u7684\u5c0f\u90e8\u4ef6\uff0c\u5728\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u4e2d\u9664\u4e86\u5217\u4e4b\u5916\uff0c\u90fd\u63d0\u4f9b\u9ed8\u8ba4\u6837\u4f8b\uff0c\u70b9\u51fb\u6837\u4f8b\u5373\u53ef\uff0c\u53ef\u81ea\u7531\u4fee\u6539\uff0c\u884c\u5217\u4e4b\u95f4\u53ef\u65e0\u9650\u6dfb\u52a0\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye5.png")})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5185\u7f6e\u5c0f\u90e8\u4ef6"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye6.png")})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6548\u679c\u56fe\uff1a"),(0,a.kt)("img",{alt:" ",src:(0,o.Z)("docimg/zhuye7.png")}))))}f.isMDXComponent=!0}}]);