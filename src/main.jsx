import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchContextProvider } from './context/contextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </StrictMode>,
)
