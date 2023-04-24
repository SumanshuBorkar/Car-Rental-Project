import React from 'react';
import Navigation from '../Components/Navigation';
import NavLogout from './NavLogout'
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { CarContextDetails } from '../Context/CarContext';
import '../Components/Style/page3.css'
 function Page3(){
    const {setheaderData}=useContext(CarContextDetails);
    const navigate = useNavigate();
    const [inputdata, setInputData] = useState({
        origin: "",
        destination : "",
        startDate:"",
        endDate:""
      });
      const handleInput = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData( { ...inputdata, [name]: value } );
      }
      const save = (e)=>{
        e.preventDefault();
        const {origin,destination,startDate,endDate}=inputdata;
        const data = new FormData();
        data.append("origin",origin);
        data.append("destination",destination)
        data.append("startDate",startDate)
        data.append("endDate",endDate)
        console.log(inputdata);
        navigate('/orderpage')
      }
setheaderData(inputdata);

return(
    

<>
  <NavLogout/>
    <div id="parent" >
<div id='container'>
<form id="forms" action="" onSubmit={save}>

  <input type="text" placeholder='Origin Name' className='Fields'
     name="origin"required onChange={handleInput}></input>
   <input type="text" placeholder='Destination Name' className="Fields" required
    name="destination"onChange={handleInput} ></input>

  <input type="date" placeholder='Starting Date' className="Fields" required
     name="startDate" onChange={handleInput}></input>

  <input type="date" placeholder='End Date' className="Fields" required
     name="endDate" onChange={handleInput}></input>

  <button type="submit" className="Fields" id="modifybtn">Save</button>
</form>

</div>
</div>
</>
 )}
 export default Page3;
