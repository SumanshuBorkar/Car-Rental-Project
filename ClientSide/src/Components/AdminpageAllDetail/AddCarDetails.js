import React, { useContext, useEffect, useState } from "react"
import "../Style/AddCarDetail.css"
import FormStructure from "./FormStructure"
import { addCar } from "../../Utils/ApiUtils"
import { useNavigate } from "react-router-dom"
import { CarContextDetails } from "../../Context/CarContext"

export default function AddCarDetails(){
const navigator1= useNavigate();
const {setCar,data,setData} = useContext(CarContextDetails);


  
    function submitFunction(e){
     e.preventDefault();
        console.log(data)
        const newformData = new FormData(e.target)
        console.log(newformData)
        addCar(newformData).then(data=>{
            setCar(d=>{
              return [data,...d]
          })
          navigator1(-1)
       }
  
        
      );
    }
    return<>
    <div >
     <h2 id="name-of-car-detail">Add Car Details</h2>
     <form id="form-add-car-details" onSubmit={submitFunction}>
        <FormStructure data={data} setData={setData}/>
         <div className="input-gap-bottom " id="btn-cancle-add-detail-container">
         <button id="btn-cancle-add-detail" onClick={()=>navigator1(-1)}>Cancle</button>
         <button id="btn-Add-add-detail-ans-save">Add</button>
        </div>
     </form>
    
    </div>
    </>
}