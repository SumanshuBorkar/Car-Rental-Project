import React from 'react';
import '../Components/Style/header.css';
  function Header(){
 return(
    <div id='header'>
   <div className='container'>
    <form id="form">
      <input type="text" placeholder='Origin Name' className='Origin'></input>
      <i className="fa-solid fa-arrow-right Origin arrow" style={{color: "#4279cd"}}></i>
      <input type="text" placeholder='Destination Name' className="Origin"></input>
      <input type="date" placeholder='Starting Date' className="Origin"></input>
      <input type="date" placeholder='End Date' className="Origin"></input>
      <button type="submit" className="Origin" id="modify">Modify</button>
    </form>
  </div>
    </div>
 )
  }
  export default Header;