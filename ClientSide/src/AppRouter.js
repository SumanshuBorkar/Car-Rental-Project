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
<<<<<<< Updated upstream
import MyBooking from "./Booking/MyBooking"
import OrderPage from "./Booking/OrderPage"

=======
import Payment from './Components/Payent/Payment';
>>>>>>> Stashed changes

function AppRouter() {
  return (
    <div className='whole' style={{marginTop:'-15px', padding:'0px', background:'black'}}>
      <Navigation/>
      <Router>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/features' element={<UserLogin/>}/>
                <Route path='/pricing' element={<UserSign/>}/>
                <Route path='/admin-page' element={<AdminPage/>}/>
                <Route path='/add-car-details' element={<AddCarDetails/>}/>
                <Route path='/edit-car-details' element={<EditCarDetails/>}/>
<<<<<<< Updated upstream
                <Route path='/order' element={<OrderPage/>}/>
                <Route path='/Mybooking' element={<MyBooking/>}/>
=======
                <Route path='/' element={<Payment/>}/>
>>>>>>> Stashed changes
              </Routes>
      </Router>
          
    </div>
  )
}

export default AppRouter;