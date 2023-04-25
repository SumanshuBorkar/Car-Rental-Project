import { Input } from "@mui/material";
import { CarContextDetails } from "../../Context/CarContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/editFormpaymentdetails.css"
import NavLogout from "../../Booking/NavLogout";


export default function EditPaymentDetails(){
    const Navigate = useNavigate();
    const {EditPaymentDetails,setEditPaymentDetails ,setBookData } = useContext(CarContextDetails);

    const {BookingId,name,type,date,time,endDate,startDate,destination,image,origin,userId}= EditPaymentDetails
    const pricekm =Math.floor(Math.random() * 100);
    const pricing = Math.floor(Math.random() * 10000);
    const Tax = Math.floor(Math.random() * 100);
    const total=(pricekm+pricing+Tax)

    function editformsubmitFunc(e){
        e.preventDefault();
        fetch(`http://localhost:5000/orders/${EditPaymentDetails._id}` , {
          method:"PATCH",
        //   headers:{
        //     "content-type":"application-json"
        //   },
          body:EditPaymentDetails,
        }).then(res=>res.json())
        .then(data=>setBookData([data]))

    Navigate("/ExistBookings")
    }

return<>
<NavLogout/>
<h2 id="name-edit-details-payment-edit">Edit Payment Details</h2>
<form onSubmit={editformsubmitFunc} id="Edit-form-payment-details">
    <div id="form-leftside-edit-part-in-payment">
        <div id="edit-payment-details-block">
    <label>Car Name</label>
    <input type="text" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,name:e.target.value})} value={name}/><br/>
    <img src={`http://localhost:5000/cars/${image}`} id="image-edit-payment-details-in-data"></img>
    <label>Car Type</label>
    <span className="name-of-the-span-css-for-payment-details">{}</span><br/>
    </div>
    <hr></hr>

    <label>Origin</label>
    <input type="text" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,origin:e.target.value})} value={origin}/><br/>
    <label>Destination</label>
    <input type="text" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,destination:e.target.value})} value={destination} /><br/>
    <label>Start Date</label>
    <input type="date" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,startDate:e.target.value})} value={startDate} /><br/>
    <label>End Date</label>
    <input type="date" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,endDate:e.target.value})} value={endDate}/><br/>
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
    <span className="name-of-the-span-css-for-payment-details">{pricekm}/KM</span><br></br>
    <label>pricing</label>
    <span className="name-of-the-span-css-for-payment-details">{pricing}/RS</span><br></br>
    <label>tax charges</label>
    <span className="name-of-the-span-css-for-payment-details">{Tax} RS</span><br></br>
    <hr></hr>
    <label className="name-of-the-span-css-for-payment-details-total-subtotal">subTotal</label>
    <span className="name-of-the-span-css-for-payment-details-total">{total} RS</span><br></br>
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