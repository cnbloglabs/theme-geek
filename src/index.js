import { createTheme } from '@acnb/core'
import './style/index.scss'

const theme = createTheme()

const plugin = () => {
  console.log(1111)
}

theme.use(plugin)
