import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing/LandingPage'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
