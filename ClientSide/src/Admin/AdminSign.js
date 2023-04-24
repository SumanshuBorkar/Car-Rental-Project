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

  const {setAdminName} = useContext(CarContextDetails)

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
      addAdmin(inputdata).then(data=>{
        console.log(data.user)
        setAdminName(inputdata.Name)
    })

   
    navigate("/admin-page")


    }

  }

  return (
    <>
      <div className="container" id='form'>
        <h2 className='fom'>Admin Signin</h2>
        <form onSubmit={onSubmitData}>

        <label >Name</label>
          <input type="text" name="Name" onChange={e=>setInputData({...inputdata,Name:e.target.value})} value={inputdata.Name} placeholder='Name' />

          <label >Email</label>
          <input type="email" name="email" onChange={e=>setInputData({...inputdata,email:e.target.value})} value={inputdata.email} placeholder='Email' />

          <label >Contact</label>
          <input type="tel" name="contact" onChange={e=>setInputData({...inputdata,contact:e.target.value})} value={inputdata.contact} placeholder='Contact' />

          <label>Password</label>
          <input type="password" onChange={e=>setInputData({...inputdata,password:e.target.value})} value={inputdata.password} placeholder='password' name='password' />

          <label >Confirm_Password</label>
          <input type="password" onChange={e=>setInputData({...inputdata,Confirm_Password:e.target.value})} value={inputdata.Confirm_Password} placeholder='Confirm Password' name='Confirm_Password' />

          <button type='submit'>Submit</button>
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

