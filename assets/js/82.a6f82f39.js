(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{530:function(t,e,i){"use strict";i.r(e);var a=i(7),o=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("前提：安装 gitlab 插件")]),t._v(" "),e("p",[t._v("问题：gitlab 创建 webhook 一直显示 Invalid url given")]),t._v(" "),e("p",[t._v("问题由来：在新版 gitlab 中，gitlab 的安全策略通常会阻止向本地或私有网络地址发出的请求，以防止安全风险")]),t._v(" "),e("p",[t._v("这种情况会阻止 jenkins 对 gitlab 进行代码拉取")]),t._v(" "),e("p",[t._v("解决：设置中心 --\x3e 设置 --\x3e 网络 --\x3e 出站请求 --\x3e 勾选上《允许来自 webhooks 和集成对本地网络的请求》")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911214338339.png",alt:"image-20240911214338339"}}),t._v(" "),e("p",[t._v("在上一个实验的基础上，接下来给 jenkins 的构建进行配置")]),t._v(" "),e("p",[t._v("在构建触发器处选择这个：Build when a change is pushed to GitLab.")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911214725465.png",alt:"image-20240911214725465"}}),t._v(" "),e("p",[t._v("gitlab webhook url：http://10.0.0.22:8080/jenkins/project/freestyle-demo")]),t._v(" "),e("p",[t._v("secret token：001cdba061a0c5cc55841f61e89d73fe")]),t._v(" "),e("p",[t._v("点击保存")]),t._v(" "),e("p",[t._v("接下来去 gitlab 进行配置")]),t._v(" "),e("p",[t._v("打开项目 --\x3e 设置 --\x3e Webhooks，用刚刚获得的信息新增一个 webhooks")]),t._v(" "),e("p",[t._v("测试 webhooks，自动部署配置成功了")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911215158714.png",alt:"image-20240911215158714"}})])}),[],!1,null,null,null);e.default=o.exports}}]);