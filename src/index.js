import './style/index.scss'
import { createTheme } from '@acnb/core'
import build from './build'
import {
  codeHighlight,
  codeLinenumbers,
  codeLang,
  codeCopy,
  postMessage,
  commentsAvatars,
  //   emoji, // todo
  themeColor,
  imagePreview,
  postSignature,
  titleFavicon,
  catalog,
  background,
  signature,
  clickEffects,
  musicPlayer,
  mode,
  tools,
  notice,
  live2d,
} from '@acnb/plugins'

const theme = createTheme()

build()

theme
  .use(codeHighlight)
  .use(notice, {
    enable: true,
    text: ['2131231'],
  })
  .use(codeLinenumbers)
  .use(postMessage)
  .use(commentsAvatars)
  //   .use(emoji)
  .use(imagePreview)
  .use(postSignature)
  .use(titleFavicon)
  .use(codeLang)
  .use(clickEffects, { enable: false })
  .use(themeColor, { color: '#1B86F9' })
  //   .use(musicPlayer, { enable: false })
  .use(live2d, {
    enable: false,
  })
  .use(mode, {
    enable: true,
    darkDefault: true,
    autoDark: false,
    autoLight: false,
  })
  .use(
    signature,
    {
      enable: true,
      contents: [
        '欢迎使用皮肤<b style="color:#3742fa">Geek</b>',
        '快去自定义签名吧~',
      ],
    },
    { selector: '.profile-signature' }
  )
  .use(
    background,
    {},
    {
      opacitySelector:
        '#left-side,#sideBar,#mainContent, #footer,.custom-searchbar',
    }
  )
  .use(
    catalog,
    {
      enable: true,
    },
    {
      selector: '.account',
      fn: 'after',
      scrollContainer: '#mainContent',
    }
  )
//   .use(codeCopy)
//   .use(
//     tools,
//     {},
//     {
//       toolbarItems: [
//         {
//           icon: 'fa-comment-dots',
//         },
//         {
//           icon: 'fa-star',
//         },
//         {
//           icon: 'fa-heart',
//         },
//         {
//           icon: 'fa-thumbs-up',
//         },
//         {
//           enable: true,
//           icon: 'fa-adjust',
//         },
//         {
//           icon: 'fa-rocket',
//         },
//       ],
//     }
//   )
