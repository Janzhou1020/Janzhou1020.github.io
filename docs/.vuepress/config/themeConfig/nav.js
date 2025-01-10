// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '运维', link: '/oam', items: [
      { text: '随手记录', link: '/three/' },
      { text: '故障处理', link: '/three/' },
      { text: 'Nginx', link: '/three/' },
      { text: 'MySQL', link: '/three/' },
      { text: 'Ansible', link: '/three/' },
      { text: 'Docker', link: '/three/' },
      { text: 'Zabbix', link: '/three/' },
      { text: 'Prometheus', link: '/three/' },
      { text: 'GitLab', link: '/three/' },
      { text: 'Jenkins', link: '/three/' },
    ]
  },
  {
    text: '编程', link: '/pge', items: [
      { text: 'Shell', link: '/three/' },
      { text: 'Python', link: '/three/' },
    ]
  },
  { text: '瞬记', link: '/record/' },
  { text: '归档', link: '/archives/' },
]