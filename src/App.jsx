
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './component/Admin/AdminLogin'
import UserLogin from './component/User/UserLogin'
import LandingPage from './component/Login/LandingPage'
import AdminSignUp from './component/Admin/AdminSignUp'
import AdminHomePage from './component/main/AdminHomePage'
import ErrorPage from './component/ErrorPage'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignUp />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/adminhomepage/*" element={<AdminHomePage />} />
      
    </Routes>
  </Router>
  )
}

export default App

// * browswerouter - remember path history