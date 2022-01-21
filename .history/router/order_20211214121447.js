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

     ///update
  
     router.put('/update',verifyTokenAndAdmin,async(req, res) => {

        try {
            const updateOrder =await Order.findByIdAndUpdate(
            req.params.id,{
                $set:req.body,
            },{
                new:true,
            }

            );
         res.status(200).json(updateOrder)
         console.log(updateOrder)
            
        } catch (error) {
            res.status(500).json(error)
            
        }

     })
//delete////////////////////////////////
     router.delete('/orderdelete',verifyTokenAndAdmin,async(req, res)=>{

        try {

            const deleteorder= await Order.findByIdAndDelete(req.params.id)

            res.status(200).json(deleteorder)

            
        } catch (error) {
            res.status(500).json(error)
        }
     })

     router.get('/find/:userid',verifyTokenAndAuthorization,(req, res) => {
        
        try {
            const order=await Order.find({userid:req.params.userid});
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
     })


     module.exports =router