import { useState } from "react"
import "../Style/AddCarDetail.css"
export default function FormStructure({data, setData}){
   const {name,type,model,milage,image,perKm,description,carDetails,Details,availableTill,avalableFrom}=data
    const [file , setFile] = useState("");


   

    return<>
        <div id="main-container-of-form">
        <div id="left-side-form">
            <div className="input-gap-bottom">
            <label>Car Name</label><br/>
            <input type="text" placeholder="Name" name="name" onChange={(e)=>setData({...data,name:e.target.value})} value={name} />
            </div>
            <div className="data-form-flex input-gap-bottom" >
                <div>
                    <label>Type</label><br/>
                        <select className="select-things" name="type" onChange={(e)=>setData({...data,type:e.target.value})} value={type}>
                           <option>select</option>
                            <option>UV</option>
                            <option>YZ</option>
                            <option>UVX</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Model</label><br/>
                        <select className="select-things" name="model" onChange={(e)=>setData({...data,model:e.target.value})} value={model}>
                           <option>select</option>
                            <option>Maruti </option>
                            <option>Honda</option>
                            <option>mahindra</option>
                        </select>
                   </div>
                       
                
            </div>
            <div className="data-form-flex input-gap-bottom">
                <div>
                    <label>Milage</label><br/>
                        <select className="select-things" name="milage" onChange={(e)=>setData({...data,milage:e.target.value})} value={milage}>
                           <option>Select</option>
                           <option>200RS/KM</option>
                            <option>300RS/KM</option>
                            <option>230RS/KM</option>
                            <option>250RS/KM</option>
                            <option>210RS/KM</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Per KM</label><br/>
                     <input type="number" placeholder="000000" id="per-km" name="perKm" onChange={(e)=>setData({...data,perKm:e.target.value})} value={perKm}/>                       
                   </div>
                </div>
            
                <div className="data-form-flex input-gap-bottom">
                <div>
                    <label>Available From</label><br/>
                       <input type="date" className="date-input" name="avalableFrom" onChange={(e)=>setData({...data,avalableFrom:e.target.value})} value={avalableFrom}/>
                   </div>
                        
                   <div>
                   <label>Available Till</label><br/>
                       <input type="date" className="date-input" name="availableTill" onChange={(e)=>setData({...data,availableTill:e.target.value})} value={availableTill} />                    
                   </div>
                </div>

                <div className="input-gap-bottom">
                    <label>Discription</label><br/>
                    <textarea id="text-area-description" placeholder="Description" name="description" onChange={(e)=>setData({...data,description:e.target.value})} value={description}></textarea>
                </div>
           
            </div>
               
             <div id="right-side-form">
                <div id="image-add-in-add-user-form">
                  <input type="file" name="image" onChange={ (e)=>{
                    setFile(URL.createObjectURL(e.target.files[0]));
                    setData({...data,image:e.target.value})}}  
                    value={image}></input>
            </div>

          { file? <div id="imgs-add-car-container">
                   
                 <div className="img-sort-box">
                    <img src={file} id="preview-img-of-the-file" ></img>
                 </div>
                 
            </div>:null}

            <div>
                <label>Car Details</label><br/>
                <textarea className="car-detail-description" name="carDetails" placeholder="Add Car Details.."  onChange={(e)=>setData({...data,carDetails:e.target.value})} value={carDetails}></textarea>
            </div>
            <div>
                <label>Details</label><br/>
                <textarea className="car-detail-description" name="Details" placeholder="Add Details" onChange={(e)=>setData({...data ,Details:e.target.value})} value={Details}></textarea>
            </div>
       </div>
         </div>
    </>
}