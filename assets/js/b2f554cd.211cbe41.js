"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[11477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"\u6587\u6863\u7f16\u5199\u548c\u7ba1\u7406\u7684\u65b0\u5957\u8def","metadata":{"permalink":"/blog/2020/05/14/thinking-docs-opensource","editUrl":"https://github.com/iDongMobility/imgenius-docs/edit/master/blog/blog/2020-05-14-thinking-docs-opensource.md","source":"@site/blog/2020-05-14-thinking-docs-opensource.md","title":"\u6587\u6863\u7f16\u5199\u548c\u7ba1\u7406\u7684\u65b0\u5957\u8def","description":"\u4f7f\u7528\u5f00\u6e90\u534f\u4f5c\u6a21\u5f0f\u6765\u5b8c\u6210\u6587\u6863\u7f16\u5199\u548c\u7ba1\u7406\u7684\u601d\u8003\u3002","date":"2020-05-14T00:00:00.000Z","formattedDate":"May 14, 2020","tags":[{"label":"\u6587\u6863","permalink":"/blog/tags/\u6587\u6863"},{"label":"OpenSource","permalink":"/blog/tags/open-source"},{"label":"InnerSource","permalink":"/blog/tags/inner-source"}],"readingTime":4.75,"truncated":true,"authors":[{"name":"\u6d2a\u5fd7\u5175","url":"https://github.com/lkhzb","imageURL":"https://avatars1.githubusercontent.com/u/734713?s=460&u=80659284cca37decf26e20589dd1eb39536719f2&v=4"}],"nextItem":{"title":"\u4f7f\u7528\u65b0\u7684\u6587\u6863\u6846\u67b6","permalink":"/blog/2020/05/06/use-new-doc-framework"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\n\\n\u4f7f\u7528\u5f00\u6e90\u534f\u4f5c\u6a21\u5f0f\u6765\u5b8c\u6210\u6587\u6863\u7f16\u5199\u548c\u7ba1\u7406\u7684\u601d\u8003\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u95ee\u9898\u7531\u6765\\n\\n\u53bb\u5e74\uff0c\u968f\u7740\u66f4\u591a\u4f19\u4f34\u7684\u52a0\u5165\uff0c\u5927\u5bb6\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u6587\u6863\u63d0\u51fa\u4e00\u4e9b\u610f\u89c1\uff1a\\n\\n1. \u66f4\u65b0\u4e0d\u53ca\u65f6\\n1. \u65b0\u529f\u80fd\u4e0d\u80fd\u5feb\u901f\u4f20\u9012\\n1. \u53d1\u73b0\u6587\u6863\u9519\u8bef\uff0c\u6ca1\u6709\u5730\u65b9\u53cd\u9988\u548c\u66f4\u65b0\\n1. ...\\n\\n\u4ee5\u524d\uff0c\u6211\u4eec\u7684\u6587\u6863\u57fa\u672c\u90fd\u662f\u5728Word\u4e2d\u7f16\u5199\uff0c\u518d\u901a\u8fc7PDF\u6216chm\u8ddf\u968f\u5b89\u88c5\u76d8\u4e00\u8d77\u5206\u53d1\uff0c\u8fd9\u79cd\u6a21\u5f0f\u5f0a\u7aef\u663e\u800c\u6613\u89c1\uff1a\\n\\n1. \u591a\u4eba\u534f\u4f5c\u4e0d\u65b9\u4fbf\\n1. \u66f4\u6539\u5f88\u96be\u53ca\u65f6\\n\\n## \u73b0\u5728\u65b9\u6848\\n\\n\u73b0\u5728\u5f88\u591a\u516c\u53f8\u7684\u6587\u6863\u90fd\u662f\u57fa\u4e8e **Markdown** + **GitHub** + **\u6587\u6863\u6846\u67b6**\uff08\u5982\uff1a**Docusaurus**\u3001**Docsify**\u7b49\u6216\u81ea\u7814\uff09\u7f16\u5199\u548c\u7ba1\u7406\uff0c\u901a\u8fc7CICD\u81ea\u52a8\u90e8\u7f72\u5230\u81ea\u5bb6\u670d\u52a1\u6216\u7b2c\u4e09\u65b9\u670d\u52a1\uff08\u5982**GitHub Pages**\uff0c**Netlify**\u7b49\uff09\u3002\\n\\n\u6587\u6863\u5411\u6240\u6709\u4eba\u5f00\u653e\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8d21\u732e\uff0c\u5f53\u7136\uff0c\u76ee\u524d\u4e3b\u8981\u8d21\u732e\u8fd8\u662f\u81ea\u5bb6\u5458\u5de5\uff0c\u6574\u4e2a\u8fc7\u7a0b\u4e13\u6ce8\u3001\u5f00\u653e\u3001\u900f\u660e\u3001\u5feb\u901f\u548c\u53ca\u65f6\u3002\\n\\n**imgenius**\u65b0\u6587\u6863\u5c31\u662f\u91c7\u7528\u8fd9\u79cd\u6a21\u5f0f\uff0c\u4ece\u4eca\u5e741\u6708\u52305\u6708\uff08\u5b9e\u9645\u662f\u4ece\u6625\u8282\u540e\u6b63\u5f0f\u5f00\u59cb\uff09\uff0c8\u4f4dcontributors\u5229\u7528\u5de5\u4f5c\u7a7a\u95f2\u65f6\u95f4\uff0c534\u6b21commits\u5c31\u5b8c\u6210\u6240\u6709\u6587\u6863\u7684\u7f16\u5199\u548c\u90e8\u7f72\uff0c\u6574\u4e2a\u8fc7\u7a0b\u975e\u5e38\u5feb\u901f\u3002\u4e14\u642d\u5efa\u597d\u8fd9\u4e2a\u6846\u67b6\u540e\uff0c\u4ee5\u540e\u7684\u534f\u4f5c\u548c\u66f4\u65b0\u5c06\u4f1a\u66f4\u52a0\u53ca\u65f6\u3002\\n\\n* imgenius\u6587\u6863\u4e3b\u9875\\n<img alt=\\" \\" src={useBaseUrl(\'blogimg/dochome.png\')} />\\n\\n* imgenius\u6587\u6863\u5185\u5bb9\u4e3b\u9875\\n<img alt=\\" \\" src={useBaseUrl(\'blogimg/doccontent.png\')} />\\n\\n* GitHub Contributors\\n<img alt=\\" \\" src={useBaseUrl(\'blogimg/gitcommit.png\')} />\\n\\n* [imgenius\u6587\u6863\u6e90\u7801](https://github.com/iDongMobility/imgenius-docs)\\n* [imgenius\u5728\u7ebf\u6587\u6863](https://userguide.idongmobility.cn/)\\n\\n## \u6709\u5f85\u6539\u8fdb\\n\\n\u6574\u4e2a\u8fc7\u7a0b\u4e0b\u6765\uff0c\u8fd8\u6709\u5f88\u591a\u9700\u8981\u6539\u8fdb\uff0c\u5982\uff1a\u4e3b\u52a8\u8d21\u732e\u3001\u6587\u6863\u8d28\u91cf\u7b49\u3002\\n\\n* \u63d0\u4f9b\u5b8c\u5584\u7684\u8d21\u732e\u6307\u5bfc\u6587\u6863\uff0c\u8ba9\u8d21\u732e\u8005\u66f4\u5feb\u627e\u5230\u65b9\u5411\u3002\\n* \u6587\u6863\u5185\u5bb9\u81ea\u52a8\u68c0\u6d4b\u548c\u6d4b\u8bd5\uff0c\u4fdd\u8bc1\u6587\u6863\u8d28\u91cf\u3002\\n* \u4e0d\u76f4\u63a5\u63d0\u4ea4\u5230master\u5206\u652f\uff0c\u901a\u8fc7pull request\uff0c\u6709\u4eba\u8d1f\u8d23\u5ba1\u6838\u3002\\n\\n## OpenSource & InnerSource & ?\\n\\n> * \u5f00\u6e90\u662f\u5982\u6b64\u7684\u6210\u529f\uff0c\u4ee5\u81f3\u4e8e\u73b0\u5728\u7528\u4e00\u53e5\u65f6\u9ae6\u7684\u8bdd\u6765\u5f62\u5bb9\uff1a\u201c\u5f00\u6e90\u8f6f\u4ef6\u6b63\u5728\u541e\u566c\u4e16\u754c\u201d\uff0c\u4e00\u70b9\u90fd\u4e0d\u4e3a\u8fc7\u3002\u8fd9\u4ece\u4fa7\u9762\u53cd\u6620\u51fa\uff0c\u5f00\u6e90\u7684\u5f00\u53d1\u65b9\u6cd5\u662f\u6709\u6548\u7684\uff0c\u800c\u4e14\u53ef\u4ee5\u5f00\u53d1\u51faLinux\u5185\u6838\u8fd9\u79cd\u65e2\u80fd\u5728\u8d85\u7ea7\u8ba1\u7b97\u4e2d\u5e94\u7528\u4e5f\u53ef\u4ee5\u5728\u667a\u80fd\u624b\u673a\u4e0a\u8fd0\u884c\u7684\u5353\u8d8a\u9879\u76ee\u3002\\n> * \u5f00\u6e90\u9879\u76ee\u7684\u5de5\u4f5c\u6d41\u7a0b\u89e3\u91ca\u4e86\u4e3a\u4f55\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u5fd7\u613f\u8005\u4eec\u53ef\u4ee5\u5982\u6b64\u9ad8\u6548\u7684\u5b8c\u6210\u5982\u6b64\u5de8\u5927\u7684\u9879\u76ee\u3002\u8fd9\u6837\u5c31\u7ed9\u90a3\u4e9b\u5927\u578b\u7684\u8de8\u56fd\u516c\u53f8\u5e26\u6765\u8bb8\u591a\u7684\u7075\u611f\uff0c\u548c\u6210\u529f\u7684\u5f00\u6e90\u9879\u76ee\u7684\u793e\u533a\u4e00\u6837\uff0c\u5927\u578b\u516c\u53f8\u7684\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u4eec\u4ea6\u662f\u5206\u5e03\u5728\u5168\u7403\u5404\u5730\uff0c\u800c\u4e14\u4e0d\u5728\u540c\u4e00\u4e2a\u90e8\u95e8\uff0c\u4ed6\u4eec\u5e76\u4e0d\u80fd\u591f\u9891\u7e41\u7684\u89c1\u9762\uff0c\u62a5\u544a\u7684\u8001\u677f\u4e5f\u4e0d\u4e00\u6837\u3002\u4e3a\u4e86\u5728\u4f01\u4e1a\u5185\u90e8\u80fd\u591f\u589e\u5f3a\u5408\u4f5c\uff0c\u4e00\u4e9b\u516c\u53f8\u5f00\u59cb\u5c1d\u8bd5\u91c7\u7528\u5f00\u6e90\u9879\u76ee\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\\n> * Tim O\u2019Reilly \u9996\u6b21\u4f7f\u7528\u4e86\u672f\u8bed\u201cInnerSource\u201d\u8fd9\u4e2a\u8bcd\u6c47\uff0c\u6211\u4eec\u7ffb\u8bd1\u5b83\u4e3a\u201d\u5185\u90e8\u5f00\u6e90\u201d\u3002\\n\\n\u6ce8\uff1a\u4ee5\u4e0a\u5185\u5bb9\u6765\u81ea\u4e8e[\u521b\u9020\u201c\u751f\u547d\u201d\u4e4b\u672f--InnerSource\u4ecb\u7ecd](https://www.sohu.com/a/143331227_753085)\\n\\n**\u5f00\u6e90**\u548c**\u5185\u90e8\u5f00\u6e90**\u5df2\u7ecf\u88ab\u8bc1\u5b9e\u662f\u4e00\u5957\u53ef\u884c\u7684\u65b9\u6848\uff0c\u57282c\u548c2b\u4f01\u4e1a\u90fd\u6709\u91c7\u7528\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u91c7\u7528\u5185\u90e8\u5f00\u6e90\u7684\u65b9\u5f0f\uff0c\u5feb\u901f\u548c\u9ad8\u6548\u5730\u4e3a\u7528\u6237\u63d0\u4f9b\u9ad8\u8d28\u91cf\u3001\u521b\u65b0\u578b\u5e94\u7528\u3002\\n\\n\u6ce8\uff1a\u6211\u4eec\u6240\u8bf4\u7684\u5185\u90e8\uff0c\u4e0d\u4ec5\u4ec5\u662f\u6211\u4eec\u516c\u53f8\uff0c\u8fd8\u5305\u62ec\u5408\u4f5c\u4f19\u4f34\u3001\u6700\u7ec8\u7528\u6237\u7b49\uff0c\u6b22\u8fce\u66f4\u591a\u4f19\u4f34\u52a0\u5165\u6211\u4eec\u3002\\n\\n## \u5ef6\u4f38\u9605\u8bfb\\n\\n* [\u8d85\u4e24\u4e07\u6280\u672f\u4eba\u5458\u5982\u4f55\u51cf\u5c11\u91cd\u590d\u9020\u8f6e\u5b50\uff1f\u817e\u8baf\u63a8\u8fdb\u5185\u90e8\u5f00\u6e90\u534f\u540c](https://cloud.tencent.com/developer/article/1556709)\\n* [\u5185\u90e8\u5f00\u6e90\u7684\u672a\u6765](https://gitee.com/InnerSource/future)\\n* [\u5185\u90e8\u5f00\u6e90\uff1a\u5982\u4f55\u5728\u4f01\u4e1a\u5185\u90e8\u53d1\u6325\u5f00\u6e90\u7684\u9b54\u529b](https://gitee.com/InnerSource/leverage)\\n* [gitee\u4f01\u4e1a\u5185\u6e90\u6cbb\u7406](https://gitee.com/InnerSource)"},{"id":"\u4f7f\u7528\u65b0\u7684\u6587\u6863\u6846\u67b6","metadata":{"permalink":"/blog/2020/05/06/use-new-doc-framework","editUrl":"https://github.com/iDongMobility/imgenius-docs/edit/master/blog/blog/2020-05-06-use-new-doc-framework.md","source":"@site/blog/2020-05-06-use-new-doc-framework.md","title":"\u4f7f\u7528\u65b0\u7684\u6587\u6863\u6846\u67b6","description":"\u4e3a\u4e86\u63d0\u9ad8\u6d4f\u89c8imgenius\u6587\u6863\u4f53\u9a8c\uff0c\u4ece\u4eca\u5929\u5f00\u59cb\u6211\u4eec\u6539\u6210\u4f7f\u7528Docusaurus 2 alpha\u6765\u6784\u5efa\u6587\u6863\u3002","date":"2020-05-06T00:00:00.000Z","formattedDate":"May 6, 2020","tags":[{"label":"\u6587\u6863\u6846\u67b6","permalink":"/blog/tags/\u6587\u6863\u6846\u67b6"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.395,"truncated":true,"authors":[{"name":"\u6d2a\u5fd7\u5175","url":"https://github.com/lkhzb","imageURL":"https://avatars1.githubusercontent.com/u/734713?s=460&u=80659284cca37decf26e20589dd1eb39536719f2&v=4"}],"prevItem":{"title":"\u6587\u6863\u7f16\u5199\u548c\u7ba1\u7406\u7684\u65b0\u5957\u8def","permalink":"/blog/2020/05/14/thinking-docs-opensource"}},"content":"\u4e3a\u4e86\u63d0\u9ad8\u6d4f\u89c8imgenius\u6587\u6863\u4f53\u9a8c\uff0c\u4ece\u4eca\u5929\u5f00\u59cb\u6211\u4eec\u6539\u6210\u4f7f\u7528[**Docusaurus 2 alpha**](https://v2.docusaurus.io/)\u6765\u6784\u5efa\u6587\u6863\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u4e3b\u8981\u589e\u5f3a\u4ee5\u4e0b\u529f\u80fd\uff1a\\n\\n* \u591a\u7248\u672c\u652f\u6301\u3002\\n* \u5bfc\u822a\u81ea\u7531\u5c55\u5f00\u548c\u6298\u53e0\u3002\\n* \u4f7f\u7528[**algolia**](https://www.algolia.com/)\u63d0\u9ad8\u641c\u7d22\u4f53\u9a8c\u3002\\n* \u9759\u6001\u7f16\u8bd1\uff0c\u63d0\u9ad8\u6253\u5f00\u901f\u5ea6\u3002\\n* \u589e\u52a0\u5de5\u7a0b\u5e08\u535a\u5ba2\u3002"}]}')}}]);