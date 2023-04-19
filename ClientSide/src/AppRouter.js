import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserLogin from './User/UserLogin';
import UserSign from './User/UserSign';
import './Components/Style/AppRouter.css'

function AppRouter() {
  return (
    <div className='whole'>
      <Navigation/>
      <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/features' element={<UserLogin/>}/>
                <Route path='/pricing' element={<UserSign/>}/>
              </Routes>
      </Router>
          
    </div>
  )
}

export default AppRouter