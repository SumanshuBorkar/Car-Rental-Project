import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import AdminPage from "./Components/AdminpageAllDetail/AdminPage";
import AddCarDetails from './Components/AdminpageAllDetail/AddCarDetails'
import UserLogin from './User/UserLogin';
import UserSign from './User/UserSign';
import EditCarDetails from './Components/AdminpageAllDetail/EditCarDetails';
import MyBooking from './Booking/MyBooking';
import OrderPage from './Booking/OrderPage';

function AppRouter() {
  return (
    <div>
     <Navigation/>
      <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/features' element={<UserLogin/>}/>
                <Route path='/pricing' element={<UserSign/>}/>
                <Route path='/admin-page' element={<AdminPage/>}/>
                <Route path='/add-car-details' element={<AddCarDetails/>}/>
                <Route path='/edit-car-details' element={<EditCarDetails/>}/>
                <Route path='/order' element={<OrderPage/>}/>
                <Route path='/Mybooking' element={<MyBooking/>}/>
              </Routes>
      </BrowserRouter>
          

    </div>
  )
}

export default AppRouter;