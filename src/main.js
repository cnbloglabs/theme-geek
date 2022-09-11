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
import build from './build'

createTheme()
  .use(build)
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
    {
      enable: false,
      opacity: 1,
    },
    {
      opacitySelector:
        '#left-side,#sideBar,#mainContent, #footer,.custom-searchbar',
    },
  )
  .use(
    catalog,
    {
      enable: true,
    },
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
