
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import './Style/cards.css';

export default function Cards() {
  let [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:3004/car")
      .then(res => res.json())
      .then(data => setdata(data));
  }, [])


  return <>
  <div id="carCard">
  {
  data.map((d,i)=>{
    return <div key={i}>
      <Card className='card'>

        <div className="img">
          <Card.Img variant="top" src={d.image} />
        </div>
        <div id="cardBody">
          <Card.Body>
            <div id="seater">
              <Card.Text id="person">6 persons</Card.Text>
            </div>

            <div id="name-container">
              <Card.Text id="name">{d.name}</Card.Text>
              <Card.Text id="milage">{d.milage}</Card.Text>
            </div>
            </Card.Body>

            <div id="booking">
              <Card.Link href="#">Fare Details</Card.Link>
              <Card.Link href="#">Book Now</Card.Link>
            </div>
          
        </div>
      </Card>
    </div>
})
}
</div>
  </>
}
