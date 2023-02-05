import './style/index.scss'
import { createTheme } from '@acnb/core'
import {
  background,
  catalog,
  clickEffects,
  codeTrafficLight,
  colorMode,
  commentsAvatars,
  darkMode,
  emoji,
  imagePreview,
  license,
  live2d,
  musicPlayer,
  notice,
  postMessage,
  signature,
  tools,
  webTag,
} from '@acnb/plugins'

window.opts = {
  theme: {
    avatar: 'https://www.dummyimage.com/200/00b894/fff&text=A',
    headerBackground: 'https://www.dummyimage.com/600x200/6c5ce7/fff&text=,',
  },
  links: {
    enable: true,
    value: [
      {
        name: '⛵ Cnblog Labs',
        link: 'https://github.com/cnbloglabs',
      },
      {
        name: '🌴 友情连接',
        link: 'https://www.cnblogs.com/guangzan/p/15885313.html',
      },
      {
        name: '🛒 有来开源商城',
        link: 'https://www.youlai.tech',
      },
    ],
  },
}

Object
  .values(import.meta.glob('./modules/**/*.js', { eager: true }))
  .forEach(i => i.install())

createTheme()
  .use(codeTrafficLight, { enable: true })
  .use(clickEffects, { enable: false })
  .use(commentsAvatars, { enable: true })
  .use(colorMode, { enable: true, color: '#1B86F9' })
  .use(emoji, { enable: true })
  .use(imagePreview, { enable: true })
  .use(license, { enable: true })
  .use(webTag, { enable: true })
  .use(musicPlayer, { enable: false })
  .use(live2d, { enable: false })
  .use(darkMode, { enable: true })
  .use(notice, { enable: false })
  .use(postMessage, { enable: true })
  .use(
    signature,
    {
      enable: true,
      contents: [
        '欢迎使用皮肤 <b style="color:#3742fa">Geek</b>',
        '快去自定义签名吧~',
      ],
    },
    { selector: '.profile-signature' },
  )
  .use(
    background,
    { enable: true },
    { opacitySelector: '#left-side,#sideBar,#mainContent,#footer,.custom-searchbar' },
  )
  .use(
    catalog,
    { enable: true },
    {
      mountedNode: '.account',
      fn: 'after',
      scrollContainer: '#mainContent',
    },
  )
  .use(
    tools,
    { enable: true },
    {
      menuIconType: 'className',
      menuIcon: 'fa-angle-up',
      menuActiveIcon: 'fa-angle-down',
      scrollContainer: '#mainContent',
      toolbarItems: [
        {
          icon: 'fa-rocket rocket-rotate',
          iconType: 'className',
        },
        {
          enable: true,
          icon: 'fa-moon',
          iconType: 'className',
        },
        {
          icon: 'fa-thumbs-up',
          iconType: 'className',
        },
        {
          icon: 'fa-heart',
          iconType: 'className',
        },
        {
          icon: 'fa-star',
          iconType: 'className',
        },
        {
          icon: 'fa-comment-dots',
          iconType: 'className',
        },
      ],
    },
  )
