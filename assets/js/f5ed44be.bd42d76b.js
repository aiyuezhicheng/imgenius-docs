"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[39713],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},69810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(44996),s=["components"],l={},p=void 0,u={unversionedId:"\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e",id:"\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e",isDocsHomePage:!1,title:"RabbitMQ\u5f00\u53d1\u8bf4\u660e",description:"RabbitMQ\u670d\u52a1\u62d3\u5c55\u5f00\u53d1\u662f\u57fa\u4e8e Node.js \u5e73\u53f0\u7684\u4e0b\u7684express\u5f00\u53d1\u6846\u67b6\u642d\u8f7d\u7684\u670d\u52a1\u3002\u4e3b\u8981\u7528\u4e8e\u6355\u6349\u6d41\u7a0b\u8282\u70b9\u524d\u540e\u7684\u4f5c\u4e1a\u7ec4\u4fe1\u606f\uff0c\u4ee5\u53ca\u5bf9\u5176\u903b\u8f91\u7684\u5904\u7406\u53ca\u53d8\u5316",source:"@site/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e.md",sourceDirName:"\u7cfb\u7edf\u6269\u5c55\u6307\u5357",slug:"/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e",permalink:"/docs/next/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/RabbitMQ\u5f00\u53d1\u8bf4\u660e.md",tags:[],version:"current",lastUpdatedAt:1620717326,formattedLastUpdatedAt:"5/11/2021",frontMatter:{},sidebar:"someSidebar",previous:{title:"nodejs\u7a0b\u5e8f\u914d\u7f6e\u6210windows\u670d\u52a1",permalink:"/docs/next/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/nodejs\u7a0b\u5e8f\u914d\u7f6e\u6210windows\u670d\u52a1"},next:{title:"\u53d1\u5e03\u8bb0\u5f55",permalink:"/docs/next/\u53d1\u5e03\u8bf4\u660e/\u53d1\u5e03\u8bb0\u5f55"}},m=[{value:"\u7a0b\u5e8f\u76ee\u5f55",id:"\u7a0b\u5e8f\u76ee\u5f55",children:[],level:2},{value:"\u914d\u7f6e\u53ca\u5f00\u53d1",id:"\u914d\u7f6e\u53ca\u5f00\u53d1",children:[{value:"<strong><em>app.js</em></strong>",id:"appjs",children:[],level:3},{value:"<strong><em>base.js</em></strong>",id:"basejs",children:[],level:3},{value:"<strong><em>message.js</em></strong>",id:"messagejs",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"   RabbitMQ\u670d\u52a1\u62d3\u5c55\u5f00\u53d1\u662f\u57fa\u4e8e Node.js \u5e73\u53f0\u7684\u4e0b\u7684express\u5f00\u53d1\u6846\u67b6\u642d\u8f7d\u7684\u670d\u52a1\u3002\u4e3b\u8981\u7528\u4e8e\u6355\u6349\u6d41\u7a0b\u8282\u70b9\u524d\u540e\u7684\u4f5c\u4e1a\u7ec4\u4fe1\u606f\uff0c\u4ee5\u53ca\u5bf9\u5176\u903b\u8f91\u7684\u5904\u7406\u53ca\u53d8\u5316"),(0,i.kt)("h2",{id:"\u7a0b\u5e8f\u76ee\u5f55"},"\u7a0b\u5e8f\u76ee\u5f55"),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/RabbitMQ1.png")}),(0,i.kt)("h1",{id:""}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u53ea\u9700\u8981\u66f4\u6539\u548c\u5904\u7406\u76ee\u5f55\u4e2d ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"app.js"))," , ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"message.js"))," \u4ee5\u53ca ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"base.js"))," \u7684\u4ee3\u7801")),(0,i.kt)("h1",{id:"-1"}),(0,i.kt)("h2",{id:"\u914d\u7f6e\u53ca\u5f00\u53d1"},"\u914d\u7f6e\u53ca\u5f00\u53d1"),(0,i.kt)("h3",{id:"appjs"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"app.js"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"app.js\u4e3a\u670d\u52a1\u542f\u52a8\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u66f4\u6539 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"config"))," \u7684HostName,UserName,Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HostName\u662f\u670d\u52a1\u5668\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UserName\u548cPassword\u5206\u522b\u5bf9\u5e94rabbitMQ\u7684\u8d85\u7ba1\u7684\u8d26\u53f7\u548c\u5bc6\u7801"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var fs = require(\'fs\');\nvar path = require(\'path\');\nvar IsHavTiming = false;\nvar configpath = path.resolve(\'Config/config.json\');\nvar amqp = require(\'amqp\');\nvar amqplib = require(\'amqplib/callback_api\');\nvar Vhost = "/";\nvar cacheConnect = {};\nvar config = { "Enable": false, "HostName": "localhost", "UserName": "admin", "Password": "iDong@mq" };\nvar Connection = null;\nvar xml2js = require(\'xml2js\');\nvar xmlParser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: true });\nvar itemData = null;\nvar isExit = null;\nvar isProcessMessage = null;\nvar ImLogWriter = require(\'./imLogWriter.js\');\nvar imLogWriter = new ImLogWriter();\nvar CustomHelp = require(\'./CustomHelp.js\');\nvar customHelp = new CustomHelp();\n\n///\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\nvar ReadConfig = function (path, _callback) {\n    fs.readFile(path, \'utf-8\', function (err, data) {\n        if (err) {\n            imLogWriter.WriteLog("[" + path + "]\u8bfb\u53d6\u5931\u8d25\uff01", "error");\n            _callback(null); //\u8bfb\u53d6\u5931\u8d25 \u5219\u4e0d\u518d\u6267\u884c\n        }\n        else {\n            _callback(data);\n        }\n    });\n};\n')),(0,i.kt)("h3",{id:"basejs"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"base.js"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"base.js\u662f\u5728\u903b\u8f91\u4ee3\u7801\u4e2d\u7528\u4e8e\u8c03\u7528\u63a5\u53e3\u7684\u7c7b\uff0c\u56e0\u4e3a\u8c03\u7528\u63a5\u53e3\u9700\u8981\u7528\u5230\u6d88\u606f\u670d\u52a1\u7cfb\u7edf\u3002\u56e0\u6b64\uff0c\u9700\u8981\u4e8b\u5148\u914d\u7f6e\u597d\u8d26\u53f7\u53ca\u5bc6\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"authorization\u7684li\u548cpd\u5206\u522b\u5bf9\u5e94\u6d88\u606f\u670d\u52a1\u7684\u8d26\u53f7\u548c\u5bc6\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"host\u4e3a\u670d\u52a1\u5668ip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"prot\u662f\u6d88\u606f\u670d\u52a1\u7684\u7aef\u53e3"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    this.http = require('http');\n    this.authorization ='Basic '+new Buffer('{\\'li\\':\\'administrator\\',\\'pd\\':\\'1234\\'}').toString('base64');\n    this.host = 'localhost';\n    this.port = 8010;\n")),(0,i.kt)("h3",{id:"messagejs"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"message.js"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"message.js\u662f\u670d\u52a1\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u7528\u4e8e\u5904\u7406\u67d0\u4e2a\u6d41\u7a0b\u8282\u70b9\u524d\u540e\u7684\u903b\u8f91\uff0c\u8fd9\u4e2a\u90e8\u5206\u7ecf\u5e38\u4f1a\u8c03\u7528\u5230\u63a5\u53e3\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u4f1a\u793a\u8303\u5982\u4f55\u8c03\u7528\u63a5\u53e3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u5728id\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"e4e81f3d-9ce5-458b-84b8-36faab6ee817"))," \u7684\u6d41\u7a0b\u8282\u70b9\u5728\u7ed3\u675f\u540e\uff0c\u8c03\u7528\u63a5\u53e3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Report/GetTaskGroupProperties")),"\uff0c\u5373\u83b7\u53d6\u5230\u4f5c\u4e1a\u7ec4\u7684\u6240\u6709\u4f5c\u4e1a\u7ec4\u5c5e\u6027"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    var Base = require('./base');\n    var base = new Base();\n    var request = require('request');\n\n    //\u83b7\u53d6\u4f5c\u4e1a\u7ec4\u4e0b\u7684\u6240\u6709\u4f5c\u4e1a\u7ec4\u5c5e\u6027\n    function GetTaskGroupProperties(TGid,callback) { \n    base.process('GET','Report/GetTaskGroupProperties?taskGroupID='+TGid,'',null,function(_data){\n       var obj = JSON.parse(_data);\n       if (obj.IsOk) {\n        callback(obj.Response);\n        return;\n    }  \n    else{\n        return;\n    }\n    });\n    }\n\n    //\u6b64\u51fd\u6570\u7528\u6765\u5224\u65ad\u72b6\u6001\u505a\u4e0d\u540c\u7684\u884c\u4e3a\n    function doSomeThing(){\n      this.process = function (msg) {          //\u62ff\u5230\u4f5c\u4e1a\u7ec4\u5b9e\u4f8b\u5bf9\u8c61       \n        var msgObj = JSON.parse(msg.content.toString());  \n        console.dir(msgObj);    \n        TGid = msgObj.TaskGroupID;\n        tgName = msgObj.TaskGroupName;\n        if ((msgObj.ActivityEntityID==='e4e81f3d-9ce5-458b-84b8-36faab6ee817')&&(msgObj.ActivityState === 'Done')) \n            {\n                GetTaskGroupProperties(TGid,GetTaskGroupProperties=>{\n                    console.log(\"\u6210\u529f\");\n                    console.log(JSON.stringfy(GetTaskGroupProperties));\n                });\n            }\n        }\n\n    }\n    module.exports = doSomeThing;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d41\u7a0b\u540e\u51fd\u6570\u914d\u7f6e\u53ca\u5f00\u53d1\u5199\u5b8c\u540e\uff0c",(0,i.kt)("a",{parentName:"li",href:"/docs/next/%E7%B3%BB%E7%BB%9F%E6%89%A9%E5%B1%95%E6%8C%87%E5%8D%97/nodejs%E7%A8%8B%E5%BA%8F%E9%85%8D%E7%BD%AE%E6%88%90windows%E6%9C%8D%E5%8A%A1"},"\u5c06nodejs\u7a0b\u5e8f\u914d\u7f6e\u6210windows\u670d\u52a1")," ")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6253\u5f00cmd,\u8f93\u5165\u7a0b\u5e8f\u8def\u5f84\u540e\uff0c\u8f93\u5165node app.js")),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/RabbitMQ2.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6210\u529f\u6253\u5f00\u540e")),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/RabbitMQ3.png")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4e2d\u7684\u903b\u8f91\u662f\uff0cid\u4e3a",(0,i.kt)("strong",{parentName:"li"},"e4e81f3d-9ce5-458b-84b8-36faab6ee817"),"\u4e14\u6d41\u7a0b\u540d\u4e3a ",(0,i.kt)("strong",{parentName:"li"},"\u7ef4\u4fee\u4fdd\u517b")," \u7684\u6d41\u7a0b\u8282\u70b9\u7ed3\u675f\u540e\uff0c\u83b7\u53d6\u4f5c\u4e1a\u7ec4\u7684\u6240\u6709\u5c5e\u6027")),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/RabbitMQ4.jpg")}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ec8\u7aef",(0,i.kt)("strong",{parentName:"li"},"\u7ef4\u4fee\u4fdd\u517b"),"\u7ed3\u675f\u540e\uff0c\u5b8c\u6210\u5e76\u540c\u6b65\uff0c\u770b\u5230\u63a7\u5236\u53f0\u51fa\u73b0\u7ed3\u679c")),(0,i.kt)("img",{alt:" ",src:(0,o.Z)("docimg/RabbitMQ5.png")}))}d.isMDXComponent=!0}}]);