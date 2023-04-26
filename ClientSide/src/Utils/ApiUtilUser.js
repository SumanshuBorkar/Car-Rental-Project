const API_USER="https://car-rental-app-y59o.onrender.com"

function addUser(UserData){
    return fetch(`${API_USER}/user/signup`, {
        method: 'POST',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(UserData)
    })
    .then(res => res.json())
}

export {addUser}