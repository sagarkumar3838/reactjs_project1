
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './component/Admin/AdminLogin'
import UserLogin from './component/User/UserLogin'
import LandingPage from './component/Login/LandingPage'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/userlogin" element={<UserLogin />} />
    </Routes>
  </Router>
  )
}

export default App

// * browswerouter - remember path history