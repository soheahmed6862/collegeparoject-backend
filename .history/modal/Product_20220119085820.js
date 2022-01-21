
const mongoose = require('mongoose')

const ProductShema=new mongoose.Schema({

    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String},
    // categories: { type: Array },
    // size: { type: Array },
    // color: { type: Array },
    // price: { type: Number, required: true },
 

},{timestamps:true})

module.exports = mongoose.model('Product',ProductShema)