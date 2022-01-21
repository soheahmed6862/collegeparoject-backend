
const mongoose = require('mongoose')

const CartShema=new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
 
  prducts:[{
      productid:{type:String},
      quantity:{type:Number, default:1}
  }],

  amount:{type:Number, required:true}
  address:{type:Object, required:true}

},{timestamps:true})

module.exports = mongoose.model('Cart',CartShema)