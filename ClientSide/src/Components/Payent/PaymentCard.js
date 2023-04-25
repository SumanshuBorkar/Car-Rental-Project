import React, { useEffect } from 'react'
import './../Style/Payment.css'
import gogo from './../images/Logo.png'
// import MapComponent from './Map'
import { CarContextDetails } from '../../Context/CarContext'
import { useContext } from 'react'

const API_BASE_URL = 'http://localhost:5000';

function PaymentCard() {

  const {car , setCar} = useContext(CarContextDetails)
  console.log(car);
  const reqdata = {
    "user_id": "12345fss",
    "carData": {
        "carName": "Toyota Camvarf",
        "carNumber": "ABC123as",
        "perKm": 5,
        "carImg": "https://example.com/carimg.jpg"
    },
    "tourData": {
        "Origin": "New Yorkss",
        "Destination": "Los Anvvgeles",
        "Startdate": "2023-05-01T00:00:00.000Z",
        "Enddate": "2023-05-10T00:00:00.000Z"
    },
    "bookingData": {
        "BookingID": "B123456",
        "BookingDate": "2023-04-25",
        "BookingTime": "2023-04-25T10:30:00.000Z"
    }
}

const state = "this is a joke"  

  const Proceed = () => {
    fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqdata) ,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        // handle error
      });
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
                   <li>Car Number</li>
               </div>
               <div className="bobob">
                   <li>{}</li>
                   <li>Car Number</li>
               </div>
               <div className="image-of-car">
                   <img src={gogo} alt="not availble"  className='img'/>
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
                   <li>Origin</li>
                   <li> {state}</li>
                   <li> {state}</li>
                   <li> {state}</li>
               </div>
               <div className="image-of-hte-map">
               <iframe className='map-of-doom' src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000"></iframe>
               </div>
          </div>
          <div className="lower">
                <div className="boomking-cont-dgg">
                <div className="bookingId">
                   <li>Booking ID: {}</li>
                   <li>Booking Date :{}</li>
                   <li>Booking Time: {}</li>
                   </div>
                   <div className="bookingId">
                   <li>Booking ID: {}</li>
                   <li>Booking Date :{}</li>
                   <li>Booking Time: {}</li>
                   </div>
                </div>
                   <div className="cancel-button-of-page">
                       <button className='cncl-brfd'>Cancel</button>
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
               <li>{state}</li>
               <li>{state}</li>
               <li>{state}</li>
           </div>
           </div>
         </div>
         <div className="paylower">
          <li className='indiv-sub-class'>SUB TOTAL</li>
          <p>{state}</p>
         </div>
         <button className='payment-button' onClick={Proceed}>proceed</button>
       </div>
    </div>
   </div>
  )
}

export default PaymentCard