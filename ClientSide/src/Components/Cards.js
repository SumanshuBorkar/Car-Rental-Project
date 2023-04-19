import React from 'react';
import Card from 'react-bootstrap/Card';
import car from './../Booking/image/car.jpg'
import './Style/cards.css'

function Cards() {
  return (
    
      <div id="carCard">
        <Card className='card'>

          <div className="img">
            <Card.Img variant="top" src={car} />
          </div>
          <div id="cardBody">
            <Card.Body>
              <div id="seater">
                <Card.Text>6 persons</Card.Text>
                </div>

              <div id="innova">
                 <Card.Text>Innova Cryta</Card.Text>
                <Card.Text>200 Rs/KM</Card.Text>
                </div>

          
              <div id="booking">
                <Card.Link href="#">Fare Details</Card.Link>
                <Card.Link href="#">Book Now</Card.Link>
                </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    

  )
}
export default Cards;