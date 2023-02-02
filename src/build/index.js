import cards from './cards'
import rightSide from './rightSide'
import searchbar from './searchbar'
import profile from './profile'
import leftSide from './leftSide'
import mobileMenu from './mobileMenu'
import nextPrevPost from './next-prev-post'

const removeClearel = () => {
  $('.clear').remove()
}

const moveFooterToMain = () => {
  $('#footer').appendTo('#main')
}

export default () => {
  removeClearel()
  moveFooterToMain()
  cards()
  rightSide()
  searchbar()
  profile()
  leftSide()
  mobileMenu()
  nextPrevPost()
}
