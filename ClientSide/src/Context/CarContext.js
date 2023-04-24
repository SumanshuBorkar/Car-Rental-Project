import React, {  createContext, useEffect, useState } from "react";
import { GetCars } from "../Utils/ApiUtils";




export const CarContextDetails =createContext() ;


export default function CarContext({children}){
    const [car, setCar] = useState([])
    const [edit, setEdit] = useState({});

    const[headerData,setheaderData]=useState({});
    
const [data, setData] = useState({
    name:"",
    type:"",
    model:"",
    milage:"",
    image:"",
    availableFrom:"",
    availableTill:"",
    perKm:"",
    description:"",
    carDetails:"",
    Details:""
});
const [adminName , setAdminName] = useState("")
   
    useEffect( ()=>{
    GetCars()
        .then(data=>setCar(data.reverse()))
    },[]
);

    return<>

     <CarContextDetails.Provider value={{car, setCar,data,setData,edit,setEdit,headerData,setheaderData}}>
        {children}
     </CarContextDetails.Provider>
    </>
}