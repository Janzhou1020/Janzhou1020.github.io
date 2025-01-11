(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{505:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("create jdk dir\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path=/opt/jdk state=directory\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("create tomcat dir\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path=/opt/tomcat state=directory\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 03"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("decom jdk to remote hosts\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unarchive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" src=../ansible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("file/jdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u161"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz dest=/opt/jdk\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 04"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("decom tomcat to remote hosts\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unarchive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" src=../ansible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("file/apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tomcat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8.5.43.tar.gz dest=/opt/tomcat\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 05"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("create jdk path\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lineinfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path=/etc/profile regexp='^export JAVA_HOME=' line='export JAVA_HOME=/opt/jdk/jdk1.8.0_161'\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 06"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("create jdk path2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lineinfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path=/etc/profile regexp='^export export PATH=' line='export PATH=$JAVA_HOME/bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$PATH'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/image-20240906143155122.png",alt:"image-20240906143155122"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);