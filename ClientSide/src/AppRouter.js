import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserLogin from './User/UserLogin';
import UserSign from './User/UserSign';
import './Components/Style/AppRouter.css'
import AdminPage from "./Components/AdminpageAllDetail/AdminPage"
import AddCarDetails from "./Components/AdminpageAllDetail/AddCarDetails"
import EditCarDetails from './Components/AdminpageAllDetail/EditCarDetails';
import Booking from './Booking/MyBooking';
import Order from './Booking/OrderPage';


function AppRouter() {
  return (
    <div className='whole'>
      <div></div>
      <Navigation/>
      <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/features' element={<UserLogin/>}/>
                <Route path='/pricing' element={<UserSign/>}/>
                <Route path='/admin-page' element={<AdminPage/>}/>
                <Route path='/add-car-details' element={<AddCarDetails/>}/>
                <Route path='/edit-car-details' element={<EditCarDetails/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/Mybooking' element={<Booking/>}/>
              </Routes>
      </Router>
          
    </div>
  )
}

export default AppRouter;