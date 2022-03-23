"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[70731],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return c}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),o=m(a),c=r,s=o["".concat(p,".").concat(c)]||o[c]||N[c]||n;return a?l.createElement(s,i(i({ref:t},k),{},{components:a})):l.createElement(s,i({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=o;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},13919:function(e,t,a){function l(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!l(e)}a.d(t,{b:function(){return l},Z:function(){return r}})},44996:function(e,t,a){a.d(t,{C:function(){return n},Z:function(){return i}});var l=a(52263),r=a(13919);function n(){var e=(0,l.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,l){var n=void 0===l?{}:l,i=n.forcePrependBaseUrl,u=void 0!==i&&i,p=n.absolute,m=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(u)return t+a;var k=a.startsWith(t)?a:t+a.replace(/^\//,"");return m?e+k:k}(n,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},90928:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return N},default:function(){return c}});var l=a(83117),r=a(80102),n=(a(67294),a(3905)),i=a(44996),u=["components"],p={},m=void 0,k={unversionedId:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f",id:"version-3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f",isDocsHomePage:!1,title:"\u57fa\u7840\u6a21\u677f",description:"\u5728SDC\u65b0\u5efa\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u7a7a\u767d\u65b9\u6848\uff0c\u5373\u6ca1\u6709\u57fa\u672c\u7684\u4e00\u4e9b\u5e38\u7528\u5185\u5bb9\u3002\u8fd8\u53ef\u4ee5\u9009\u62e9\u6709\u57fa\u672c\u5185\u5bb9\u7684\u57fa\u7840\u6a21\u677f\uff0c\u8fd9\u91cc\u8be6\u7ec6\u8bf4\u660e\u4e00\u4e0b\u57fa\u7840\u6a21\u677f\u76f8\u5173\u3002",source:"@site/versioned_docs/version-3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f.md",sourceDirName:"\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e",slug:"/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f",permalink:"/docs/3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u57fa\u7840\u6a21\u677f.md",tags:[],version:"3.8.2",lastUpdatedAt:1623050777,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"version-3.8.2/someSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u6982\u8ff0"},next:{title:"\u5de1\u68c0\u548c\u7ef4\u4fee\u4f5c\u4e1a\u6a21\u677f",permalink:"/docs/3.8.2/\u7cfb\u7edf\u914d\u7f6e\u624b\u518c/\u6a21\u677f\u8be6\u7ec6\u8bf4\u660e/\u5de1\u68c0\u548c\u7ef4\u4fee\u4f5c\u4e1a\u6a21\u677f"}},N=[{value:"\u5de5\u7a0b\u5355\u4f4d",id:"\u5de5\u7a0b\u5355\u4f4d",children:[],level:2},{value:"\u81ea\u5b9a\u4e49\u5217\u8868",id:"\u81ea\u5b9a\u4e49\u5217\u8868",children:[],level:2},{value:"\u4f8b\u5916\u7b49\u7ea7",id:"\u4f8b\u5916\u7b49\u7ea7",children:[],level:2}],o={toc:N};function c(e){var t=e.components,a=(0,r.Z)(e,u);return(0,n.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728SDC\u65b0\u5efa\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u7a7a\u767d\u65b9\u6848\uff0c\u5373\u6ca1\u6709\u57fa\u672c\u7684\u4e00\u4e9b\u5e38\u7528\u5185\u5bb9\u3002\u8fd8\u53ef\u4ee5\u9009\u62e9\u6709\u57fa\u672c\u5185\u5bb9\u7684\u57fa\u7840\u6a21\u677f\uff0c\u8fd9\u91cc\u8be6\u7ec6\u8bf4\u660e\u4e00\u4e0b\u57fa\u7840\u6a21\u677f\u76f8\u5173\u3002"),(0,n.kt)("img",{alt:" ",src:(0,i.Z)("docimg/jichumuban.png")}),(0,n.kt)("p",null,"\u76f8\u8f83\u4e8e\u7a7a\u767d\u6a21\u677f\uff0c\u57fa\u7840\u6a21\u677f\u4e2d\u7684\u5de5\u7a0b\u5355\u4f4d\u3001\u4f8b\u5916\u7b49\u7ea7\u548c\u81ea\u5b9a\u4e49\u5217\u8868\u4f1a\u5305\u542b\u4e00\u4e9b\u9884\u8bbe\u9879\u3002"),(0,n.kt)("h2",{id:"\u5de5\u7a0b\u5355\u4f4d"},"\u5de5\u7a0b\u5355\u4f4d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6beb\u514b"),(0,n.kt)("li",{parentName:"ul"},"\u514b"),(0,n.kt)("li",{parentName:"ul"},"\u516c\u65a4"),(0,n.kt)("li",{parentName:"ul"},"\u5428"),(0,n.kt)("li",{parentName:"ul"},"\u6beb\u7c73"),(0,n.kt)("li",{parentName:"ul"},"\u5398\u7c73"),(0,n.kt)("li",{parentName:"ul"},"\u7c73"),(0,n.kt)("li",{parentName:"ul"},"\u516c\u91cc"),(0,n.kt)("li",{parentName:"ul"},"\u6beb\u5347"),(0,n.kt)("li",{parentName:"ul"},"\u5347"),(0,n.kt)("li",{parentName:"ul"},"\u7acb\u65b9\u7c73"),(0,n.kt)("li",{parentName:"ul"},"\u7acb\u65b9\u5398\u7c73"),(0,n.kt)("li",{parentName:"ul"},"Bar"),(0,n.kt)("li",{parentName:"ul"},"\u5e15"),(0,n.kt)("li",{parentName:"ul"},"\u516c\u65a4/\u5398\u7c732"),(0,n.kt)("li",{parentName:"ul"},"\u5343\u5e15"),(0,n.kt)("li",{parentName:"ul"},"V"),(0,n.kt)("li",{parentName:"ul"},"\u6beb\u7c73\u6c5e\u67f1"),(0,n.kt)("li",{parentName:"ul"},"AMP"),(0,n.kt)("li",{parentName:"ul"},"A"),(0,n.kt)("li",{parentName:"ul"},"m\xb3/h"),(0,n.kt)("li",{parentName:"ul"},"Kw"),(0,n.kt)("li",{parentName:"ul"},"\u5347/\u79d2"),(0,n.kt)("li",{parentName:"ul"},"\u5347/\u6bcf\u5206\u949f"),(0,n.kt)("li",{parentName:"ul"},"m\xb3"),(0,n.kt)("li",{parentName:"ul"},"\u7acb\u65b9\u7c73/\u6bcf\u5206\u949f"),(0,n.kt)("li",{parentName:"ul"},"mm"),(0,n.kt)("li",{parentName:"ul"},"\u7acb\u65b9\u7c73/\u5c0f\u65f6"),(0,n.kt)("li",{parentName:"ul"},"%"),(0,n.kt)("li",{parentName:"ul"},"KPa"),(0,n.kt)("li",{parentName:"ul"},"\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"mm/s"),(0,n.kt)("li",{parentName:"ul"},"\u4e2a"),(0,n.kt)("li",{parentName:"ul"},"C"),(0,n.kt)("li",{parentName:"ul"},"PH\u503c"),(0,n.kt)("li",{parentName:"ul"},"F"),(0,n.kt)("li",{parentName:"ul"},"\xb5S/cm"),(0,n.kt)("li",{parentName:"ul"},"K"),(0,n.kt)("li",{parentName:"ul"},"Nm\xb3"),(0,n.kt)("li",{parentName:"ul"},"cm"),(0,n.kt)("li",{parentName:"ul"},"\u2103"),(0,n.kt)("li",{parentName:"ul"},"\u03a9"),(0,n.kt)("li",{parentName:"ul"},"LEL%"),(0,n.kt)("li",{parentName:"ul"},"\u2109"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u57f9"),(0,n.kt)("li",{parentName:"ul"},"M\u03a9"),(0,n.kt)("li",{parentName:"ul"},"Kg"),(0,n.kt)("li",{parentName:"ul"},"MPa"),(0,n.kt)("li",{parentName:"ul"},"t"),(0,n.kt)("li",{parentName:"ul"},"kg/min"),(0,n.kt)("li",{parentName:"ul"},"t/hr")),(0,n.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5217\u8868"},"\u81ea\u5b9a\u4e49\u5217\u8868"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bbe\u5907\u72b6\u6001  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u4fee"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u58f0\u97f3\u72b6\u6001"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f02\u54cd"),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u72b6\u6001"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38"),(0,n.kt)("li",{parentName:"ul"},"\u5f02\u5e38"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u662f/\u5426"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u5426"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7ba1\u9053\u72b6\u6001"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7545\u901a"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u7545"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5835\u585e"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6db2\u4f4d\u72b6\u6001"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8d85\u9ad8"),(0,n.kt)("li",{parentName:"ul"},"\u8fc7\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5907\u7528\u68c0\u4fee\u76d8\u8f66"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u4fee"),(0,n.kt)("li",{parentName:"ul"},"\u76d8\u8f66"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9707\u52a8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9707\u52a8\u6b63\u5e38"),(0,n.kt)("li",{parentName:"ul"},"\u9707\u52a8\u5f02\u5e38"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u505c\u6b62\u68c0\u4fee"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u4fee"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u505c\u6b62\u68c0\u4fee\u672a\u6295\u7528"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u4fee"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u6295\u7528"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u68c0\u4fee\u672a\u6295\u7528"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u6295\u7528"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f00\u5173"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00"),(0,n.kt)("li",{parentName:"ul"},"\u5173"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5907\u7528"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u7528"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5907\u7528\u68c0\u4fee\u672a\u6295\u7528\u76d8\u8f66"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u4fee"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u6295\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u76d8\u8f66"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b8c\u6210\u60c5\u51b5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u5b8c\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u672a\u5b8c\u6210"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u8ba4/\u672a\u786e\u8ba4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u786e\u8ba4"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u786e\u8ba4")))),(0,n.kt)("h2",{id:"\u4f8b\u5916\u7b49\u7ea7"},"\u4f8b\u5916\u7b49\u7ea7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u666e\u901a"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f"),(0,n.kt)("li",{parentName:"ul"},"\u8b66\u544a"),(0,n.kt)("li",{parentName:"ul"},"\u4e25\u91cd"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u6545"),(0,n.kt)("li",{parentName:"ul"},"\u5371\u9669")))}c.isMDXComponent=!0}}]);