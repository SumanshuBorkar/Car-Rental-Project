import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import "../Style/AdminPage.css"

export default function AdminPage() {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3004/car")
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return <>

        <h1 id="welcome">Hello Admin...</h1>
        <div id="add-car">
            <h3 id="info">Cars</h3>
          <Link to="/add-car-details" id="btn-add-car-link"><button id="btn-add-car">Add Car</button></Link> 
        </div>
        <div id="main-container">
            {
                data.map((d, i) => {
                    return <div key={i} id="car-container">
                        <div id="img-container">
                            <img src={d.image} id="car-img" />
                        </div>
                        <div id="person">6 person</div>
                        <div id="name-container">
                            <h5>{d.name}</h5>
                            <h5 id="milage">{d.milage}</h5>
                        </div>
                        <hr />
                        <div id="date-container">
                        <p id="available-date">Available Date</p>
                        <p id="date-avalable-from-till">{d.availableform}-{d.availabletill}</p>
                        </div>
                 </div>
                })
            }
        </div>
    </>
}