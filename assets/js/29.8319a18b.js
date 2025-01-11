(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{478:function(a,s,e){"use strict";e.r(s);var r=e(7),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("用于 MySQL 数据库的高可用性解决方案，旨在实现主节点自动故障转移和数据一致性")]),a._v(" "),s("p",[a._v("MHA 的主要目的是在主节点发生故障时，能够迅速地将一个从节点提升为新的主节点，从而最大限度地减少数据库的停机时间")]),a._v(" "),s("p",[a._v("主要特点：")]),a._v(" "),s("ul",[s("li",[a._v("自动故障转移：当 MySQL 主节点发生故障时，MHA 能够自动检测到这个故障，并将一个健康的从节点提升为新的主节点。这样可以确保数据库服务的高可用性")]),a._v(" "),s("li",[a._v("数据一致性：在进行故障转移之前，MHA 会检查所有从节点的数据，以确保新的主节点的数据与旧的主节点一致。这有助于避免数据丢失或不一致的情况")]),a._v(" "),s("li",[a._v("恢复操作：MHA 支持恢复操作，可以在主节点恢复后，将其重新配置为从节点，以便重新加入到复制链中")]),a._v(" "),s("li",[a._v("管理工具：MHA 提供了管理和监控工具，包括 "),s("code",[a._v("mha-manager")]),a._v(" 和 "),s("code",[a._v("mha-node")]),a._v("，用于管理集群的状态和执行故障转移操作")])]),a._v(" "),s("p",[a._v("MHA 组成：")]),a._v(" "),s("ul",[s("li",[a._v("MHA Manager：主要负责监控 MySQL 节点的状态，并在检测到主节点故障时执行故障转移操作。它还负责协调从节点的提升过程")]),a._v(" "),s("li",[a._v("MHA Node：安装在每个 MySQL 节点上，负责向 MHA Manager 发送节点状态信息，并在需要时执行一些操作（例如故障转移或数据同步）")]),a._v(" "),s("li",[a._v("MHA Admin：提供了管理和配置 MHA 的工具，帮助用户配置和维护 MHA 环境")])]),a._v(" "),s("p",[a._v("MHA Manager 通常需要部署在一台独立的机器上，而不是与 MySQL 数据库节点（主节点或从节点）共享同一台服务器。这是为了确保 MHA Manager 的高可用性和独立性，同时避免因 MySQL 节点故障导致 MHA Manager 失效")]),a._v(" "),s("p",[s("strong",[a._v("环境准备")])]),a._v(" "),s("p",[a._v("在所有 mysql 节点安装 mha node，在管理端安装 mha node 和 manager")]),a._v(" "),s("p",[a._v("环境准备：")]),a._v(" "),s("p",[a._v("首先切换下载源")]),a._v(" "),s("p",[a._v("wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.tencentyun.com/repo/centos7_base.repo")]),a._v(" "),s("p",[a._v("wget -O /etc/yum.repos.d/epel.repo http://mirrors.tencentyun.com/repo/epel-7.repo")]),a._v(" "),s("p",[a._v("或者是")]),a._v(" "),s("p",[a._v("wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo")]),a._v(" "),s("p",[a._v("wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")]),a._v(" "),s("p",[a._v("yum clean all")]),a._v(" "),s("p",[a._v("yum makecache")]),a._v(" "),s("p",[a._v("yum update")]),a._v(" "),s("p",[a._v("安装 mha 所需要的环境：")]),a._v(" "),s("p",[a._v("yum install compat-db mysql-libs perl-Compress-Raw-Bzip2 perl-Compress-Raw-Zlib perl-Config-Tiny perl-DBD-MySQL perl-DBI perl-Email-Date-Format perl-Log-Dispatch perl-Mail-Sender perl-Mail-Sendmail perl-MailTools perl-MIME-Base32 perl-MIME-Lite perl-MIME-Types perl-Parallel-ForkManager perl-Params-Validate perl-TimeDate perl-Time-HiRes")]),a._v(" "),s("p",[a._v("在所有节点端安装 mha node：rpm -ivh mha4mysql-node-0.56-0.el6.noarch.rpm")]),a._v(" "),s("p",[a._v("在管理端安装 node 和 manager ：rpm -ivh mha4mysql-manager-0.56-0.el6.noarch.rpm")]),a._v(" "),s("p",[s("strong",[a._v("开始配置 mha 高可用")])]),a._v(" "),s("p",[a._v("作业前提：所有节点需要配置无密码 ssh 登录，mha 检测环境需要用到；开放所有机器的 mysql 端口")]),a._v(" "),s("p",[s("strong",[a._v("在所有的 mysql 节点，创建用于 mha 的用户，mysql 配置好主从后，只用在一个机器中做配置即可")])]),a._v(" "),s("p",[a._v("CREATE USER 'mha_manager'@'%' IDENTIFIED BY '123456zzlZZL!';")]),a._v(" "),s("p",[a._v("GRANT ALL PRIVILEGES ON "),s("em",[a._v(".")]),a._v(" TO 'mha_manager'@'%' WITH GRANT OPTION;")]),a._v(" "),s("p",[a._v("FLUSH PRIVILEGES;")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240816102916342.png",alt:"image-20240816102916342"}}),a._v(" "),s("p",[a._v("看下 21 和 22 机器")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240816102939696.png",alt:"image-20240816102939696"}}),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/img/image-20240816103001090.png",alt:"image-20240816103001090"}}),a._v(" "),s("p",[a._v("对 mha manager 进行配置，通常位于 "),s("code",[a._v("/etc/mha.cnf")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("server1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 主服务器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hostname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.20\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mha_manager\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#password=123456zzlZZL!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ssh_user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("server2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从服务器1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hostname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.21\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mha_manager\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ssh_user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("server3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从服务器2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hostname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.22\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mha_manager\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ssh_user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("mha_manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# MHA Manager 配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("manager_user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mha_manager\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("manager_password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("123456zzlZZL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("p",[a._v("验证配置文件：masterha_check_repl --conf=/etc/mha.cnf")]),a._v(" "),s("p",[a._v("然后启动 mha manager：masterha_manager --conf=/etc/mha.cnf")]),a._v(" "),s("p",[s("strong",[a._v("问题1：可能会遇到之前主从配置的用户的权限问题")])]),a._v(" "),s("p",[a._v("GRANT REPLICATION SLAVE ON "),s("em",[a._v(".")]),a._v(" TO 'zzl'@'%' IDENTIFIED BY '123456zzlZZL!';")]),a._v(" "),s("p",[a._v("FLUSH PRIVILEGES;")]),a._v(" "),s("p",[s("strong",[a._v("问题2：log_bin 二进制文件位置找不到")])]),a._v(" "),s("p",[a._v("现在 master 上查看 log_bin 的位置：mysql -u root -p -e \"SHOW VARIABLES LIKE 'log_bin%';\"")]),a._v(" "),s("p",[a._v("在 mha manager 的配置文件中加入：master_binlog_dir=实际位置")]),a._v(" "),s("p",[a._v("例如，log_bin 在 /usr/local/mysql/data/ 下，那么就配置 master_binlog_dir=/usr/local/mysql/data/")]),a._v(" "),s("p",[s("strong",[a._v("问题3：mha manager 需要用到 mysqlbinlog")])]),a._v(" "),s("p",[a._v("确保 mysqlbinlog 工具存在并且在系统的 PATH 环境变量中，通常，mysqlbinlog 位于 MySQL 安装目录的 bin 子目录下")]),a._v(" "),s("p",[a._v("如果工具存在但路径不在 PATH 中，你可以通过以下命令来临时设置 PATH")]),a._v(" "),s("p",[a._v("export PATH=$PATH:/usr/local/mysql/bin")]),a._v(" "),s("p",[a._v("或者将其添加到 /etc/profile 文件中，以便系统重启后自动加载")]),a._v(" "),s("p",[a._v("echo 'export PATH=$PATH:/usr/local/mysql/bin' >> ~/.bashrc")]),a._v(" "),s("p",[a._v("source ~/.bashrc")]),a._v(" "),s("p",[a._v("mysqlbinlog --version：查看 mysqlbinlog 是否配置好")]),a._v(" "),s("p",[a._v("解决完所有问题后，正常启动成功")])])}),[],!1,null,null,null);s.default=n.exports}}]);