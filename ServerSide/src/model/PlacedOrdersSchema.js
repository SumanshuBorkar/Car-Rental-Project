const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    Details:{
        type:String,
    },
    carDetails:{
        type:String,
    },
        name: {
            type: String,
           
        },
        type:{
            type: String,
      
        },
        perKm: {
            type: Number,
          
        },
        image: {
            type: String,
      
        },

        origin: {
            type: String,
          
        },
        destination: {
            type: String,
          
        },
        startDate: {
            type: String,
          
        },
        endDate: {
            type: String,
          
        },
    
        BookingId: {
            type: String,
          
        },
        date: {
            type: String,
          
        },
        time: {
            type: String,
          
        },carId:{
            type:String
        }
    
})

const Orders = new mongoose.model("orderdata", OrderSchema)

module.exports = Orders



