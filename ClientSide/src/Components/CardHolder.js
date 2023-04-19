import React from 'react';
import Cards from './Cards'
import './Style/cardholder.css';
function CardHolder() {
  return (
    <div id="bigger">
      <div id="cardholder">
       <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

      </div>
    </div>

  )
}
export default CardHolder;