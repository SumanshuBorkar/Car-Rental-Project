const express = require("express")
const app = express();
const cors = require("cors")
require("./db/connection")
<<<<<<< Updated upstream
const router = require("./router/car")
app.use( cors())
=======
const CarRouter = require("./router/CarRouts")
const UserRouter = require("./router/UserRouts")
const AdminRouter = require("./router/UserRouts")

>>>>>>> Stashed changes

app.use(express.json())
app.use(cors());

app.use('/cars', CarRouter)
app.use('/user', UserRouter)
app.use('/admin', AdminRouter)

app.listen(5000, ()=>{
    console.log("listening port 5000")
})
