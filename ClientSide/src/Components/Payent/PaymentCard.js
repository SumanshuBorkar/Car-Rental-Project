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
    carDetails:CarData.carDetails,
    ...headerData,date:date,time:time,BookingId:BookingId,
  userId:userId
  };

const pricekm =Math.floor(Math.random() * 100);
const pricing = Math.floor(Math.random() * 10000);
const Tax = Math.floor(Math.random() * 100);
const total=(pricekm+pricing+Tax)
  const Proceed = () => {
  

   fetch("https://car-rental-app-server.onrender.com/orders",{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(Object)
   }).then(res=>res.json())
   .then(data=>console.log(data));


navigate("/ExistBookings")

  };
   
  return (<div>
    <div className='box-of-payment'>
    <div className="contanermaginc-lum">
       <div className="cardetail-app">
          <div className="upper">
            <h3>Booking Details</h3>
            <div className="comp">
               <div className="bobob">
                   <li className='name-of-the-page-payment-of-the-car'>Car Name :  </li>
                   <li className='name-of-the-page-payment-of-the-car'>Car Model:</li>
               </div>
               <div className="bobob">
                   <li className='ans-of-the-file-payment-in-data-of-file'>{CarData.name}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'>{CarData.model}</li>
               </div>
               <div className="image-of-car-in-rental-payment">
                   <img src={`https://car-rental-app-server.onrender.com/cars/${CarData.image}`} alt="not availble"  className='img'/>
               </div>
            </div>
          </div>
          <div className="midddle">
          <div className="data">
                   <li className='name-of-the-page-payment-of-the-car'>Origin : </li>
                   <li className='name-of-the-page-payment-of-the-car'> Deatination : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Start-Dtate : </li>
                   <li className='name-of-the-page-payment-of-the-car'>End-Date : </li>
               </div>
               <div className="data">
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.origin}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.destination}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.startDate}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.endDate}</li>
               </div>
               <div className="image-of-hte-map">
               <iframe className='map-of-doom' src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000"></iframe>
               </div>
          </div>
          <div className="lower">
                <div className="boomking-cont-dgg">
                <div className="bookingId">
                   <li className='name-of-the-page-payment-of-the-car'>Booking ID : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Booking Date : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Booking Time : </li>
                   </div>
                   <div className="bookingId">
                   <li className='ans-of-the-file-payment-in-data-of-file'>{BookingId}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'>{date}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {time}</li>
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
               <li className='name-of-the-page-payment-of-the-car'>price/Km</li>
               <li className='name-of-the-page-payment-of-the-car'>Pricing</li>
               <li className='name-of-the-page-payment-of-the-car'>Tax Charges</li>
           </div>
           <div className="data-gogog">
               <li className='ans-of-the-file-payment-in-data-of-file'>{pricekm}/KM</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{pricing} RS</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Tax} RS</li>
           </div>
           </div>
         </div>
         <div className="paylower">
          <li className='indiv-sub-class name-of-the-page-payment-of-the-car'>SUB TOTAL</li>
         <li  className='ans-of-the-file-payment-in-data-of-file-total'>{total} RS</li>
         </div>
         
         <button className='payment-button' onClick={Proceed}>proceed</button>

       </div>
    </div>
   </div>
   
   </div>
  )
}

export default PaymentCard