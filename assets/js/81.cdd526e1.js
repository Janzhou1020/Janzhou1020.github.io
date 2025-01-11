(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{527:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("整体过程：开发人员使用 git 将最新代码推送到 gitlab，使用 jenkins 将最新代码推送到上线环境")]),a._v(" "),s("p",[a._v("本节信息：熟悉 jenkins 在服务器中存储项目的位置，熟悉 cicd 持续集成/交付")]),a._v(" "),s("p",[a._v("脚本如下，由于我的 jenkins 和 nginx 都部署在一台机器上，所以 copy 到本机 nginx 部署的路径下就可以")]),a._v(" "),s("p",[a._v("需要注意新的文件的权限文件，如果 nginx 对文件没用操作权限访问会 403")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NGINX_HOST=10.0.0.22")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CODE_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/.jenkins/workspace/freestyle-demo\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TIME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%F-%H-%M-%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CODE_DIR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czf")]),a._v(" /opt/temp/web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(".tar.gz ./*\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# scp /opt/temp/web-${TIME}.tar.gz ${NGINX_HOST} /opt/web-${TIME}.tar.gz")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /opt/temp/web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(".tar.gz  /opt/web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(".tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +r "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzf")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(".tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(".tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" StaticPage-master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" web-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TIME}")]),a._v(" StaticPage-master\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("在 gitlab 构建脚本，观察控制台返回结果是正常的")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911101216828.png",alt:"image-20240911101216828"}}),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911101254707.png",alt:"image-20240911101254707"}}),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911101825820.png",alt:"image-20240911101825820"}}),a._v(" "),s("p",[a._v("总体流程：")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240911104142111.png",alt:"image-20240911104142111"}})])}),[],!1,null,null,null);s.default=r.exports}}]);