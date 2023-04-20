const express = require("express")
const app = express();
<<<<<<< HEAD

=======
const cors = require("cors")
require("./db/connection")
const router = require("./router/car")
>>>>>>> 8fc315a9f483cbcf02f3c04c2218466c3f609af1


<<<<<<< HEAD
app.listen(8000, ()=>{
    console.log("listening the port 8000")
})





=======
app.use(express.json())

app.use(router)
app.listen(5000, ()=>{
    console.log("listening port 5000")
})
>>>>>>> 8fc315a9f483cbcf02f3c04c2218466c3f609af1
