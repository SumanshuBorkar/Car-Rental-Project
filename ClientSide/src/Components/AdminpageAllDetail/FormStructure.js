import "../Style/AddCarDetail.css"
export default function FormStructure(){
    return<>
        <div id="main-container-of-form">
        <div id="left-side-form">
            <div className="input-gap-bottom">
            <label>Car Name</label><br/>
            <input type="text" placeholder="Name" name="car-name"></input>
            </div>
            <div className="data-form-flex input-gap-bottom" >
                <div>
                    <label>Type</label><br/>
                        <select className="select-things" name="select-type">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Model</label><br/>
                        <select className="select-things" name="select-model">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                       
                
            </div>
            <div className="data-form-flex input-gap-bottom">
                <div>
                    <label>Milage</label><br/>
                        <select className="select-things" name="select-milage">
                           <option>select</option>
                            <option>UV</option>
                            <option>UVX</option>
                        </select>
                   </div>
                        
                   <div>
                    <label>Per KM</label><br/>
                     <input type="number" placeholder="000000" id="per-km" name="per-km"/>                       
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
                    <textarea id="text-area-description" placeholder="Description"></textarea>
                </div>
           
            </div>
               
             <div id="right-side-form">
                <div id="image-add-in-add-user-form">
                    <h4>Images</h4>
                    <button id="add-image-in-car-details">Add</button>
                </div>

            <div id="imgs-add-car-container">
                   
                 <div className="img-sort-box">
                    <img src=""></img>
                 </div>
                 <div className="img-sort-box">
                    <img src=""></img>
                 </div>
            </div>

            <div>
                <label>Car Details</label><br/>
                <textarea className="car-detail-description"></textarea>
            </div>
            <div>
                <label>Details</label><br/>
                <textarea className="car-detail-description"></textarea>
            </div>


         </div>
         </div>
    </>
}