import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import MainPage from './pages/MainPage'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from "react-router"; 
import NotFoundPage from './pages/NotFoundPage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="101155765755-9t2fgbe69p6o6f9h5hd84lclvf1eo4pf.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
