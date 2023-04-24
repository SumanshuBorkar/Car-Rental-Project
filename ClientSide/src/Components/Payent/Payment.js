import React,{useState} from 'react'
import './../Style/Payment.css'
import gogo from './../images/Logo.png'

function Payment() {
  const [state , setstate] = useState("this is an example")
  return (
    <div className='box'>
     <div className="containers">
        <div className="cardetail">
           <div className="upper">
             <h3>Booking Details</h3>
             <div className="comp">
                <div className="data">
                    <p>Car Name : {state}</p>
                    <p>Car Number : {state}</p>
                </div>
                <div className="image">
                    <img src={gogo} alt="not availble"  id='img'/>
                </div>
             </div>
           </div>
           <div className="midddle">
           <div className="data">
                    <p>Origin: {state}</p>
                    <p> Deatination: {}</p>
                    <p>Start-Dtate: {}</p>
                    <p>End-Date: {}</p>
                </div>
                <div className="image">
                <iframe width="500" height="300" src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000" className='img'></iframe>
                </div>
           </div>
           <div className="lower">
                    <div className="bookingId">
                    <p>Booking ID: {}</p>
                    <p>Booking Date :{}</p>
                    <p>Booking Time: {}</p>
                    </div>
                    <div className="cancel">
                        <button>Cancel</button>
                    </div>
           </div>
        </div>
        <div className="payment">
          <div className="payupper">
            <h3>Payment Details</h3>
            <div className="parameter">
              <p>price per km</p>
              <p>Pricing</p>
              <p>tax charges</p>
            </div>
            <div className="data">
              
            </div>
          </div>
          <div className="paylower">
           <p>SUB TOTAL</p>
           <p>1500r</p>
           <button>proceed</button>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Payment