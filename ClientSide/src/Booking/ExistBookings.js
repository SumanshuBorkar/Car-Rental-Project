import React, { useContext, useEffect, useState } from "react";
import './../Components/Style/myBooking.css';
import NavLogout from './NavLogout';
import Navigation from "../Components/Navigation";
import { CarContextDetails } from "../Context/CarContext";
import {Link,useNavigate} from "react-router-dom"


export default function ExistBookings() {
   const [data, setData]= useState([])
   const navigate=useNavigate();

    const userId=JSON.parse(localStorage.getItem("user-id"))
    useEffect(()=>{
     fetch(`http://localhost:5000/orders/${userId}`)
        .then(res=>res.json())
        .then(data=>setData(data.data))
    },[])


    function deleteCarData(id){
        fetch(`http://localhost:5000/orders/${id}`, {
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
        window.location.reload();
    }
    return <>
 
    <NavLogout />
       
        {data.map((d, m) => {
                return <div key={m}>
                    <div id="outer">
                        <p>My Booking </p>
                        <div className="bookings">
                            <div id="myimg" className="smallerDiv" >
                                <img src={`http://localhost:5000/cars/${d.image}`} width="250px" />
                            </div>

                            <div id="toyota" className="smallerDiv">
                                <h3> Car Name: {d.name}</h3>
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
                            <div>
                                <img src={``} alt="image"></img>
                            </div>

                            <div className="smallerDiv">
                                <h6>Booking ID: {d.BookingId}</h6>
                                <h6>Booking Date: {d.date}</h6>
                                <h6>Booking Time: {d.time}</h6>
                            </div>
                            <div className="smallerDiv" >
                                <div className="buttons">
                                   <button  onClick={()=>navigate(-1)}>Edit</button>
                                    <button onClick={()=>deleteCarData(d._id)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>

}
