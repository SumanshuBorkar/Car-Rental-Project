import React, { useContext } from 'react';
import '../Components/Style/header.css';
import { CarContextDetails } from '../Context/CarContext';

function Header() {
  const {headerData}=useContext(CarContextDetails);
console.log(headerData);
  return (
    <div id='header'>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin'
             >{headerData.origin}</li>

          <i className="fa-solid fa-arrow-right Origin arrow" style={{ color: "#4279cd" }}></i>

          <li  className="Origin"
            >{headerData.destination}</li>

          <li type="date"  className="Origin" 
             >{headerData.startDate}</li>

          <li type="date"  className="Origin"
            >{headerData.endDate}</li>

          <button type="submit" href="/Page3"className="Origin" id="modify">Modify</button>
        </form>
    
      </div>
    </div>
  )
}
export default Header;