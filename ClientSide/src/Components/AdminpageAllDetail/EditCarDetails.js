import FormStructure from "./FormStructure";
import "../Style/AddCarDetail.css"
import { CarContextDetails } from "../../Context/CarContext"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function EditCarDetails(){
    const {setCar,data,setData , setEdit} = useContext(CarContextDetails);
    const navigator = useNavigate();
    return<>
   <div >
   <h2 id="name-of-car-detail-edit"><i>Edit Car Details</i></h2>
     <form id="form-add-car-details">
        
        <FormStructure data={data} setData={setData}/>
         <div className="input-gap-bottom " id="btn-cancle-add-detail-container">
             <button id="btn-cancle-add-detail" onClick={navigator("/admin-page")}>Cancle</button>
             <button className="btn-Add-add-detail-ans-save" id="delete-btn-for-edit-page">Delete</button>
             <button className="btn-Add-add-detail-ans-save save-btn-details" >save</button>
        </div>
        
     </form>
    
    </div>

    </>
}