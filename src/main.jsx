import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import a theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact styles
import 'primeicons/primeicons.css'; // Import PrimeIcons
import App from './App.jsx'

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
