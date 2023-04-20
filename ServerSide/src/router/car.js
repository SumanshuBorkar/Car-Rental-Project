const express =require("express");
const carRouter = new express.Router();
const carDetails = require("../model/CarSchema")
require("dotenv").config();
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const {GridFSBucket, MongoClient} = require("mongodb");


// ****We Use Multer for add Images******//

const storage = new GridFsStorage({
    url:process.env.DB_URL+process.env.DATABASE,
    file:(req,file)=>{
        return{
            bucketName:process.env.CAR_IMAGES,
            fileName:`${Date.now()}_${file.originalname}`
        }
    }
})
const upload = multer({
    storage
})
const middleware= upload.single("image")

// *********get the image ******************//
let client = new MongoClient(process.env.DB_URL);
carRouter.get("/cars/:image" , async(req,res)=>{
    try {
        await client.connect();
        const datastore = client.db(process.env.DATABASE);
        const Bucket = new GridFSBucket(datastore,{bucketName:process.env.CAR_IMAGES});
        const eventVar= Bucket.openDownloadStreamByName(req.params.image);
        eventVar.on("data",(data)=>{
            return res.write(data)
          })
          eventVar.on("error" ,(err)=>{
          return  res.status(400).write(err)
          })
          eventVar.on("end",()=>{
            return res.end()
          })
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})



carRouter.get("/cars" , async(req,res)=>{
 try {
    const readData = await carDetails.find();
    res.send(readData)
 } catch (error) {
    res.status(400).json({message:error.message})
 }
})

carRouter.post("/cars" ,middleware, async(req, res)=>{
    try{
     let data = new carDetails({image:req.file.filename,...req.body});
     let createData = await data.save();
     res.status(201).send(createData)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})


carRouter.put("/cars/:id" , async(req,res)=>{
    try {
        let _id=req.params.id
       let updateData = await carDetails.findByIdAndUpdate(_id,req.body,{new:true});
       res.send(updateData)
    } catch (error) {
        res.status(400).json({message:err.message})  
    }
})



carRouter.delete("/cars/:id" , async(req,res)=>{
    try {
        let _id=req.params.id
       let deletedData = await carDetails.findByIdAndDelete(_id);
       res.send(deletedData)
    } catch (error) {
        res.status(400).json({message:err.message})  
    }
})

module.exports=carRouter;