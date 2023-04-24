import React from 'react'
import './../Style/Payment.css'
import gogo from './../images/Logo.png'
import MapComponent from './Map'
import { CarContextDetails } from '../../Context/CarContext'
import { useContext } from 'react'

const API_BASE_URL = 'http://localhost:5000';

function PaymentCard() {

  const {CarData , setCarData} = useContext(CarContextDetails)
  console.log(CarData);
  const state = 'this is a joke'

  const Proceed = () => {
    fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        authorization: JSON.parse(localStorage.getItem('token-admin')),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state }),
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
    <div className='box'>
    <div className="container">
       <div className="cardetail">
          <div className="upper">
            <h3>Booking Details</h3>
            <div className="comp">
               <div className="data">
                   <li>Car Name   </li>
                   <li>Car Number</li>
               </div>
               <div className="data">
                   <li>{state}</li>
                   <li>Car Number</li>
               </div>
               <div className="image">
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
               <MapComponent/>
               </div>
          </div>
          <div className="lower">
                   <div className="bookingId">
                   <li>Booking ID: {}</li>
                   <li>Booking Date :{}</li>
                   <li>Booking Time: {}</li>
                   </div>
                   <div className="cancel-button-of-page">
                       <button>Cancel</button>
                   </div>
          </div>
       </div>
       <div className="payment">
         <div className="payupper">
           <h3>Payment Details</h3>
           <div className='order-details'>
           <div className="parameter">
             <ul className='list1'>
               <li>price/Km</li>
               <li>Pricing</li>
               <li>Tax Charges</li>
             </ul>
           </div>
           <div className="data">
           <ul className='list'>
               <li>{state}</li>
               <li>{state}</li>
               <li>{state}</li>
             </ul>
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