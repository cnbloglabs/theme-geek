import { createTheme } from '@acnb/core'

const theme = createTheme()

const plugin = () => {
  console.log(1111)
}

theme.use(plugin)
