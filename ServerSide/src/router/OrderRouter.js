const express =require("express");
const Router = express.Router();
// const {userRegisterCtrl, loginUserCtrl} = require("./../Controllers/UserController")
const cors = require("cors");
const {orderRegisterCtrl, getOrdersCtrl} = require("./../Controllers/OrderController")

Router
  .route('/')
  .post(orderRegisterCtrl)
  .get(getOrdersCtrl);

// Router
  //  .route('/:id')
  //  .put(cors())
  //  .delete()
  //  .get()

// Router
//   .route('/')
//   .get()

// Router
//   .route('/:id')
//   .get()
//   .delete()



module.exports = Router;