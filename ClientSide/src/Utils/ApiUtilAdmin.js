
const API_ADMIN="https://car-rental-project-rkwz.onrender.com"


function addAdmin(AdminData){
    return fetch(`${API_ADMIN}/admin/signup`, {
        method: 'POST',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(AdminData)
    })
    .then(res => res.json())
}

export {addAdmin}