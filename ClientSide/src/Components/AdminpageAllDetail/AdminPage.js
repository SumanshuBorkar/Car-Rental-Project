import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { GetCars } from "../../Utils/ApiUtils";
import { CarContextDetails } from "../../Context/CarContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import "../Style/AdminPage.css"
import AdminpageNav from "./AdminpageNav";
import { useNavigate } from "react-router-dom";
import Home from "../Home"

export default function AdminPage() {
   
 const Navigater= useNavigate();
 const TokenAdmin= JSON.parse(localStorage.getItem("token-admin"))
    const {car , setCar ,setEdit} = useContext(CarContextDetails);
    if (TokenAdmin){
         
    }else{

    }
    useEffect( ()=>{
        if(!localStorage.getItem("token-admin")){
           return Navigater("/")
        }
        GetCars()
            .then(data=>setCar(data.reverse()))  
        },[]
    ); 
   
    const adminName = JSON.parse(localStorage.getItem("name-admin"))
   
    console.log(adminName);

    console.log(car)
    return <>
    <AdminpageNav/>
    <div id="admin-page-main-home">
           
        <h1 id="welcome-to-admin-page">Hello {adminName}</h1>
        <div id="main-container-of-the-addmin-page">
        <div id="add-car">
            <h3 id="info">Cars</h3>
          <Link to="/add-car-details" id="btn-add-car-link"><button id="btn-add-car">Add Car</button></Link> 
        </div>
      { car.length===0? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open>
         <CircularProgress color="inherit" />
      </Backdrop>: <div id="main-container">
            {
                car.map((d, i) => {
                    return <div key={i} id="car-container">
                        <div id="img-container">
                              <Link to="/edit-car-details"><img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} id="car-img" alt="img-car" onClick={()=>setEdit(d)}  /></Link>
                        </div>
                        <div id="person-of-admin-page-in-my-page">6 person</div>
                        <div id="name-container-of-the-file-data">
                            <h5>{d.name}</h5>
                            <h5 id="milage-of-my-admin-page-details">{d.perKm}KM/RS</h5>
                        </div>
                        <hr />
                        <div id="date-container-of-the-file-data-date">
                        <span id="available-date-of-sata-of-the-page">Available Date</span>
                        <span id="date-avalable-from-till-data-of-the-admin-page">{d.avalableFrom.slice(5)}-{d.availableTill.slice(5)}</span>
                        </div>
                 </div>
                })
            }
        </div>}
        </div>
    </div>
    </>
}