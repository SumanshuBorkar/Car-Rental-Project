import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {addUser} from "../Utils/ApiUtilUser"
import "./../Components/Style/login.css"

function UserSign () {

  const [inputdata, setInputData] = useState( {
    Name: "",
    email: "",
    Contact: "",
    password: "",
    Confirm_Password: ""
  } );

  const handleInput = ( e ) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData( { ...inputdata, [name]: value } );
  }

  const navigate = useNavigate();
const [err, setErr]= useState("")
  const onSubmitData = async ( e ) => {
    e.preventDefault();
    console.log( inputdata );
    const { Name, email, Contact, password, Confirm_Password } = inputdata;

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
    else if ( Contact.length < 10 )
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
      toast.error( "C is not Matching" )
    }
    else
    {
      addUser(inputdata).then(data=>{
        if(data.status==="Failed"){
          setErr("User Allready Exists")
        }else if(data.status==="Success"){
          toast.success("Register Successfully");
          setInputData({
            Name: "",
            email: "",
            contact: "",
            password: "",
            Confirm_Password: ""
          })
          toast.success("Register SuceessFully");
        }
      });
 
 }

}

  return (
    <>
      <div className="container-of-login-form-in-my-side" id='form'>
      
        <form onSubmit={onSubmitData}>
        <h2 className='fom-name-in-login-form'>User SignUp</h2>
        <h6 style={{color:"red"}}>{err}</h6>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Name'  value={inputdata.Name}/>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Email' value={inputdata.email} />

          <label htmlFor="Contact">Contact</label>
          <input type="tel" name="Contact" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Contact' value={inputdata.Contact}/>

          <label htmlFor="password">Password</label>
          <input type="password" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='password' name='password' value={inputdata.password} />

          <label htmlFor="Confirm_Password">Confirm_Password</label>
          <input type="password" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Confirm Password' name='Confirm_Password' value={inputdata.Confirm_Password}/>

          <div id="button-container-in-admin-login-page"> <button type='submit' id="button-container-in-admin-login-page-btn">Submit</button></div>
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

export default UserSign



