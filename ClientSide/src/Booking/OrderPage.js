import React from 'react';
import NavLogout from './NavLogout'
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import FilterHeader from '../Components/FilterHeader';
import Navigation from '../Components/Navigation';
import Home from '../Components/Home';


function OrderPage(){
  const TokenUser= JSON.parse(localStorage.getItem("token-user"))
 return(<>
  {TokenUser?<div>
      <Navigation/>
      <NavLogout/>
       <Header/>
       <FilterHeader/>
       <Cards/>
        
  </div>:<Home/>}
</>
 )
}
export default OrderPage;