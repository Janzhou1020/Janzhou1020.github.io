(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{476:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ol",[n("li",[s._v("主服务器记录更改**：\n"),n("ul",[n("li",[s._v("在主服务器（Master）上，所有对数据库的写操作（INSERT、UPDATE、DELETE 等）都会被记录到二进制日志文件中。二进制日志不仅记录了每一个操作，还记录了操作发生的顺序和时间。")])])]),s._v(" "),n("li",[n("strong",[s._v("从服务器读取二进制日志")]),s._v("：\n"),n("ul",[n("li",[s._v("从服务器（Slave）会连接到主服务器，并通过 I/O 线程不断读取主服务器的二进制日志，然后将这些日志复制到本地的中继日志（Relay Log）中。")])])]),s._v(" "),n("li",[n("strong",[s._v("从服务器重放二进制日志")]),s._v("：\n"),n("ul",[n("li",[s._v("从服务器的 SQL 线程读取中继日志中的内容，并依次执行日志中的每一条语句。这些语句在从服务器上重放，从而使从服务器的数据与主服务器保持同步。")])])])]),s._v(" "),n("p",[s._v("这个过程是异步进行的，从服务器通常会有一定的延迟，这个延迟取决于网络状况、服务器负载等因素。")]),s._v(" "),n("p",[s._v("首先准备两个虚拟机，最好都安装相同版本的 mysql")]),s._v(" "),n("p",[s._v("保证两台 PC 可以互相通讯")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240813140739721.png",alt:"image-20240813140739721"}}),s._v(" "),n("p",[n("strong",[s._v("配置主数据库")])]),s._v(" "),n("p",[s._v("1.修改主数据库的配置文件，一般在 /etc/my.cnf")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver-id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlog-bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server-id=1：指定主服务器的 ID，确保每个服务器的 ID 唯一")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log-bin=mysql-bin：启用二进制日志，这是实现复制的基础")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("2.修改完配置文件后重启 mysql")]),s._v(" "),n("p",[s._v("3.创建复制用户，登录 mysql，并创建复制用户")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE USER 'zzl'@'10.0.0.21' IDENTIFIED BY '123456zzlZZL!';\n#授予用户 zzl 在所有数据库和所有表上的复制权限，允许它作为从服务器（slave）进行复制\nGRANT REPLICATION SLAVE ON *.* TO 'zzl'@'10.0.0.21';\nFLUSH PRIVILEGES;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240813141743576.png",alt:"image-20240813141743576"}}),s._v(" "),n("p",[s._v("4.锁定主数据库表并获取二进制日志信息")]),s._v(" "),n("p",[s._v("FLUSH TABLES WITH READ LOCK;")]),s._v(" "),n("p",[s._v("SHOW MASTER STATUS;")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#该命令将所有表刷新到磁盘，并且对整个数据库实例加上全局读锁（全局只读锁）\n#通过执行这个命令，可以确保在备份数据或记录主服务器状态（例如二进制日志位置）时，没有其他写操作改变数据库的数据状态，从而获得一个一致性快照\n#该锁禁止所有写操作（INSERT、UPDATE、DELETE、CREATE、DROP 等），但允许读操作（SELECT）\n#这个锁会阻塞所有写入操作，因此需要尽量缩短锁定时间\nFLUSH TABLES WITH READ LOCK;\n#显示主服务器当前的二进制日志文件名称和位置等信息。这些信息对于配置从服务器非常重要，因为从服务器需要知道从哪个日志文件和位置开始复制数据\nSHOW MASTER STATUS;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("记下 "),n("code",[s._v("File")]),s._v(" 和 "),n("code",[s._v("Position")]),s._v("，稍后在从服务器中使用")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240813142600263.png",alt:"image-20240813142600263"}}),s._v(" "),n("p",[s._v("mysql-bin.000001，761")]),s._v(" "),n("p",[s._v("5.开放 mysql 端口")]),s._v(" "),n("p",[n("strong",[s._v("从数据库配置")])]),s._v(" "),n("p",[s._v("修改从数据库配置文件 my.cnf，添加 server-id=2，确保唯一性")]),s._v(" "),n("p",[s._v("重启 MySQL 服务")]),s._v(" "),n("p",[s._v("设置从服务器与主服务器同步，登录 mysql，执行以下命令，根据实际情况执行")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CHANGE MASTER TO\nMASTER_HOST='10.0.0.20',\nMASTER_USER='zzl',\nMASTER_PASSWORD='123456zzlZZL!',\nMASTER_LOG_FILE='mysql-bin.000001',  -- 使用在主服务器中获取的日志文件名\nMASTER_LOG_POS=761;  -- 使用在主服务器中获取的位置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("启动复制进程：START SLAVE;")]),s._v(" "),n("p",[s._v("检测从数据库状态：SHOW SLAVE STATUS\\G;")]),s._v(" "),n("p",[s._v("确保 "),n("code",[s._v("Slave_IO_Running")]),s._v(" 和 "),n("code",[s._v("Slave_SQL_Running")]),s._v(" 都显示为 "),n("code",[s._v("Yes")])]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:"img\\image-20240813144535828.png",alt:"image-20240813144535828"}}),s._v(" "),n("p",[s._v("解锁主数据库：UNLOCK TABLES;")]),s._v(" "),n("p",[s._v("如果在复制进程启动后，"),n("code",[s._v("Slave_IO_Running")]),s._v(" 和 "),n("code",[s._v("Slave_SQL_Running")]),s._v(" 没有都为 "),n("code",[s._v("Yes")]),s._v("，在修改完相关配置，需要再重新启动复制进程")]),s._v(" "),n("p",[s._v("可能是因为主节点端口没有开放")]),s._v(" "),n("p",[s._v("STOP SLAVE，START SLAVE")])])}),[],!1,null,null,null);n.default=t.exports}}]);