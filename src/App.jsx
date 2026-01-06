import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing/LandingPage'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import MyPostsPage from './pages/MyPosts/MyPostsPage'
import WritePage from './pages/Write/WritePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myposts" element={<MyPostsPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
