
const mongoose = require('mongoose')

const CartShema=new mongoose.Schema({



},{timestamps:true})

module.exports = mongoose.model('Cart',CartShema)