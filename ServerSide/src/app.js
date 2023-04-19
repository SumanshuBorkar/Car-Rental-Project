const express = require("express");
const app = express();
require("./db/connection")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8000, ()=>{
    console.log("listening the port 8000")
})