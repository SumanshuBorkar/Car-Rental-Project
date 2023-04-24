const expressAsyncHandler = require('express-async-handler');
const Order = require('./../model/PlacedOrdersSchema');

const orderRegisterCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const newOrder = await Order.create({
      user_id: req?.body?.user_id,
      carData: req?.body?.carData,
      tourData: req?.body?.tourData
    });
    res.status(200).json({
      status: 'success',
      data: {
        orderdata: newOrder
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});


const getOrdersCtrl = async (req, res) => {
    try {
      const allOrders = await Order.find({});
      res.status(200).json({
        status: "success",
        data: allOrders,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };
  


module.exports = {orderRegisterCtrl, getOrdersCtrl};