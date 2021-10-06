import { createTheme } from '@acnb/core'
import { background } from '@acnb/plugins'
import './style/index.scss'

const theme = createTheme()

theme.use(background, {
  enable: true,
  value: '#ffb3cc',
})
