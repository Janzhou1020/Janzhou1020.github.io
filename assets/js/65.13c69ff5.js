(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{514:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("借助 ansible 批量安装 zabbix-agent 客户端实现自动注册 完成批量监控服务器")]),t._v(" "),a("p",[t._v("首先需要在 zabbix-server 配置好主机发现规则，和发现动作，检测类型为检测 zabbix-agent 客户端")]),t._v(" "),a("p",[t._v("所以需要在需要被注册的主机上安装好 zabbix-agent ，配置好配置文件的目标管理主机，然后启动客户机就可以")]),t._v(" "),a("p",[t._v("5.1 配置主机群组，我使用all")]),t._v(" "),a("p",[t._v("5.2 编写剧本")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- name: 01更换下载源为阿里云，已经做了")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" installed zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("get_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url=https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("5.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.el7.noarch.rpm dest=/etc/yum.repos.d validate_certs=no\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" change source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("i 's/http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\/\\/repo.zabbix.com/https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\/\\/mirrors.aliyun.com\\/zabbix/' /etc/yum.repos.d/zabbix.repo\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chang source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("i '11s/enabled=0/enabled=1/' /etc/yum.repos.d/zabbix.repo\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name=zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent2 state=installed\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" change zabbix conf\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" src=../ansible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("file/zabbix_agent2.conf dest=/etc/zabbix/zabbix_agent2.conf force=yes\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("systemd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name=zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent2 state=started enabled=yes\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("5.3 运行结果")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240906155410685.png",alt:"image-20240906155410685"}}),t._v(" "),a("p",[t._v("在被管理机器查看 agent 状态")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240906155449943.png",alt:"image-20240906155449943"}})])}),[],!1,null,null,null);a.default=e.exports}}]);