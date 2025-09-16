import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import 'tippy.js/dist/tippy.css'
import { generateTooltips } from './lib/util/tooltip'

// Generate tooltips after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  generateTooltips()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
