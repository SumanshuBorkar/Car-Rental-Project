import React, { useState } from 'react'
import UserLogin from '../User/UserLogin'
import UserSign from '../User/UserSign'
import AdminLogin from '../Admin/AdminLogin';
import AdminSign from '../Admin/AdminSign';
import './../Components/Style/Home.css'

function Home() {
  const [FormType, setFormType]  = useState(<UserLogin/>);
  function usersignup(){
    setFormType(<UserSign/>) 
  };

  function userlogin(){
    setFormType(<UserLogin/>) 
  };

  function Adminlogin(){
    setFormType(<AdminLogin/>) 
  };

  function AdminSignup(){
    setFormType(<AdminSign/>) 
  };
  return (
    <>
      <div className='Home-page'>  
        <div className='Register'>
        <p className='slogan'>All you needed was a wheel in hand and four on the road.</p> 
          <div className='user'>
            <p>User</p>
            <button className="button-50" onClick={userlogin}>Login User</button>
            <button className="button-50" onClick={usersignup}>Sign Up User</button>
          </div>
          <div className='Admin'>
            <p>Admin</p>
            <button className="button-50" onClick={Adminlogin}>Admin login</button>
            <button className="button-50" onClick={AdminSignup}>Admin Sign Up</button>
          </div>
        </div>   
        <div className='form-type'>
          {FormType}
        </div>
      </div>     
    </>
  )
}


export default Home