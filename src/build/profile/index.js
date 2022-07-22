import './index.scss'
import { useThemeOptions } from '@acnb/options'
import { poll } from '../../utils/helpers'
import {
  getBlogAge,
  getBlogName,
  getFollowers,
  getFollowing,
} from '../../utils/cnblog'
import {
  appGroup, appIng, appQ, appWz,
  followersDetailsUrl,
  followingDetailsUrl,
  index,
} from '../../constants/links'

function createContainer() {
  return $('<div>').addClass('profile')
}

function createSignature() {
  return $('<div>').addClass('profile-signature')
}

function createBackground() {
  const { headerBackground } = useThemeOptions()
  const signatureWrap = createSignature()
  return $('<div>')
    .addClass('profile-banner')
    .css('backgroundImage', `url(${headerBackground})`)
    .append(signatureWrap)
}

function createMenu() {
  const el = $('<div>').addClass('profile-menu')
  const menuItem = [
    {
      title: '收藏',
      url: appWz,
    },
    {
      title: '闪存',
      url: appIng,
    },
    {
      title: '小组',
      url: appGroup,
    },
    {
      title: '博问',
      url: appQ,
    },
  ]

  menuItem.forEach((item) => {
    const menuItem = $('<a>')
      .attr('target', '_blank')
      .attr('href', item.url)
      .text(item.title)

    el.append(menuItem)
  })

  return el
}

function createBlur() {
  const { headerBackground } = useThemeOptions()
  return $('<div>')
    .addClass('profile-blur')
    .css('backgroundImage', `url(${headerBackground})`)
}

function createAvatar() {
  const { avatar } = useThemeOptions()

  return $('<div>')
    .addClass('profile-avatar')
    .append(
      $('<a>')
        .attr('href', index)
        .append(
          $('<div>')
            .addClass('avatar')
            .css({ background: `center / cover url("${avatar}") no-repeat` }),
        ),
    )
}

function createMessageElements() {
  return $('<div>')
    .addClass('profile-msg')
    .append(
      $('<p>')
        .append(
          $('<a>')
            .addClass('profile-nickname')
            .attr('href', index),
        ),
    )
    .append(
      $('<p>')
        .append(
          $('<span>')
            .addClass('profile-age')
            .text('园龄：'),
        )
        .append(
          $('<a>')
            .addClass('profile-followers')
            .attr('href', followersDetailsUrl)
            .text('粉丝：'),
        )
        .append(
          $('<a>')
            .addClass('profile-following')
            .attr('href', followingDetailsUrl)
            .text('关注：'),
        ),
    )
}

function createFollowButton() {
  $('.profile-nickname').after(
    $('#p_b_follow').addClass('profile-follow'),
  )
}

function setProfile() {
  const userName = getBlogName()
  const age = getBlogAge()
  const followers = getFollowers()
  const following = getFollowing()

  $('.profile-nickname').text(userName)
  $('.profile-age').append(age)
  $('.profile-followers').append(followers)
  $('.profile-following').append(following)
}

export default () => {
  const container = createContainer()
  const background = createBackground()
  const menu = createMenu()
  const blur = createBlur()
  const messageWrap = createMessageElements()
  const avatar = createAvatar()

  container
    .append(background)
    .append(menu)
    .append(blur)
    .append(avatar)
    .append(messageWrap)

  $('#mainContent').prepend(container)
  poll(() => $('#home #profile_block>a').length, setProfile)
  poll(() => $('#p_b_follow').length, createFollowButton)
}
