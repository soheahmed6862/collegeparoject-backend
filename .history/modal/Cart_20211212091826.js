
const mongoose = require('mongoose')

const CartShema=new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
 
    desc:{
        type:String,
        required:true
    },
    category:
    {type:Array},
    size:
    {type:String},
    
    price:{
        type:Number,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('Cart',CartShema)