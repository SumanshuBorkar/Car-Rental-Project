import { Input } from "@mui/material";
import { CarContextDetails } from "../../Context/CarContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/editFormpaymentdetails.css"
import NavLogout from "../../Booking/NavLogout";


export default function EditPaymentDetails(){
    const Navigate = useNavigate();
    const {EditPaymentDetails,setEditPaymentDetails ,setBookData } = useContext(CarContextDetails);

    const {BookingId,date,time,image,name,Details,carDetails,type ,pricing,pricekm,total,Tax,perKm}= EditPaymentDetails
   

    function editformsubmitFunc(e){
        e.preventDefault();

        fetch(`https://car-rental-app-server.onrender.com/orders/${EditPaymentDetails._id}` , {

          method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(EditPaymentDetails),
        }).then(res=>res.json())
        .then(data=>console.log(data))

    Navigate("/ExistBookings")

    }

return<>
<NavLogout/>
<h2 id="name-edit-details-payment-edit">Edit Payment Details</h2>
<form onSubmit={editformsubmitFunc} id="Edit-form-payment-details">
    <div id="form-leftside-edit-part-in-payment">
    <div id="edit-payment-details-block">
    <label>Car Name</label>
     <span id="name-of-the-car-edit-payment">{name}</span><br></br>
    <img src={`https://car-rental-app-server.onrender.com/cars/${image}`} id="image-edit-payment-details-in-data"></img>
    <label>Car Number</label>
    <span className="name-of-the-span-css-for-payment-details" id="type-of-the-car-in-payment">Ayx123</span><br/>
    </div>
    <hr></hr>
<div id="for-maip-i-created-container">
<iframe className='map-of-doom image-of-hte-map-of-the-edit-page' src="https://api.maptiler.com/maps/d83d5871-7ce5-440d-83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000"  ></iframe>

    <label >Origin</label>
    <input type="text" name="origin" className="edit-form-payment-details" id="origin-of-the-edit-page" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,origin:e.target.value})} value={EditPaymentDetails.origin}/><br/>
    <label>Destination</label>
    <input type="text" name="destination" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,destination:e.target.value})} value={EditPaymentDetails.destination} /><br/>
    <label>Start Date</label>
    <input type="date" name="startDate" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,startDate:e.target.value})} value={EditPaymentDetails.startDate} /><br/>
    <label>End Date</label>
    <input type="date" name="endDate" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,endDate:e.target.value})} value={EditPaymentDetails.endDate}/><br/>
    </div>
<hr></hr>
<label>Booking Id</label>
<span className="name-of-the-span-css-for-payment-details">{BookingId}</span><br></br>
<label>Booking Date</label>
<span className="name-of-the-span-css-for-payment-details">{date}</span><br></br>
<label >Booking Time</label>
<span className="name-of-the-span-css-for-payment-details">{time}</span><br></br>
<hr></hr>
<button id="btn-cancle-payment-details" onClick={()=>Navigate("/Existbookings")}>Cancle</button>
</div>
<div id="form-rightside-edit-part-in-payment">
    <label>pricekm</label>

    <span className="name-of-the-span-css-for-payment-details">{perKm}RS/KM</span><br></br>
    <label>pricing</label>
    <span className="name-of-the-span-css-for-payment-details">8956 RS</span><br></br>
    <label>tax charges</label>
    <span className="name-of-the-span-css-for-payment-details">90 RS</span><br></br>
    <hr></hr>
    <label className="name-of-the-span-css-for-payment-details-total-subtotal">subTotal</label>
    <span className="name-of-the-span-css-for-payment-details-total">9046 RS</span><br></br>
<div id="djknfkjnfkjwrnrfkw">
    <input type="checkbox" id="input-type-checkboc-payment-detais"/>
    <label>it is the long istablished fact that a render will be destracted by the readable content</label>
    </div>
    <br/>
     <button type="submit" id="btn-proceed-payment-details">Proceed</button>
</div>
 
</form>

</>
}
