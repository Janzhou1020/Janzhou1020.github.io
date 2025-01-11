(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{474:function(s,a,l){"use strict";l.r(a);var n=l(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("添加 mysql 的 yum 源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#如果没有安装wget\nsudo yum install wget\n#获取mysql5.7的yum仓库\nwget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\n将mysql5.7版本的yum仓库添加到系统的yum仓库列表中\nrpm -ivh mysql57-community-release-el7-11.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("跳过公钥检测：--nogpgcheck")]),s._v(" "),a("p",[s._v("安装 mysql5.7：sudo yum install mysql-server")]),s._v(" "),a("p",[s._v("启动 mysql 并设置开机自启：sudo systemctl start mysqld & sudo systemctl enable mysqld")]),s._v(" "),a("p",[s._v("启动可能遇到问题  [ERROR] --initialize specified but the data directory has files in it. Aborting.")]),s._v(" "),a("p",[s._v("这个问题表示数据文件夹中已经有文件了，可以把默认数据存储位置下的文件删掉：rm -rf /var/lib/mysql/*")]),s._v(" "),a("p",[s._v("获取初始 root 密码：sudo grep 'temporary password' /var/log/mysqld.log")]),s._v(" "),a("p",[s._v("运行安全配置脚本：mysql_secure_installation")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240812135219510.png",alt:"image-20240812135219510"}}),s._v(" "),a("p",[a("strong",[s._v("二进制文件安装 mysql5.7")])]),s._v(" "),a("p",[s._v("1.下载 mysql5.7 二进制文件然后拉取到 /opt 目录下解压：tar -zxvf mysql-5.7.38-el7-x86_64.tar.gz")]),s._v(" "),a("p",[s._v("2.解压后可以重命名文件夹：mv mysql-5.7.38-el7-x86_64 mysql")]),s._v(" "),a("p",[s._v("3.创建 mysql 用户和组：groupadd mysql、useradd -r -g mysql -s /sbin/nologin mysql")]),s._v(" "),a("p",[s._v("4.初始化 mysql 数据目录：")]),s._v(" "),a("p",[s._v("cd 到 mysql 根目录下：./bin/mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data（mysql/data 提前创建）")]),s._v(" "),a("p",[s._v("--initialize：用于初始化数据目录。这个操作会创建 MySQL 数据库的必要系统表和目录结构，并生成一个新的 MySQL 数据库实例。它还会为 "),a("code",[s._v("root")]),s._v(" 用户生成一个随机的初始密码")]),s._v(" "),a("p",[s._v("5.修改 mysql 配置文件")]),s._v(" "),a("p",[s._v("注意几个路径：")]),s._v(" "),a("p",[s._v("basedir=/usr/local/mysql")]),s._v(" "),a("p",[s._v("datadir=/usr/local/mysql/data")]),s._v(" "),a("p",[s._v("log-error=/usr/local/mysql/log/mysqld.log")]),s._v(" "),a("p",[s._v("pid-file=/var/run/mysqld/mysqld.pid")]),s._v(" "),a("p",[s._v("slow_query_log_file = /usr/local/mysql/log/slow.log")]),s._v(" "),a("div",{staticClass:"language-tex line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tex"}},[a("code",[s._v("cat >> /etc/my.cnf  << EOF\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n#default-character-set=utf8\nbasedir=/usr/local/mysql\ndatadir=/usr/local/mysql/data\nsocket=/tmp/mysql.sock\nserver-id=1\nport=3306\ninnodb_flush_log_at_trx_commit=0\ninnodb_autoextend_increment=128M\ninnodb_log_buffer_size=20M\ninnodb_log_file_size=128M\ninnodb_buffer_pool_size=2024M\nback_log=500\nwait_timeout=1800\nmax_connections=3000\nquery_cache_size=50M\nread_buffer_size=4M\nsort_buffer_size=4M\nread_rnd_buffer_size=8M\nsymbolic-links=0\nopen_files_limit  = 5000\ntmp_table_size=56M\nbinlog_cache_size = 1M\nthread_cache_size=64\nlog-error=/usr/local/mysql/log/mysqld.log\npid-file=/var/run/mysqld/mysqld.pid\nlog-bin = mysql-bin\nbinlog_format=mixed\nexpire_logs_days=10\ncharacter-set-server=utf8\nslow_query_log = ON\nslow_query_log_file = /usr/local/mysql/log/slow.log\nlong_query_time = 5\n#slave_parallel-type=LOGICAL_CLOCK\n#slave_parallel_workers=2\n#master_info_repository=TABLE\n#relay_log_info_repository=TABLE\n#relay_log_recovery=ON\nEOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("p",[s._v("6.在 "),a("code",[s._v("mysql.server")]),s._v(" 脚本中修改 "),a("code",[s._v("basedir")]),s._v(" 和 "),a("code",[s._v("datadir")]),s._v("，确保 MySQL 服务器能够正确地找到其所需的目录和文件")]),s._v(" "),a("p",[s._v("cp support-files/mysql.server mysqld")]),s._v(" "),a("p",[s._v("sed -i '46s/basedir=/basedir=/usr/local/mysql/g' /usr/local/mysql/mysqld\nsed -i '47s/datadir=/datadir=/usr/local/mysql/data/g' /usr/local/mysql/mysqld")]),s._v(" "),a("p",[s._v("7.创建刚刚在 my.cnf 中指定的日志文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /usr/local/mysql/log/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /var/run/mysqld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /usr/local/mysql/log/mysqld.log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /var/run/mysqld/mysqld.pid\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /usr/local/mysql/log/slow.log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql:mysql /usr/local/mysql\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql:mysql /var/run/mysqld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /usr/local/mysql/data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("8.启动和登录mysql：./mysqld start，./bin/mysql -uroot -p")]),s._v(" "),a("p",[s._v("操作时告知需要重置密码")]),s._v(" "),a("p",[a("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240812170343154.png",alt:"image-20240812170343154"}}),s._v("9.修改本地管理员密码")]),s._v(" "),a("p",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';")]),s._v(" "),a("p",[s._v("FLUSH PRIVILEGES;")]),s._v(" "),a("p",[s._v("10.可以正常使用了")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240812173520601.png",alt:"image-20240812173520601"}})])}),[],!1,null,null,null);a.default=e.exports}}]);