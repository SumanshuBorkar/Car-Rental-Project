import axios from "axios";

const commonrequest = async (methods, url, body,header ) => {
    let config = {
        method: methods,
        url,
        headers:header ? 
        header:{
            "Content-Type":"application/json"
        },
        data: body
    }

//Axios instance

return axios(config).then((data)=>{
    return data
}).catch((error)=>{
    return error
})

}

export default commonrequest;

// import axios from 'axios';


// const commonrequest = async (method, url, body = null, headers = {}) => {
//   try {
//     const response = await axios({
//       method,
//       url,
//       data: body,
//       headers: {
//         ...headers,
//       },
//     })
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export default commonrequest;
