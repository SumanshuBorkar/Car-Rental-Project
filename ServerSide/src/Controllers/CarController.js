const carDetails = require("../model/CarSchema")
require("dotenv").config();
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const {GridFSBucket, MongoClient} = require("mongodb");
const { model } = require( "mongoose" );



// ********get Image **********************//

const getImages = async(req,res)=>{
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
}

// ***************get cars ****************************//

const getCars = async(req,res)=>{
    try {
       const readData = await carDetails.find();
       res.send(readData)
    } catch (error) {
       res.status(400).json({message:error.message})
    }
   }

//  *************Post cars *****************//

const PostCars =  async(req, res)=>{
    try{
     let data = new carDetails({image:req.file.filename,...req.body});
     let createData = await data.save();
     res.status(201).send(createData)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

//  ****************dATA bY Id ****************//

const putCarData = async(req,res)=>{
    try {
        let _id=req.params.id
       let updateData = await carDetails.findByIdAndUpdate(_id,req.body,{new:true});
       res.send(updateData)
    } catch (error) {
        res.status(400).json({message:err.message})  
    }
}

const deleteCarData =  async(req,res)=>{
    try {
        let _id=req.params.id
       let deletedData = await carDetails.findByIdAndDelete(_id);
       res.send(deletedData)
    } catch (error) {
        res.status(400).json({message:err.message})  
    }
}


module.exports = {
    getImages,
    getCars,
    PostCars,
    putCarData,
    deleteCarData
};