const mongoose = require("mongoose");
require("dotenv").config()

const url=DB;
const db = process.env.DATABASE;
mongoose.connect(url+db)
.then(res=>console.log("connection is successfull"))
.catch(err=>console.log(err));
