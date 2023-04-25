const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    carData: {
        carName: {
            type: String,
            required: true
        },
        carNumber: {
            type: String,
            required: true
        },
        perKm: {
            type: Number,
            required: true
        },
        carImg: {
            type: String,
            required: true
        },

    },
    tourData: {
        Origin: {
            type: String,
            required: true
        },
        Destination: {
            type: String,
            required: true
        },
        Startdate: {
            type: Date,
            required: true
        },
        Enddate: {
            type: Date,
            required: true
        }
    },
    bookingData: {
        BookingID: {
            type: String,
            required: true
        },
        BookingDate: {
            type: String,
            required: true
        },
        BookingTime: {
            type: Date,
            required: true
        }
    }
})

const Orders = mongoose.model("orderdata", OrderSchema)

module.exports = Orders



