import React, { useContext, useState } from 'react'
import "./../Components/Style/Form.css"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { json, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CarContextDetails } from '../Context/CarContext';


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
           fetch("http://localhost:5000/admin/login" ,{
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
            }else{
              Navigater("/home")
            }
          })
         
          //  window.location.reload();   
        }
    }

  return (
    <>
        <div className="container" id='form' >
        <h2 className='fom'>Admin Login</h2>
        <form action="post">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" onChange={handleEmailChange} placeholder='Email'  />


             <label htmlFor="password">Password</label>
             <input type="password" onChange={handlePasswordChange} placeholder='password'/>
             <button type='submit' onClick={onSubmitData}>Submit</button>
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

