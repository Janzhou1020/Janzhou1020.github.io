(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{486:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("https://www.cnblogs.com/anttech/p/10687163.html")]),t._v(" "),s("p",[t._v("由于 Nginx 不能动态加载大多数第三方模块，通常需要在编译时加入")]),t._v(" "),s("p",[t._v("场景1：在未安装 nginx 的情况下安装 nginx 第三方模块")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./configure \\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_stub_status_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_ssl_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_realip_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_image_filter_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--add-module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/nginx_module/ngx_cache_purge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--add-module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/nginx_module/echo-nginx-module-0.58\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /usr/local/nginx/sbin/nginx")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("场景2：在已安装 nginx 情况下安装 nginx 模块")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /usr/local/nginx/sbin/nginx -V")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./configure --prefix=/usr/local/nginx \\")]),t._v("\n--with-http_stub_status_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_ssl_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_realip_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_image_filter_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--add-module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/nginx_module/ngx_cache_purge\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp objs/nginx /usr/local/nginx/sbin/nginx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /usr/local/nginx/sbin/nginx -s reload")]),t._v("\n（已经安装的nginx不需要执行make install）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("nginx -V 查看 nginx 编译时启用的模块，输出中 --with-（内置） 和 --add-module（第三方） 参数后面列出的就是已启用的模块")]),t._v(" "),s("p",[t._v("常见内置模块")]),t._v(" "),s("ul",[s("li",[t._v("http_core_module：HTTP 服务的核心功能模块")]),t._v(" "),s("li",[t._v("http_ssl_module：支持 HTTPS（SSL/TLS）")]),t._v(" "),s("li",[t._v("http_proxy_module：实现反向代理功能")]),t._v(" "),s("li",[t._v("http_rewrite_module：用于 URI 重写和跳转规则")]),t._v(" "),s("li",[t._v("http_gzip_module：支持 Gzip 压缩，优化传输效率")]),t._v(" "),s("li",[t._v("http_upstream_module：配置后端服务器组和负载均衡")]),t._v(" "),s("li",[t._v("http_static_module：直接提供静态文件服务")]),t._v(" "),s("li",[t._v("http_limit_conn_module：限制客户端的并发连接数")]),t._v(" "),s("li",[t._v("http_limit_req_module：限制客户端的请求速率")]),t._v(" "),s("li",[t._v("http_stub_status_module：提供实时监控页面")])]),t._v(" "),s("p",[t._v("常见第三方模块")]),t._v(" "),s("ul",[s("li",[t._v("ngx_http_brotli_module：支持 Brotli 压缩，提高静态资源压缩率")]),t._v(" "),s("li",[t._v("ngx_http_headers_more_module：灵活设置或修改 HTTP 请求和响应头")]),t._v(" "),s("li",[t._v("ngx_http_auth_ldap_module：支持基于 LDAP 的身份认证")]),t._v(" "),s("li",[t._v("nginx-vts-module：提供详细的状态统计和图形化展示")]),t._v(" "),s("li",[t._v("ngx_http_image_filter_module：动态调整图片大小和格式")])])])}),[],!1,null,null,null);s.default=e.exports}}]);