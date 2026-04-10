import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ComingSoon from './components/ComingSoon.jsx'

// 🔥 Toggle here
const isLive = false

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLive ? <App /> : <ComingSoon />}
  </StrictMode>
)