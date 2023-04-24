import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { GetCars } from "../../Utils/ApiUtils";
import { CarContextDetails } from "../../Context/CarContext";

import "../Style/AdminPage.css"

export default function AdminPage() {
    let [data, setData] = useState([])
    // useEffect(() => {
    //   GetCars().then(data => setData(data));
    // }, [])
    const {car , setCar ,setEdit} = useContext(CarContextDetails)

    console.log(car)
    return <div id="admin-page-main-home">

        <h1 id="welcome">Hello Admin...</h1>
        <div id="main-container-of-the-addmin-page">
        <div id="add-car">
            <h3 id="info">Cars</h3>
          <Link to="/add-car-details" id="btn-add-car-link"><button id="btn-add-car">Add Car</button></Link> 
        </div>
        <div id="main-container">
            {
                car.map((d, i) => {
                    return <div key={i} id="car-container">
                        <div id="img-container">
                          <Link to="/edit-car-details"><img src={`http://localhost:5000/cars/${d.image}`} id="car-img" alt="img-car" onClick={()=>setEdit(d)}  /></Link>  
                        </div>
                        <div id="person">6 person</div>
                        <div id="name-container-of-the-file-data">
                            <h5>{d.name}</h5>
                            <h5 id="milage">{d.milage}</h5>
                        </div>
                        <hr />
                        <div id="date-container-of-the-file-data-date">
                        <span id="available-date-of-sata-of-the-page">Available Date</span>
                        <span id="date-avalable-from-till-data-of-the-admin-page">{d.avalableFrom.slice(5)}-{d.availableTill.slice(5)}</span>
                        </div>
                 </div>
                })
            }
        </div>
        </div>
    </div>
}