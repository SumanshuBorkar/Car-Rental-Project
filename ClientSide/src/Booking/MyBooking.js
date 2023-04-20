import React from "react";
import './../Components/Style/myBooking.css';
import NavLogout from './NavLogout'
import img from './image/car1.jpg';
import images from './image/map.png'
function MyBooking(){
    return(
        <>
       <NavLogout/>
      
        <div id="outer">
        <p>My Booking </p>
         <div className="bookings">
           <div id="img" className="smallerDiv" >
            <img src={img} width="250px"/>
           </div>

           <div id="toyota" className="smallerDiv">
            <h3>Toyota Innova</h3>
            <h5>KA 37 BB 9999</h5>
            <h6>Car Details  Car Details</h6>
            <h6>Car Details  Car Details</h6>
           </div>

           <div className="smallerDiv">
            <div>origin : Bangalore</div> 
            <div>Destination : Mysore</div> 
            <div>Start Date :16 june</div> 
            <div>Start Date :20 june</div> 
            </div>
            <div>
                <img src={images}></img>
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
        </>
    )
}
export default MyBooking;