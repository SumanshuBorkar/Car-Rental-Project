import React, { useEffect, useState } from "react";
import './../Components/Style/myBooking.css';
import NavLogout from './NavLogout';
import Navigation from "../Components/Navigation";


export default function ExistBookings() {
    let [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/cars/")
      .then(res => res.json())
      .then(res => setdata(res));
  }, [])

    return <>
    <Navigation/>
    <NavLogout />
       
        {
            data.map((d, m) => {
                return <div key={m}>
                    <div id="outer">
                        <p>My Booking </p>
                        <div className="bookings">
                            <div id="myimg" className="smallerDiv" >
                                <img src={d.image} width="250px" />
                            </div>

                            <div id="toyota" className="smallerDiv">
                                <h3>{d.name}</h3>
                                <h5>KA 37 BB 9999</h5>
                                <h6>Car Details  Car Details</h6>
                                <h6>Car Details  Car Details</h6>
                            </div>

                            <div className="smallerDiv">
                                <div>origin : banglore</div>
                                <div>Destination : mysore</div>
                                <div>Start Date :{d.availablefrom}</div>
                                <div>Start Date :{d.availabletill}</div>
                            </div>
                            <div>
                                <img src={d.images} alt="image"></img>
                            </div>

                            <div className="smallerDiv">
                                <h6>Booking ID:GOTAB</h6>
                                <h6>Booking Date:16 june</h6>
                                <h6>Booking Time:4:00</h6>
                            </div>
                            <div className="smallerDiv" >
                                <div className="buttons">
                                    <button >Edit</button>
                                    <button >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>

}
