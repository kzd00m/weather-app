import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import global styles
import App from './App.jsx' // Import the main App component

// Create a root and render the App component inside the element with id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Enables additional checks and warnings for development */}
    <App /> {/* Render the main App component */}
  </StrictMode>,
)
