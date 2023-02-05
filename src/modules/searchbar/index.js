import './index.scss'

export function install() {
  const el = '<div class="custom-searchbar"><input id="q" type="text" placeholder="search..." onkeydown="return zzk_go_enter(event);"/></div>'
  $('#main').prepend(el)
  $('#sidebar_search').remove()
}

