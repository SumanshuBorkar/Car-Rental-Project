import React, { useContext, useEffect, useState } from "react";
import './../Components/Style/myBooking.css';
import NavLogout from './NavLogout';
import Navigation from "../Components/Navigation";
import { CarContextDetails } from "../Context/CarContext";
import {Link,useNavigate} from "react-router-dom"
import Home from "../Components/Home";


export default function ExistBookings() {
  
   const navigate=useNavigate();
   const {EditPaymentDetails ,Bookdata,setBookData, setEditPaymentDetails}=useContext(CarContextDetails);
   const TokenUser= JSON.parse(localStorage.getItem("token-user"))
    const userId=JSON.parse(localStorage.getItem("user-id"))
    useEffect(()=>{
     fetch(`https://car-rental-app-server.onrender.com/orders/${userId}`)
        .then(res=>res.json())
        .then(data=>setBookData((data.data).reverse()))
    },[])
    console.log(Bookdata)


    function deleteCarData(id){
        fetch(`https://car-rental-app-server.onrender.com/orders/${id}`, {
            method: 'DELETE',
            headers:{
                "authorization":JSON.parse(localStorage.getItem("token-user"))
            },
        }).then(res => {
            if(res.status === 200){
                return true
            }
            return false
        })
   
    }
  
    return <>
 
    {TokenUser?<>
    <NavLogout />
       
        {Bookdata.map((d, m) => {
                return <div key={m}>
                    <div id="outer">
                        <p>My Booking </p>
                        <div className="bookings">
                            <div id="myimg" className="smallerDiv" >
                                <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} width="250px" />
                            </div>

                            <div id="toyota" className="smallerDiv">
                                <h4 > Car Name: {d.name}</h4>
                                <h5> Car Type: {d.type}</h5>
                                <h6>Details: {d.Details}</h6>
                                <h6>Car Details: {d.carDetails}</h6>
                            </div>

                            <div className="smallerDiv">
                                <div>origin : {d.origin}</div>
                                <div>Destination : {d.destination}</div>
                                <div>Start Date :{d.startDate}</div>
                                <div>Start Date :{d.endDate}</div>
                            </div>
                            <div className="smallerDiv">
                            <iframe className='map-of-doom' src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000" id="dmslamdlmdkemkldm" ></iframe>
                            </div>

                            <div className="smallerDiv">
                                <h6>Booking ID: {d.BookingId}</h6>
                                <h6>Booking Date: {d.date}</h6>
                                <h6>Booking Time: {d.time}</h6>
                            </div>
                            <div className="smallerDiv" >
                                <div className="buttons">
                               <Link to="edit-payment-details" ><button id="btuunt-concle-in-exsist-Booking-edit" onClick={()=>setEditPaymentDetails(d)}>Edit</button></Link>   
                                    <button id="btuunt-concle-in-exsist-Booking" onClick={()=>deleteCarData(d._id)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>:<Home/>}
    </>

}
