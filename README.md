<div align="center">
<h1>星途物语</h1>

<p align="center"> 📖 Vdoing博客主题静态部署模板 📖</p>

**参考了很多方案后，将步骤总结了一下（部署在 github）**

参考博主：[二丫讲梵](https://wiki.eryajf.net/)

## 效果展示

![image-20250109134801064](/img/image-20250109134801064.png)



## 初始配置

首先访问模板仓库：https://github.com/eryajf/vdoing-template

点击此仓库右侧的 Use this template

<img src="/img/image-20250109112942649.png" alt="image-20250109112942649"  />

![image-20250109113052744](/img/image-20250109113052744.png)

> 仓库的名字将会是 GitHub Pages 的访问一级路由，如果配置为 demo，之后首页的访问路径是：https://Janzhou1020.github.io/demo
>
> 如果想让首页访问路径是：https://Janzhou1020.github.io，只需要将仓库命名为：Janzhou1020.github.io
>
> 如果你将仓库名设置为了：Janzhou1020.github.io，请不要忘记修改项目中的 config.js，将 base 的值修改为 /

创建完成之后，自己仓库中的项目内容如下：

![image-20250109113349713](/img/image-20250109113349713.png)

```sh
将代码克隆到本地：git clone https://github.com/Janzhou1020/demo.git
```

## ACCESS_TOKEN 设置

点击 头像 --> settings --> Developer-settings --> Personal access tokens --> Tokens(classic)  --> Generate new token --> Generate new token(classic)

基于演示，我这样选择了一下，需要选 workflow，工作流（Action）要用到权限

![image-20250109114746957](/img/image-20250109114746957.png)

![image-20250109114830691](/img/image-20250109114830691.png)

回到仓库 demo --> settings --> Secrets and variables --> Actions --> New repository secret

![image-20250109115101541](/img/image-20250109115101541.png)

![image-20250109133411743](/img/image-20250109133411743.png)

在 settings 页面别离开，接下来来到 Actions --> General --> Workflow permissions

选择 Read and write permissions

![image-20250109115255565](/img/image-20250109115255565.png)

## 调整内容

### 全局替换关键字

调整模板内关键字内容（vscode）：Ctrl + Shift + h 全局替换 vdoing-template --> 主题字符

![image-20250109113803713](/img/image-20250109113803713.png)

这样基本上就搞定了配置内容的一大步，剩下的就是一些修改美化方面的内容了

### 配置首页

首页的配置信息在 `docs/index.md` 这个文件当中，我们可以参照官方文档进行按需配置：https://doc.xugaoyi.com/pages/f14bdb/

### 配置评论

模板默认内置了 vssue 的评论组件，也是基于 github 的 issue 作为评论的存储数据

只需两步即可完成配置：

第一步：[点击此处](https://github.com/settings/applications/new)，进入创建页面：

![image-20250109115516137](/img/image-20250109115516137.png)

点击注册之后，就进入到了详情页面，可以看到`Client ID`，点击 `Generate a new client secret` 生成一个秘钥：

![image-20250109115602298](/img/image-20250109115602298.png)

第二步：将配置信息填写到 `docs/.vuepress/config.js` 中

```yaml
// vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "",
        clientSecret: "",
        owner: "Janzhou1020",
        repo: "demo",
      },
    ],
  ],
```

再看一下 ./.github/workflows/build-deploy.yml，可以自行设置一下分支，我这里设置部署到 blog-pages 分支

```yaml
name: Build Deploy

# 在main分支发生push事件时触发。
on:
  push:
    branches:
      - main

env: # 设置环境变量
  TZ: Asia/Shanghai # 时区（设置时区可使页面中的`最近更新时间`使用时区时间）

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: build project ⚗️
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: |
          npm install
          yarn build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        env: # 设置环境变量
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # toKen私密变量
        with:
          folder: docs/.vuepress/dist
          branch: blog-pages # 部署到的分支
```

### 进行代码提交

```git
git add .
git commit -m "demo"
git push origin main
```

![image-20250109120341030](/img/image-20250109120341030.png)

![image-20250109134357799](/img/image-20250109134357799.png)

## 最后配置

等 GitHub Actions 跑完之后，我们能看到分支当中多了一个 blog-pages 分支

![image-20250109134511351](/img/image-20250109134511351.png)

进入仓库 settings --> pages

![image-20250109134620668](/img/image-20250109134620668.png)

点击保存之后，静待一分钟，然后就可以访问上边提供的那个地址了

![image-20250109134702551](/img/image-20250109134702551.png)

如果你是按照此文档部署，那么可以 100% 成功，我已经部署了很多次

### 热部署

本地使用热部署启动 npm run dev

在package.json中的scripts中更改如下

```html
vuepress dev docs
```

更改为

```text
vuepress dev docs --temp .temp
```

项目启动后会生成".temp "的文件。如果不想引入到 git 上，在 gitignore上把它忽略就好了