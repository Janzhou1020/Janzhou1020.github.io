(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{518:function(t,s,a){"use strict";a.r(s);var i=a(7),e=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("也可以监控支持 snmp 的设备")]),t._v(" "),s("p",[t._v("1.启动设备的 snmp 功能")]),t._v(" "),s("p",[t._v("以 linux 为例，在客户机安装 snmp 服务：yum install net-snmp-utils -y（客户端软件包）")]),t._v(" "),s("p",[t._v("配置文件通常位于 "),s("code",[t._v("/etc/snmp/snmpd.conf")]),t._v(" 编辑此文件来设置 SNMP 社区字符串和其他配置")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824095640156.png",alt:"image-20240824095640156"}}),t._v(" "),s("p",[t._v("在配置文件末尾加入：rocommunity public（社区字符串），snmpwalk 命令测试时需要用到")]),t._v(" "),s("p",[t._v("重启 snmp 服务：sudo systemctl restart snmpd")]),t._v(" "),s("p",[t._v("现在可以使用 "),s("code",[t._v("snmpwalk")]),t._v(" 命令来测试配置：snmpwalk -v 2c -c public localhost SysDesc")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("-v 2c")]),t._v(": 使用 SNMP v2c 版本")]),t._v(" "),s("li",[s("code",[t._v("-c public")]),t._v(": 使用社区字符串 public 进行认证，只限 v2 版本使用")]),t._v(" "),s("li",[s("code",[t._v("SysDesc")]),t._v("：表示系统的描述信息，通常包括操作系统的名称、版本、内核版本、硬件平台以及其他相关的描述性信息")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824100313497.png",alt:"image-20240824100313497"}}),t._v(" "),s("p",[t._v("snmp 有一些常用的 OID 和相应的备注可以帮助了解对应的机器信息，除了 SysDesc 还有 SysUpdate 等等 ...")]),t._v(" "),s("p",[t._v("测试好后，接下来在 zabbix web 页面添加主机，snmp 服务的默认端口是 161")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824101909953.png",alt:"image-20240824101909953"}}),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824102116056.png",alt:"image-20240824102116056"}}),t._v(" "),s("p",[t._v("还需要添加模板，选择一个通用的模板；也可以下载其他模板，zabbix 模板网站："),s("a",{attrs:{href:"https://www.zabbix.com/integrations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zabbix Integrations and Templates"),s("OutboundLink")],1)]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824103200328.png",alt:"image-20240824103200328"}}),t._v(" "),s("p",[t._v("可以看见 snmp 可用性变绿了")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240824103310544.png",alt:"image-20240824103310544"}})])}),[],!1,null,null,null);s.default=e.exports}}]);