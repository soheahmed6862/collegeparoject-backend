const User = require('../modal/User');
var CryptoJS = require("crypto-js");
const router = require('express').Router(); 
const jwt = require('jsonwebtoken');

////////////////////////////////REGISTER

router.post('/register', async(req, res)=>{

    const newUser= new User({
        username: req.body.username,
      
        email: req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.CryptoJS ).toString()

    });
     


   
   try {
    const saveUser=await newUser.save();

    res.status(200).json(saveUser);
    console.log(saveUser);
       
   } catch (error) {
       res.status(500).json("email already registered")
   }

})

//log in///

router.post('/login', async(req, res)=>{
     try {

    const user= await User.findOne({username: req.body.username})
    if(!user){
      return  res.status(200).json("user is not register")
    }
    // !user &&res.status(200).json("user is not register")
   var bytes  = CryptoJS.AES.decrypt(user.password, process.env.CryptoJS);
   var originalpassword = bytes.toString(CryptoJS.enc.Utf8);
   console.log(originalpassword);


   if(originalpassword !== req.body.password){
       res.status(500).json("worng password")

   }
 
    // originalpassword !== req.body.password && res.status(500).json("worng password")


    const accessToken = jwt.sign({
    id:user._id,
    isAdmin: user.isAdmin

    },process.env.JWT);

    const {password,...other}=user._doc
    res.status(200).json({...other,accessToken })
    console.log(other,accessToken)

   } catch (error) {

    res.status(500).json(error)
   }
})

module.exports =router;