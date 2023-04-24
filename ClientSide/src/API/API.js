// import commonrequest from "./Axios";
// const BASE_URL = "http://localhost:5000";


// export const registerUserLogin = async(data, header)=>{
//     return await commonrequest("POST", `${BASE_URL}/user/login`,data, header)
// }

// export const registerUserSignup = (data, header)=>{
//     // return await commonrequest("POST", `${BASE_URL}/user/signup`, data, header)
//     fetch(`${BASE_URL}/user/signup`, {
//         method: 'POST',
//         headers: {"Content-Type": "application/json", "Accept": "application/json"},
//         body: data,
//     }).then(res=> res.json()).then(data => console.log(data))
// }

// export const registerAdminLogin = async(data, header)=>{
//     return await commonrequest("POST", `${BASE_URL}/admin/login`, data, header)
// }

// export const registerAdminSignup = async(data, header)=>{
//     return await commonrequest("POST", `${BASE_URL}/admin/signup`, data, header)
// }