const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "迷雾星途",
  description: 'vdoing博客主题模板',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liOItqVHBjQs2Mlo",
        clientSecret: "77cac56f580808132d91d5779a10d482614c0fb3",
        owner: "Janzhou1020",
        repo: "Janzhou1020.github.io",
      },
    ],
  ],
  themeConfig,
}