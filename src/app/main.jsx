import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Hub from './Hub.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Hub/>
    </BrowserRouter>
  </StrictMode>,
)
