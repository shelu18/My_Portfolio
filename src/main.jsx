import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@hooks/useTheme'
import App from './App.jsx'
import '@styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/My_Portfolio">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
