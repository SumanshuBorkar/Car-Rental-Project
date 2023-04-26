import React, { useContext, useState } from 'react'
import "./../Components/Style/Form.css"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { json, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./../Components/Style/login.css"


function AdminLogin() {

  const Navigater = useNavigate();

    const [inputdata, setInputData] = useState({
        email: "",
        password: ""
      });
      
      const handleEmailChange = (e) => {
        setInputData({...inputdata, email: e.target.value});
      }
      
      const handlePasswordChange = (e) => {
        setInputData({...inputdata, password: e.target.value});
      }
      const [error ,setError] = useState("")

    // const navigate = useNavigate();

    const onSubmitData = async(e)=>{
        e.preventDefault();
        // console.log(inputdata);
        const {email, password} = inputdata;
        

        if(email=== ""){
            toast.error("Email is required");
        }
        else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
        else if (password === "") {
            toast.error("Password is required")
        }
        else if (password.length < 4) {
            toast.error("password is too short")
        }
        else if (password.length > 20) {
            toast.error("password is too Long")
        }
        else{
           fetch("https://car-rental-app-y59o.onrender.com/admin/login" ,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(inputdata)
          }).then(res=>res.json()).then(res=>{
            if(res.status==="Successfully login"){
              localStorage.setItem("token-admin" , JSON.stringify(res.token));
              localStorage.setItem("name-admin" , JSON.stringify(res.name))
              Navigater("/admin-page")
            }else if(res.status==="fail"){
              setError("Admin Details Not Match")
            }
          })
         
          //  window.location.reload();   
        }
    }

  return (
    <>
        <div className="container-of-login-form-in-my-side" id='form' >
      
        <form action="post">
        <h2 className='fom-name-in-login-form'>Admin Login</h2>
        <h6 style={{color:"red"}}>{error}</h6>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" onChange={handleEmailChange} placeholder='Email'  className='login-admin-the-css-for-form'/>


             <label htmlFor="password">Password</label>
             <input type="password" onChange={handlePasswordChange} placeholder='password' className='login-admin-the-css-for-form'/>
            <div id="button-container-in-admin-login-page"> <button type='submit' onClick={onSubmitData} id="button-container-in-admin-login-page-btn-admin-login">Submit</button></div>
            </form>
            <ToastContainer
               position="top-center"
               autoClose={1500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               theme="dark"
            />
        </div>
    </>
  )
}


export default AdminLogin

