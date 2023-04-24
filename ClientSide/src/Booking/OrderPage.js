// import React from 'react';
import Card from 'react-bootstrap/Card';
import NavLogout from './NavLogout'
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import FilterHeader from '../Components/FilterHeader';
import Navigation from '../Components/Navigation';
import Home from '../Components/Home';
import React,{useState, useEffect} from 'react';



function OrderPage(){
  const TokenUser= JSON.parse(localStorage.getItem("token-user"))
  let [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/cars/",{
      headers:{
        "authorization":JSON.parse(localStorage.getItem("token-user "))
    }
    }).then(res => res.json())
      .then(res => setdata(res));
  }, [])
  const [selectBtn , setSelectBtn] = useState(false);
  const [selectSeating , setSelectSeating] = useState(false)
  const [milageSelect , setMilageSelect] = useState(false);
  const [filterData , setFilterData] = useState([]);
  
  const[bookData,setbookData]=useState([])

function filterFunc(e){
const type= data.filter(d=>d.type===e.target.id)
const milage= data.filter(d=>d.milage===e.target.id)
if(e.target.id==="All"){
  setFilterData(data)
}else if (type.length!==0) {
  setFilterData(type)
} else if (milage.length!==0) {
  setFilterData(milage)
}
// setSelectBtn(false)
}


 return(<>
  {TokenUser?<div>

      <Navigation/>
      <NavLogout/>
     
       <Header/>
      

<div id="select-butn-fileter-container-indiv">
  <div>
         <button onClick={()=>setSelectBtn(false)} onDoubleClick={()=>setSelectBtn(true)} id="button-of-the-filete-the-data-in-bookin-page">CarType</button>
         {selectBtn?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="UV" /><label>UV</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="XUV"/><label>XUV</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="All"/><label>All</label><br/>
         </div>:null}
   </div>
   <div>
         <button onClick={()=>setSelectSeating(false)} onDoubleClick={()=>setSelectSeating(true)} id="button-of-the-filete-the-data-in-bookin-page">Seating</button>
         {selectSeating?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="UV" /><label>6 person</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="XUV"/><label>9 person</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="All"/><label>4 person</label><br/>
         </div>:null}
  </div>
  <div>
         <button onClick={()=>setMilageSelect(false)} onDoubleClick={()=>setMilageSelect(true)} id="button-of-the-filete-the-data-in-bookin-page">Milage</button>
         {milageSelect?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="200RS/KM" /><label>200RS/KM</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="250RS/KM"/><label>250RS/KM</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="300RS/KM"/><label>300RS/KM</label><br/>
         </div>:null}
         </div>     
      </div>



 {filterData&& selectBtn?filterData.length===0? "No Result Found": <div id="carCard">{
        filterData.map((d, i) => {
          return <div key={i}>
            <Card className='card'>

              <div className="img">
                <Card.Img src={`http://localhost:5000/cars/${d.image}`}/>
              </div>
              <div id="cardBody">
                <Card.Body>
                  <div id="seater">
                    <Card.Text id="person" >{d.name}</Card.Text>
                  </div>

                  <div id="name-container">
                    <Card.Text id="name" >6 persons</Card.Text>
                    <Card.Text id="milage" >{d.milage}</Card.Text>
                  </div>
                </Card.Body>

                <div id="booking">
                  <Card.Link  id="fare">Fare Details</Card.Link>
                  <Card.Link href="/payment" id="book" onClick={()=>setbookData(d)} >Book Now</Card.Link>
                </div>

              </div>
            </Card>
          </div>
        })
      }
      
    </div>:<div id="carCard">{
        data.map((d, i) => {
          return <div key={i}>
            <Card className='card'>

              <div className="img">
                <Card.Img src={`http://localhost:5000/cars/${d.image}`}/>
              </div>
              <div id="cardBody">
                <Card.Body>
                  <div id="seater">
                    <Card.Text id="person" >{d.name}</Card.Text>
                  </div>

                  <div id="name-container">
                    <Card.Text id="name" >6 persons</Card.Text>
                    <Card.Text id="milage" >{d.milage}</Card.Text>
                  </div>
                </Card.Body>

                <div id="booking">
                  <Card.Link  id="fare">Fare Details</Card.Link>
                  <Card.Link href="/payment" id="book" onClick={()=>setbookData(d)} >Book Now</Card.Link>
                </div>

              </div>
            </Card>
          </div>
        })
      }
    </div>
}




        
  </div>:<Home/>}
</>
 )
}
export default OrderPage;