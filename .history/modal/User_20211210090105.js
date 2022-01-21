const mongoose = require('mongoose');
const { create } = require('yallist');

const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        unique:true,
        require:true
    },

    isAuthent:{
        type:Boolean,
        default:false
    }


},{timestamps:true})
module.exports=mongoose.model("User",UserSchema)