import React, { useState , useContext} from 'react'
import './../Components/Style/Form.css'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {addAdmin} from ".././Utils/ApiUtilAdmin";
import {CarContextDetails} from "../Context/CarContext"



function AdminSign() {
  const [inputdata, setInputData] = useState( {
    Name: "",
    email: "",
    contact: "",
    password: "",
    Confirm_Password: ""
  } );
  const [err, setErr] = useState("");
const [loder,setLoder] = useState(false)
  

  const navigate = useNavigate();

  const onSubmitData = async ( e ) => {
    e.preventDefault();
 
    const { Name, email, contact, password, Confirm_Password } = inputdata;
    if ( email === "" )
    {
      toast.error( "Email is required" );
    }
    else if ( Name === "" )
    {
      toast.error( "Enter Valid Email !" )
    }
    else if ( !email.includes( "@" ) )
    {
      toast.error( "Enter Valid Email !" )
    }
    else if ( contact.length < 10 )
    {
      toast.error( "Enter Valid Phone number!" )
    }
    else if ( password === "" )
    {
      toast.error( "Password is required" )
    }
    else if ( password.length < 4 )
    {
      toast.error( "password is too short" )
    }
    else if ( password.length > 20 )
    {
      toast.error( "password is too Long" )
    }
    else if ( Confirm_Password !== password )
    {
      toast.error( "password is not Matching" )
    }
    else
    {
      setLoder(true);
      addAdmin(inputdata).then(data=>{
        if(data.status==="Failed"){
          setLoder(false)
          setErr("User Allready Exists")
        }else if(data.status==="Success"){
          toast.success("Register Successfully");
          setLoder(false)
          setErr("")
          setInputData({
            Name: "",
            email: "",
            contact: "",
            password: "",
            Confirm_Password: ""
          })
      
        }
      
    })
    }

  }

  return (
    <>
      <div className="container-of-login-form-in-my-side"  id='form'>
 
        <form onSubmit={onSubmitData}>
        <h2 className='fom-name-in-login-form'>Admin SignUp</h2>
        <h6 style={{color:"red"}}>{err}</h6>
        <label >Name</label>
          <input type="text" name="Name" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,Name:e.target.value})} value={inputdata.Name} placeholder='Name' />

          <label >Email</label>
          <input type="email" name="email" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,email:e.target.value})} value={inputdata.email} placeholder='Email' />

          <label >Contact</label>
          <input type="tel" name="contact" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,contact:e.target.value})} value={inputdata.contact} placeholder='Contact' />

          <label>Password</label>
          <input type="password" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,password:e.target.value})} value={inputdata.password} placeholder='password' name='password' />

          <label >Confirm_Password</label>
          <input type="password" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,Confirm_Password:e.target.value})} value={inputdata.Confirm_Password} placeholder='Confirm Password' name='Confirm_Password' />

          <div id="button-container-in-admin-login-page">  <button type='submit' id="button-container-in-admin-login-page-btn" >{loder?<div id="loder-of-the-button-of-the-login-submit"></div> :"Submit"}</button></div>
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

export default AdminSign

