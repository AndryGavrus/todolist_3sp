import {Main} from '@/app/Main'
import {Header} from '@/common/components/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import {useAppSelector} from '../common/hooks/useAppSelector'
import {getTheme} from '../common/theme/theme'
import {selectThemeMode} from './app-selectors'
import styles from './App.module.css'

export const App = () => {
  const themeMode = useAppSelector(selectThemeMode)

  const theme = getTheme(themeMode)

  return (
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <CssBaseline/>
          <Header/>
          <Main/>
        </div>
      </ThemeProvider>
  )
}
