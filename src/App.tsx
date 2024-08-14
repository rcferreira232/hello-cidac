import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import RoutesComponent from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesComponent />
    </ThemeProvider>
  )
}

export default App
