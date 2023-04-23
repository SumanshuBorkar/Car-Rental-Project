import React, { useState } from 'react'
import './../Components/Style/Form.css'
// import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import { registerUserSignup } from '../API/API';
import "./../Components/Style/Form.css"

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

  // const navigate = useNavigate();

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

      const data = new FormData(e.target);
     


      console.log(data);

      // const config = {
      //   "Content-Type": "multipart/form-data"
      // }

      // const response = await registerUserSignup( data, config );

      // if ( response.status === 200 )
      // {
      //   setInputData( {
      //     ...inputdata,
      //     Name: "",
      //     email: "",
      //     Contact: "",
      //     password: "",
      //     Confirm_Password: ""
      //   } );
      //   // navigate("/");
      // } else
      // {
      //   toast.error( "Error!" )
      // }

      // console.log( email, password );

      fetch( `http://localhost:5000/user/signup`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body:JSON.stringify( data),
      } ).then( res => res.json() ).then( data => console.log( data ) )

      toast.success( "You are Logged in!" );
    }

  }

  return (
    <>
      <div className="container" id='form'>
        <h2 className='fom'>User Signin</h2>
        <form onSubmit={onSubmitData}>

          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" onChange={handleInput} placeholder='Name' />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleInput} placeholder='Email' />

          <label htmlFor="Contact">Contact</label>
          <input type="tel" name="Contact" onChange={handleInput} placeholder='Contact' />

          <label htmlFor="password">Password</label>
          <input type="password" onChange={handleInput} placeholder='password' name='password' />

          <label htmlFor="Confirm_Password">Confirm_Password</label>
          <input type="password" onChange={handleInput} placeholder='Confirm Password' name='Confirm_Password' />

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

export default UserSign



