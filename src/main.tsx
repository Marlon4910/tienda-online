import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { OnlineShopApp } from './OnlineShopApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnlineShopApp />
  </StrictMode>,
)
