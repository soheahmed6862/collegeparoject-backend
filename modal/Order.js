
const mongoose = require('mongoose')

const OrderShema=new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
 
  prducts:[{
      productid:{type:String},
      quantity:{type:Number, default:1}
  }],

  amount:{type:Number, required:true},
  address:{type:Object, required:true},
  status:{type:String, default:"panding"}

},{timestamps:true})

module.exports = mongoose.model('Order',OrderShema)