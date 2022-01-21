const Order = require('../modal/Order');
const {verifyToken,
    verifyTokenAndAuthorization, 
     verifyTokenAndAdmin}=require('./verifytoken')


     const router=require('express').Router();

     router.post('/castomer',verifyToken,async(req, res) => {

        const newOrder = new Order(req.body)

        try {

            const saveOrder =await newOrder.save();
            res.status(200).json(saveOrder)
            
        } catch (error) {
            
        }
     })


     module.exports =router