import React, { useState } from "react"
import Navigation from "../Navigation"
import "../Style/AddCarDetail.css"
import FormStructure from "./FormStructure"

export default function AddCarDetails(){

const [data, setData] = useState({
    name:"",
    type:"",
    model:"",
    milage:"",
    image:"",
    availableFrom:"",
    availableTill:"",
    perKm:"",
    description:"",
    carDetails:"",
    Details:""
})

  
    function submitFunction(){

    }
    return<>
    <div >
     <h2 id="name-of-car-detail">Add Car Details</h2>
     <form id="form-add-car-details" onSubmit={submitFunction}>
        <FormStructure/>
         <div className="input-gap-bottom " id="btn-cancle-add-detail-container">
         <button id="btn-cancle-add-detail">Cancle</button>
         <button id="btn-Add-add-detail-ans-save">Add</button>
        </div>
        
     </form>
    
    </div>
    </>
}