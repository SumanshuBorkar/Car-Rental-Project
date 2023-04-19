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
  
}


export default Home