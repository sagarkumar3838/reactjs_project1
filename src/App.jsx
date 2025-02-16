
import React from 'react'

import { BrowserRouter as Router, Routes, Route , useRouteError } from 'react-router-dom'
import AdminLogin from './component/Admin/AdminLogin'
import UserLogin from './component/User/UserLogin'
import LandingPage from './component/Login/LandingPage'
import AdminSignUp from './component/Admin/AdminSignUp'
import AdminHomePage from './component/main/AdminHomePage'
import ErrorPage from './component/ErrorPage'
import UserSignup from './component/User/UserSignup'
import UserHomePage from './component/User/UserHomePage'
import Overview from './component/outlet/Overview'
import Settings from './component/outlet/Settings'
import { Navbar } from '@material-tailwind/react'
import Header from './component/User/header'
import Footer from './component/User/Footer'
import ParentComponent from './component/outlet/ParentComponent'
import DataTable from './component/outlet/DataTable'
import UserDashboard from './component/userMain/UserDashboard'
import BookingConfirmation from './component/outlet/BookingConfirmation'
import Booking from './component/outlet/Booking'
import Bookings from './component/outlet/Bookings'
import EditBooking from './component/outlet/EditBooking'
const App = () => {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignUp />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/usersignUp" element={<UserSignup />} />
      <Route path="/adminhomepage/*" element={<AdminHomePage />} />


     
      <Route path='/userhomepage' element={<UserHomePage/>}>
     
      <Route index element={<Overview />} />
      <Route path="ticket" element={<DataTable />} /> {/* Child route */}
      <Route path="settings" element={<Settings />} />
      <Route path="bookings" element={<BookingConfirmation/>} />
      <Route path="editbooking/:id" element={<EditBooking/>} />
      <Route path="book" element={<Booking />} />
     
      <Route path="my-bookings" element={<Bookings />} />
     
      </Route>
      
      


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  )
}

export default App

// * browswerouter - remember path history