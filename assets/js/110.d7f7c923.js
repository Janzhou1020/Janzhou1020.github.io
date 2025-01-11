(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{559:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"监控普通进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控普通进程"}},[s._v("#")]),s._v(" 监控普通进程")]),s._v(" "),a("p",[s._v("项目仓库：https://github.com/cnych/prometheus_demo_service")]),s._v(" "),a("p",[s._v("由于项目是 Go 语言开发的，所以需要先配置下环境")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.下载 go")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://golang.google.cn/dl/go1.18.4.linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.解压 go")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzvf go1.18.4.linux-amd64.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.配置环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/go/bin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.检查环境变量")]),s._v("\ngo version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.下载项目包：https://github.com/cnych/prometheus_demo_service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/cnych/prometheus_demo_service.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.cd 到项目包中跨平台编译成二进制进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" prometheus_demo_service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7.构建镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" prometheus-demo-service "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8.运行三个不同端口的进程 10000 10001 10002")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(":8080 prometheus-demo-service  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器监听10000端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10001")]),s._v(":8080 prometheus-demo-service  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器监听10001端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10002")]),s._v(":8080 prometheus-demo-service  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器监听10002端口")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241219135027464.png",alt:"image-20241219135027464"}}),s._v(" "),a("p",[s._v("配置 prometheus.yml 后启动")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15s   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以配置在scrape_configs内")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("evaluation_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15s\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prometheus"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:9090"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prometheus-demo"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15s    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的配置比全局的配置优先级要高")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.21:10000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.21:10001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.21:10002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("观察 target")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241219140211230.png",alt:"image-20241219140211230"}}),s._v(" "),a("p",[s._v("观察 graph")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241219140341550.png",alt:"image-20241219140341550"}}),s._v(" "),a("h3",{attrs:{id:"监控-mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控-mariadb"}},[s._v("#")]),s._v(" 监控 mariadb")]),s._v(" "),a("p",[s._v("安装 mariadb")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载掉 rpm 默认包通过 yum 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" mariadb-libs-5.5.35-3.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nodeps")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/my.cnf\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mariadb-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\nsystemctl start mariadb\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接 Enter 登录，默认无密码")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("1.安装 mysqld_exporter 组件")]),s._v(" "),a("p",[s._v("2.数据库授权")]),s._v(" "),a("p",[s._v("说明：授权 IP 为 localhost，因为不是 Prometheus 和 mariadb 对接，而是 Prometheus 对接 mysqld_exporter，由 mysqld_exporter 来对接 mariadb，所以这里的 localhost 指的是 mysqld_exporter 的 IP，如果直接使用 Prometheus 对接 mariadb，需要配置为 %")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GRANT ALL ON *.* TO 'mysql_monitor'@'localhost' identified by '123456';\n# 如果是 mysql8\nCREATE USER 'mysql_monitor'@'%' identified with mysql_native_password by '123456';\nGRANT ALL ON *.* TO 'mysql_monitor'@'localhost';\n------\nFLUSH PRIVILEGES;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("3.创建连接 mariadb 配置文件")]),s._v(" "),a("p",[s._v("解压后进入项目根目录下：vim .my.cnf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[client]\nuser=mysql_monitor\npassword=123456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("4.启动 mysqld_exporter：nohup ./mysqld_exporter --config.my-cnf='.my.cnf' &（默认端口 9104）")]),s._v(" "),a("p",[s._v("5.修改 Prometheus 配置文件")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15s   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以配置在scrape_configs内")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("evaluation_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15s\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql_exporter"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.21:9104"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("6.重启服务")]),s._v(" "),a("p",[s._v("kill -p PID")]),s._v(" "),a("p",[s._v("nohup ./prometheus &")]),s._v(" "),a("p",[s._v("7.查看监控结果")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20241219160719010.png",alt:"image-20241219160719010"}})])}),[],!1,null,null,null);a.default=e.exports}}]);