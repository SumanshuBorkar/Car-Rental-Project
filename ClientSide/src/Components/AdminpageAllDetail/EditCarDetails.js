import FormStructure from "./FormStructure";
import "../Style/AddCarDetail.css"


export default function EditCarDetails(){
    return<>
   <div >

     <form id="form-add-car-details">
     <h2 id="name-of-car-detail-edit">Edit Car Details</h2>
        <FormStructure/>
         <div className="input-gap-bottom " id="btn-cancle-add-detail-container">
             <button id="btn-cancle-add-detail">Cancle</button>
             <button className="btn-Add-add-detail-ans-save" id="delete-btn-for-edit-page" >Delete</button>
             <button className="btn-Add-add-detail-ans-save save-btn-details" >save</button>
        </div>
        
     </form>
    
    </div>

    </>
}