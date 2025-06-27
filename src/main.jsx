import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchContextProvider } from './context/contextApi.jsx'
import { AuthContextProvider } from './context/authContextApi.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <AuthContextProvider >
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
    
  </StrictMode>,

)
