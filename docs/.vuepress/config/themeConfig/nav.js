// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '运维', link: '/oam', items: [
      { text: '随手记录', link: '/hdd/' },
      { text: '故障处理', link: '/fhd/' },
      { text: 'Nginx', link: '/nginx/' },
      { text: 'MySQL', link: '/mysql/' },
      { text: 'Ansible', link: '/ansible/' },
      { text: 'Docker', link: '/docker/' },
      { text: 'Zabbix', link: '/zabbix/' },
      { text: 'Prometheus', link: '/three/' },
      { text: 'GitLab', link: '/gitlab/' },
      { text: 'Jenkins', link: '/jenkins/' },
    ]
  },
  {
    text: '编程', link: '/pge', items: [
      { text: 'Shell', link: '/shell/' },
      { text: 'Python', link: '/python/' },
    ]
  },
  {
    text: '瞬记', link: '/record/', items: [
    { text: '圈圈空间', link: '/qqspace/' },
    { text: '做饭这件事', link: '/cooking/' },
  ]
  },
  { text: '归档', link: '/archives/' },
]