import "./style/index.scss";
import { createTheme } from "@acnb/core";
import build from "./build";
import {
  codeHighlight,
  codeLinenumbers,
  codeLang,
  codeCopy,
  commentsAvatars,
  darkMode,
  emoji,
  postMessage,
  imagePreview,
  license,
  webTag,
  catalog,
  background,
  signature,
  clickEffects,
  musicPlayer,
  tools,
  notice,
  live2d,
  colorMode,
} from "@acnb/plugins";

createTheme()
  .use(build)
  .use(codeHighlight, { enable: true })
  .use(codeLinenumbers, { enable: true })
  .use(codeLang, { enable: true })
  .use(codeCopy, { enable: true })
  .use(clickEffects, { enable: false })
  .use(commentsAvatars, { enable: true })
  .use(colorMode, { enable: true, color: "#1B86F9" })
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
        '欢迎使用皮肤<b style="color:#3742fa">Geek</b>',
        "快去自定义签名吧~",
      ],
    },
    { selector: ".profile-signature" }
  )
  .use(
    background,
    {
      enable: true,
    },
    {
      opacitySelector:
        "#left-side,#sideBar,#mainContent, #footer,.custom-searchbar",
    }
  )
  .use(
    catalog,
    {
      enable: true,
    },
    {
      mountedNode: ".account",
      fn: "after",
      scrollContainer: "#mainContent",
    }
  )
  .use(
    tools,
    { enable: true },
    {
      menuIcon: "",
      toolbarItems: [
        {
          icon: "fa-comment-dots",
        },
        {
          icon: "fa-star",
        },
        {
          icon: "fa-heart",
        },
        {
          icon: "fa-thumbs-up",
        },
        {
          enable: true,
          icon: "fa-adjust",
        },
        {
          icon: "fa-rocket",
        },
      ],
    }
  );
