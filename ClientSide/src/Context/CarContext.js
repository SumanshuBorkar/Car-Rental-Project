import React, {  createContext, useEffect, useState } from "react";
import { GetCars } from "../Utils/ApiUtils";

// import {GetCar} from "../Utils/ApiUtils";


export const CarContextDetails =createContext() ;


export default function CarContext({children}){
    const [car, setCar] = useState([])
    const [edit, setEdit] = useState({});

    const[headerData,setheaderData]=useState({});
    const [CarData, setCarData] = useState({});
    const [bookingDetails , setBookingDetails] = useState([]);
    const [Bookdata, setBookData]= useState([])

    const [inputdata, setInputData] = useState({
        origin: "",
        destination : "",
        startDate:"",
        endDate:""
      });

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
const [EditPaymentDetails , setEditPaymentDetails] = useState({})
   
    useEffect( ()=>{
    GetCars()
        .then(data=>setCar(data.reverse()))

    // GetCar()    
    },[]
);

    return<>

     <CarContextDetails.Provider value={{car, setCar,data,setData,edit,setEdit,headerData,setheaderData, CarData, setCarData, bookingDetails, setBookingDetails,Bookdata,setBookData,EditPaymentDetails , setEditPaymentDetails,inputdata,setInputData}}>
        {children}
     </CarContextDetails.Provider>
    </>
}