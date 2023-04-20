const express = require("express")
const app = express();
const cors = require("cors")
require("./db/connection")
const router = require("./router/car")


app.use(express.json())

app.use(router)
app.listen(5000, ()=>{
    console.log("listening port 5000")
})