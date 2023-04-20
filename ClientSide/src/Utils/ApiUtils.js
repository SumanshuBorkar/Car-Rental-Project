const API_BASE_URL= 'http://localhost:5000';

function GetCars(){
  return fetch(`${API_BASE_URL}/cars`)
  .then(res=>res.json())
}


function addCar(cardata){
    return fetch(`${API_BASE_URL}/cars`, {
        method: 'POST',
       body: cardata
    })
    .then(res => res.json())
}

function deleteCar(id){
    return fetch(`${API_BASE_URL}/cars/${id}`, {
        method: 'DELETE'
    }).then(res => {
        if(res.status === 200){
            return true
        }
        return false
    })
}

export {addCar, GetCars,deleteCar}