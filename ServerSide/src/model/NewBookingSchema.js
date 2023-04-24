const mongoose = require("mongoose");

const NewBookingSchema = mongoose.Schema({
    Car_name: { type: String, require: true },

    Car_Number: { type: String, require: true },

    origin: { type: String, require: true },

    destination: { type: String, require: true },

    car_img: { type: String },

    startDate: { type: String },

    endDate: { type: String },

    booking_id: { type: String },

    booking_date: { type: String },

    booking_time: { type: String }

})
const bookingDetails = new mongoose.model("bookingdata", NewBookingSchema)

module.exports = bookingDetails;