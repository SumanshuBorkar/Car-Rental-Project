import React, { useEffect } from 'react'
import './../Style/Payment.css'
import gogo from './../images/Logo.png'
import { CarContextDetails } from '../../Context/CarContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function PaymentCard() {
const userId=JSON.parse(localStorage.getItem("user-id"))
const navigate= useNavigate();

  const {CarData , headerData,setBookingDetails,bookingDetails} = useContext(CarContextDetails)
  console.log(CarData)
  const date= new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const BookingId= new Date().getTime();
  const Object ={name:CarData.name,
    model:CarData.model,
    milage:CarData.milage,
    image:CarData.image,
    type:CarData.type,
    Details:CarData.Details,
    carDetails:CarData.Details,
    ...headerData,date:date,time:time,BookingId:BookingId,
  userId:userId
  };
 
  
  const Proceed = () => {
  

   fetch("http://localhost:5000/orders",{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(Object)
   }).then(res=>res.json())
   .then(data=>console.log(data));


navigate("/ExistBookings")

  };
   
  return (
    <div className='box-of-payment'>
    <div className="contanermaginc-lum">
       <div className="cardetail-app">
          <div className="upper">
            <h3>Booking Details</h3>
            <div className="comp">
               <div className="bobob">
                   <li>Car Name   </li>
                   <li>Car Model</li>
               </div>
               <div className="bobob">
                   <li>{CarData.name}</li>
                   <li>{CarData.model}</li>
               </div>
               <div className="image-of-car">
                   <img src={`http://localhost:5000/cars/${CarData.image}`} alt="not availble"  className='img'/>
               </div>
            </div>
          </div>
          <div className="midddle">
          <div className="data">
                   <li>Origin</li>
                   <li> Deatination</li>
                   <li>Start-Dtate</li>
                   <li>End-Date</li>
               </div>
               <div className="data">
                   <li> {headerData.origin}</li>
                   <li> {headerData.destination}</li>
                   <li> {headerData.startDate}</li>
                   <li> {headerData.endDate}</li>
               </div>
               <div className="image-of-hte-map">
               <iframe className='map-of-doom' src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000"></iframe>
               </div>
          </div>
          <div className="lower">
                <div className="boomking-cont-dgg">
                <div className="bookingId">
                   <li>Booking ID:</li>
                   <li>Booking Date :</li>
                   <li>Booking Time:</li>
                   </div>
                   <div className="bookingId">
                   <li>{BookingId}</li>
                   <li>{date}</li>
                   <li> {time}</li>
                   </div>
                </div>
                   <div className="cancel-button-of-page">
                       <button className='cncl-brfd' onClick={()=>navigate("/orderpage")}>Cancel</button>
                   </div>
          </div>
       </div>
       <div className="payment">
         <div className="payupper">
           <h3>Payment Details</h3>
           <div className='order-details'>
           <div className="parameter">
               <li>price/Km</li>
               <li>Pricing</li>
               <li>Tax Charges</li>
           </div>
           <div className="data-gogog">
               <li>{CarData.milage}</li>
               <li>{CarData.milage}</li>
               <li>{CarData.milage}</li>
           </div>
           </div>
         </div>
         <div className="paylower">
          <li className='indiv-sub-class'>SUB TOTAL</li>
         
         </div>
         
         <button className='payment-button' onClick={Proceed}>proceed</button>

       </div>
    </div>
   </div>
  )
}

export default PaymentCard