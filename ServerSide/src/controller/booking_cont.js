const bookingDetails = require('../model/NewBookingSchema');


const create_booking = async(req,res)=>{
        try{
            let booking =await new bookingDetails({
                ...req.body
                
            })
            booking=await booking.save();
            res.status(201).json({status:"success",message:"new booking is created"})
        }
        catch (error) {
            res.status(400).json({ status: "Failed", message: error.message })
        }
    };
const getbooking=async (req,res)=>{
    try{
        let booking = await bookingDetails.find();
        res.status(200).json({status:"success",booking})
    }catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }
   
}
const getSingleUser =async(req,res)=>{
    try{
    let user = await bookingDetails.findById(req.params._id);
    if(!user){
        return res.status(404).json({ status: "Failed", message:"wrong user id" })
    }
    res.status(200).json({status:"success",user});
    }catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }
}

    module.exports = {create_booking,getbooking,getSingleUser};