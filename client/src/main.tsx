import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App/Layout/index.css'
import App from './App/Layout/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
