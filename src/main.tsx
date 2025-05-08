import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/plus-jakarta-sans';
import './index.css'
// Supports weights 200-800
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
