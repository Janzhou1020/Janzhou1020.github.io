(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{546:function(a,e,s){"use strict";s.r(e);var n=s(7),t=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Docker 数据卷（Volume）是 Docker 用于持久化和共享数据的主要方式")]),a._v(" "),e("p",[a._v("允许容器与宿主机之间进行数据共享，并且当容器删除时，卷中的数据可以保留")]),a._v(" "),e("p",[a._v("多个容器可以共享同一个卷，方便它们之间进行数据交换")]),a._v(" "),e("p",[a._v("与直接挂载宿主机目录相比，卷的隔离性更好，容器无法轻易访问宿主机的其他文件")]),a._v(" "),e("p",[e("strong",[a._v("常用的卷操作")])]),a._v(" "),e("p",[a._v("创建数据卷：docker volume create my_volume")]),a._v(" "),e("p",[a._v("查看现有卷：docker volume ls")]),a._v(" "),e("p",[a._v("挂载数据卷到容器：docker run -d --name my_container -v my_volume:/path/in/container my_image")]),a._v(" "),e("p",[a._v("绑定挂载主机目录：docker run -d --name my_container -v /path/on/host:/path/in/container my_image")]),a._v(" "),e("p",[a._v("删除数据卷（删除卷，注意：如果卷正在被容器使用，需要先停止并删除容器）：docker volume rm my_volume")]),a._v(" "),e("p",[a._v("自动创建匿名卷：如果在运行容器时使用 "),e("code",[a._v("-v /path/in/container")]),a._v("，而不指定宿主机目录或数据卷名称，Docker 会自动为你创建一个匿名卷")]),a._v(" "),e("p",[a._v("检查数据卷的详细信息：docker volume inspect my_volume")]),a._v(" "),e("p",[a._v("实例")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 假设你有两个容器需要共享数据，可以使用相同的数据卷")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1.创建数据卷")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create shared_data\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2.运行第一个容器并挂载卷")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" container1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" shared_data:/data busybox\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3.运行第二个容器并挂载同一个卷")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" container2 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" shared_data:/data busybox\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);