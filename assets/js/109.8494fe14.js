(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{558:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Prometheus 通过Metrics接口为其提供监控指标，最好的方式就是直接在目标应用中集成该接口，但是有些应用并没有内置支持metrics接口，比如Linux系统，MySQL，Redis，Kafka等应用，这种情况下我们就可以单独开发一个应用来专门提供metrics服务，广义上讲所有可以向Prometheus提供监控样数据的程序都可以被称为Exporter，Exporter的一个实例就是我们要监控的Target")]),s._v(" "),t("p",[s._v("Prometheus社区提供了非常的丰富的Exporter，涵盖了基础设施，中间件以及网络等各个方面的监控实现，当然了社区也会出现很多的其他的Exporter，如果有必要，我们也可以完全g根据自己的需求开发一个Exporter，但是最好以官方的Exporter为最佳实践")]),s._v(" "),t("p",[s._v("下载地址：https://prometheus.io/download/")]),s._v(" "),t("p",[s._v("1：数据库：Consul Exporter，Memcached Exporter，MySQL Exporter\n2：硬件相关：Node/system metrics exporter\n3：HTTP：Haproxy Exporter\n4：其他监控系统：AWS CloudWatch Exporter，Colletcd Exporter，Graphite Exporter，InfluxDB Exporter，JMX Exporter，SNMP Exporter，StatsD Exporter，Blackbox Exporter......")]),s._v(" "),t("p",[s._v("由于 Exporter 是提供监控指标的独立服务，所以我们需要单独的部署该服务来提供指标服务，比如：Node Exporter 就需要在操作系统上独立运行来收集系统相关监控数据转换为 Prometheus 能够识别的 metrics 接口")]),s._v(" "),t("h3",{attrs:{id:"node-exporter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-exporter"}},[s._v("#")]),s._v(" Node Exporter")]),s._v(" "),t("p",[s._v("由于Node Exporter是一个独立的二进制程序，可以直接从Prometheus官网下载解压")]),s._v(" "),t("p",[s._v("https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224104239929.png",alt:"image-20241224104239929"}}),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost exporter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar xf node_exporter-1.8.2.linux-amd64.tar.gz")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost exporter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd node_exporter-1.8.2.linux-amd64/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nLICENSE  node_exporter  NOTICE\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./node_exporter  --version")]),s._v("\nnode_exporter, version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("branch: HEAD, revision: f1e0e8360aa60b6cb5e5cc1560bed348fc2c1895"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  build user:       root@03d440803209\n  build date:       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20240714")]),s._v("-11:53:45\n  go version:       go1.22.5\n  platform:         linux/amd64\n  tags:             unknown\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./node_exporter &")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("126897")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# nohup: 忽略输入并把输出追加到"nohup.out"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -n4 nohup.out")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-12-24T02:45:55.866Z "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("caller")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node_exporter.go:118 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("info "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("collector")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xfs\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-12-24T02:45:55.866Z "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("caller")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node_exporter.go:118 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("info "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("collector")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zfs\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-12-24T02:45:55.868Z "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("caller")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tls_config.go:313 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("info "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Listening on"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":9100\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-12-24T02:45:55.868Z "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("caller")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tls_config.go:316 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("info "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TLS is disabled."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":9100\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# curl -o /dev/null -s -w "%{http_code}" localhost:9100')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224105213487.png",alt:"image-20241224105213487"}}),s._v(" "),t("p",[s._v("他告诉我们要去访问 /metrics 路径才会有数据")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224105322240.png",alt:"image-20241224105322240"}}),s._v(" "),t("p",[s._v("在这里我们就看到我们熟悉的数据啦，但是我们其实还有很多关于 exporter 有很多可配置的地方，我们可以 -h 来看一下")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224105543478.png",alt:"image-20241224105543478"}}),s._v(" "),t("p",[s._v("比如我们想禁用一个收集比如arp：./node_exporter --no-collector.arp（这样关于ARP的收集器就被关闭了）")]),s._v(" "),t("p",[s._v("那如果有人说我只想启动其中的某一个或者几个功能怎么办呢？当然了它也有解决方法")]),s._v(" "),t("p",[s._v("./node_exporter --collector.disable-defaults --collector.cpu")]),s._v(" "),t("ol",[t("li",[s._v("--collector.disable-defaults    # 默认禁用所有的采集器")]),s._v(" "),t("li",[s._v("--collector.cpu    # 只开启CPU的采集器")])]),s._v(" "),t("p",[t("strong",[s._v("配置 Exporter")]),s._v("（使用 systemd 管理）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv node_exporter /usr/local/bin/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat << EOF > /etc/systemd/system/node_exporter.service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node exporter "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://prometheus.io\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin/node_exporter\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EOF\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start node_exporter.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status node_exporter.service")]),s._v("\nnode_exporter.service - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" exporter "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n   Loaded: loaded "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/etc/systemd/system/node_exporter.service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since 二 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-12-24 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":30:47 CST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 2s ago\n     Docs: https://prometheus.io\n Main PID: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77786")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_exporter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/node_exporter.service\n           └─77786 /usr/local/bin/node_exporter\nHint: Some lines were ellipsized, use "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" to show "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" full.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -tunpl | grep exporter")]),s._v("\ntcp6       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::9100                 :::*                    LISTEN      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77786")]),s._v("/node_exporter\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost node_exporter-1.8.2.linux-amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable node_exporter.service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/systemd/system/node_exporter.service'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/systemd/system/multi-user.target.wants/node_exporter.service'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 Prometheus 配置文件")]),s._v("\n  - job_name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22.node_exporter"')]),s._v("\n    static_configs:\n      - targets: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.22:9100"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动 Prometheus")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])]),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224171442560.png",alt:"image-20241224171442560"}}),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224171644874.png",alt:"image-20241224171644874"}}),s._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20241224171732684.png",alt:"image-20241224171732684"}})]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224171817414.png",alt:"image-20241224171817414"}}),s._v(" "),t("p",[s._v("到这里我们就配置好了我们的 Exporter 了，接下来我们来学习的就是 node_exporter 的常用配置")]),s._v(" "),t("h3",{attrs:{id:"node-exporter-常用监控指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-exporter-常用监控指标"}},[s._v("#")]),s._v(" Node_Exporter 常用监控指标")]),s._v(" "),t("p",[t("strong",[s._v("CPU 监控")])]),s._v(" "),t("p",[s._v("对于节点我们首先想到的就是要先对CPU进行监控，因为CPU是处理任何任务的核心，根据CPU的状态可以分析出当前系统的健康状态，要对节点进行CPU监控，需要用到node_cpu_seconds_total这个监控指标，在metrics接口中该指标内容如下")]),s._v(" "),t("p",[s._v("PromQL：node_cpu_seconds_total")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224173837627.png",alt:"image-20241224173837627"}}),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# CPU 主要处于 空闲状态，累计空闲时间约 1,145,139.61 秒\nnode_cpu_seconds_total{cpu="0",mode="idle"} 1.14513961e+06\n# I/O 等待时间为 14.06 秒，表明 I/O 负载很小\nnode_cpu_seconds_total{cpu="0",mode="iowait"} 14.06\n# 没有发生硬件中断和虚拟化管理器抢占（irq 和 steal 均为 0）\nnode_cpu_seconds_total{cpu="0",mode="irq"} 0\nnode_cpu_seconds_total{cpu="0",mode="nice"} 1.79\nnode_cpu_seconds_total{cpu="0",mode="softirq"} 10.4\nnode_cpu_seconds_total{cpu="0",mode="steal"} 0\n# 系统任务时间为 390.77 秒，内核相关任务占用较少的时间\nnode_cpu_seconds_total{cpu="0",mode="system"} 390.77\n# 用户程序执行时间为 137.93 秒，说明 CPU 主要为应用程序工作\nnode_cpu_seconds_total{cpu="0",mode="user"} 137.93\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("从接口的描述可以看出该指标是用来统计 CPU 每种模式下所花费的时间，是一个 Counter 类型的指标，也就是会一直增长，这个数值其实是CPU 时间片的一个累积值，意思就是从操作系统启动起来 CPU 开始工作，就开始记录自己总共使用的时间，然后保存下来，而且这里累积的CPU 使用时间还会分成几个不同的模式，比如用户态使用时间，空闲时间，中断时间，内核态使用时间等等，也就是平时我们使用 top 命令查看到的相关信息，而且我们这个指标会分别对这些模式进行记录")]),s._v(" "),t("p",[s._v("接下来我们对节点的 CPU 进行监控，我们也知道一个一直增长的 CPU 时间对于我们来说意义不大，一般我们更希望监控节点的 CPU 使用率，也就是我们使用 top 命令看到的百分比")]),s._v(" "),t("p",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241224174444100.png",alt:"image-20241224174444100"}}),s._v("increase 计算增量值")]),s._v(" "),t("p",[s._v("by(instance)：表示将结果按 instance 标签进行分组，比如对 instance1 实例进行计算，instance1 实例有 2 个 CPU 核心，那么就有两个组")]),s._v(" "),t("p",[s._v("sum：表示对查询结果进行求和")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("计算一分钟内idle模式下cpu使用了多少时间：\nPromQL：increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ninstance进行聚合一下：\nPromQL：sum by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n与总的CPU时长进行对比：\nPromQL：sum "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n整体PromQL计算如下：\nPromQL："),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241225102736382.png",alt:"image-20241225102736382"}}),s._v(" "),t("p",[t("strong",[s._v("内存监控")])]),s._v(" "),t("p",[s._v("除了 CPU 监控之外，我们可能最关心的就就是节点内存的监控了，平时我们查看节点的内存使用情况基本上都是使用 free 命令来查看")]),s._v(" "),t("p",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241225104607326.png",alt:"image-20241225104607326"}}),s._v("total：表示系统总的可用的内存")]),s._v(" "),t("p",[s._v("used：已经被使用的内存")]),s._v(" "),t("p",[s._v("free：还有多少内存可供是使用")]),s._v(" "),t("p",[s._v("shared：被共享使用的大小")]),s._v(" "),t("p",[s._v("buff/cache：被buff/cache使用的大小")]),s._v(" "),t("p",[s._v("available：可以被应用使用的内存大小")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("要计算可使用的内存的使用我们需要使用如下（应用程序角度）：\nPromQL：node_memory_Buffers_bytes + node_memory_Cached_bytes + node_memory_MemFree_bytes\n内存使用率计算方法如下：\nPromQL：(1 - (node_memory_Buffers_bytes + node_memory_Cached_bytes + node_memory_MemFree_bytes) / node_memory_MemTotal_bytes) * 100\n内存总的一个使用情况：\nPromQL：node_memory_MemTotal_bytes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("磁盘监控")])]),s._v(" "),t("p",[s._v("要监控磁盘容量，需要用到 node_filesystem_* 相关指标，比如要查询节点磁盘空间使用率，则可以同样用总的减去可用的来进行计算，磁盘可用空间使用node_filesystem_avail_bytes指标，但是由于会有一些我们不关心的磁盘信息，所以我们可以使用fstype标签过滤关心的磁盘信息，或如ext4或者xfs格式的磁盘")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("可用的磁盘空间：\nPromQL：node_filesystem_avail_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n计算可用率：\nPromQL：node_filesystem_avail_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" / node_filesystem_size_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n计算使用率：\nPromQL："),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" - node_filesystem_avail_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" / node_filesystem_size_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n当然了我们可以根据各个服务器来查看不同的情况，比如我们查看Prometheus本身的，在过滤时使用标签即可：\nPromQL："),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" - node_filesystem_avail_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),s._v(",instance"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:9100"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" / node_filesystem_size_bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fstype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xfs|ext4"')]),s._v(",instance"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:9100"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("磁盘IO监控")]),s._v(" "),t("p",[s._v("要监控磁盘的IO，那么就要区分是读IO还是写的IO")]),s._v(" "),t("p",[s._v("读的IO使用node_disk_reads_completed_total指标")]),s._v(" "),t("p",[s._v("写的IO使用node_disk_writes_completed_total 指标")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("磁盘读IO使用如下方法计算\nPromQL：sum by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("device,instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_disk_reads_completed_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n计算写的IO使用方法如下：\nPromQL：sum by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("device,instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_disk_writes_completed_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("网络 IO 监控")])]),s._v(" "),t("p",[s._v("上行带宽使用 node_network_receive_bytes_total，由于我们对网络带宽的瞬间变化比较关注，所以一般我们会使用irate函数计算网络IO，比如计算上行带宽")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('这里面的话可能涉及到多网卡的情况，所以我这里只使用eth0来计算了，要根据生产的环境来酌情使用\n表示网络接口接收的字节数总和，这是一个计数器（counter）类型的指标，随着时间的推移会不断递增\nPromQL：node_network_receive_bytes_total{device = "eth0"}\nrate() 是 PromQL 中用于计算计数器在指定时间窗口（在这里是 5 分钟 [5m]）内的变化速率。对于 node_network_receive_bytes_total 这样的计数器，它返回的是 每秒接收的字节数\nPromQL：rate(node_network_receive_bytes_total{device = "eth0"}[5m])\n这个查询计算了每个实例（例如每台主机）的 eth0 网络接口的总接收速率。它会将每个实例所有 eth0 网络接口的接收字节数的速率求和，单位是字节/秒（B/s）。如果某台机器有多个网卡接口，sum by(instance) 会将其聚合成总和\nPromQL：sum by(instance)(rate(node_network_receive_bytes_total{device = "eth0"}[5m]))\n这个查询计算每个实例的 eth0 接口接收的瞬时字节数速率（单位为字节/秒），然后将其转换为兆字节/秒（MB/s）。与 rate() 不同，irate() 计算的是瞬时的变化速率，适合快速响应网络带宽波动\nPromQL：sum by(instance)(irate(node_network_receive_bytes_total{device = "eth0"}[5m])) / 1024^2\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241225133937136.png",alt:"image-20241225133937136"}})])}),[],!1,null,null,null);t.default=n.exports}}]);