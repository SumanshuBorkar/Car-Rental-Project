import "../Style/AddCarDetail.css"
export default function FormStructure(){
    return<>
        <div id="main-container-of-form">
        <div id="left-side-form">
            <div className="input-gap-bottom">
            <label>Car Name</label><br/>
            <input type="text" placeholder="Name" name="name"></input>
            </div>
            <div className="data-form-flex input-gap-bottom" >
                <div>
                    <label>Type</label><br/>
                        <select className="select-things" name="type">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Model</label><br/>
                        <select className="select-things" name="model">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                       
                
            </div>
            <div className="data-form-flex input-gap-bottom">
                <div>
                    <label>Milage</label><br/>
                        <select className="select-things" name="milage">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Per KM</label><br/>
                     <input type="number" placeholder="000000" id="per-km" name="perKm"/>                       
                   </div>
                </div>
            
                <div className="data-form-flex input-gap-bottom">
                <div>
                    <label>Available From</label><br/>
                       <input type="date" className="date-input" name="availableform"/>
                   </div>
                        
                   <div>
                   <label>Available Till</label><br/>
                       <input type="date" className="date-input" name="availabletill" />                    
                   </div>
                </div>

                <div className="input-gap-bottom">
                    <label>Discription</label><br/>
                    <textarea id="text-area-description" placeholder="Description" name="description"></textarea>
                </div>
           
            </div>
               
             <div id="right-side-form">
                <div id="image-add-in-add-user-form">
                  <input type="file" name="image" ></input>
            </div>

            <div id="imgs-add-car-container">
                   
                 <div className="img-sort-box">
                    <img src="" ></img>
                 </div>
                 <div className="img-sort-box">
                    <img src=""></img>
                 </div>
            </div>

            <div>
                <label>Car Details</label><br/>
                <textarea className="car-detail-description" name="carDetails"></textarea>
            </div>
            <div>
                <label>Details</label><br/>
                <textarea className="car-detail-description" name="Details"></textarea>
            </div>


         </div>
         </div>
    </>
}