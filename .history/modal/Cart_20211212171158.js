
const mongoose = require('mongoose')

const CartShema=new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
 
  prducts:[{
      productid:{type:String},
      quantity:{type:Number, default:1}
  }]

},{timestamps:true})

module.exports = mongoose.model('Cart',CartShema)