const router = require('express').Router(); 
const {     verifyToken,
    verifyTokenAndAuthorization,  verifyTokenAndAdmin}=require('./verifytoken')
    const User = require('../modal/User');
    var CryptoJS = require("crypto-js");

//UPDATE
router.put("/:id",verifyTokenAndAuthorization,  async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.CryptoJS
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
      console.log(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id",verifyTokenAndAuthorization, async (req,res) => {
      try {
await User.findByIdAndDelete(req.params.id)
res.status(200).json("user can delet")

          
      } catch (error) {
         res.status(500).json(err); 
      }
  })

  router.get('/find/:id',verifyTokenAndAdmin,async(req,res) => {

    try {
     const user=   await User.findById(req.params.id);
        const {password,...other}=user._doc
        res.status(200).json(other)
      console.log(other)

        
    } catch (error) {
        res.status(500).json(err); 
    }
      
  })

  router.get("/all",  async (req, res) => {

    const query = req.query.new

    try {
      const users = query 
      ? await User.find().sort({_id:-1}).limit(5)
      : await User.find();
      res.status(200).json(users);
      // console.log(users)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports =router