import FormStructure from "./FormStructure";
import "../Style/AddCarDetail.css"


export default function EditCarDetails(){
    return<>
   <div >
   <h2 id="name-of-car-detail-edit"><i>Edit Car Details</i></h2>
     <form id="form-add-car-details">
   
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