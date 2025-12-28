import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing/LandingPage'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import FriendsPage from './pages/Friends/FriendsPage'
import MyPostsPage from './pages/MyPosts/MyPostsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/myposts" element={<MyPostsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
