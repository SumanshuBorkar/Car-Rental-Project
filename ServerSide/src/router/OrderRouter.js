const express =require("express");
const Router = express.Router();
// const {userRegisterCtrl, loginUserCtrl} = require("./../Controllers/UserController")
const cors = require("cors");
const {orderRegisterCtrl, getOrdersCtrl,deleteOrderCtrl} = require("./../Controllers/OrderController")

Router
  .route('/')
  .post(orderRegisterCtrl)


Router
  .route('/:id')
  .get(getOrdersCtrl);
 

Router
  .route('/:id')
  .delete(deleteOrderCtrl);



module.exports = Router;