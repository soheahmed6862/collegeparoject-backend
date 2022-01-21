const router = require('express').Router();
const Order = require('../modal/Order');
const {     verifyToken,
    verifyTokenAndAuthorization,  verifyTokenAndAdmin}=require('./verifytoken')

router.post('/order',verifyToken,async(req,res)=>{

    const product = new Order(req.body);

try {

const saveproduct = await product.save();
res.status(200).json(saveproduct);
console.log(saveproduct)
    
} catch (error) {
    res.status(500).json(error);
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

     router.get('/find/:userid',verifyTokenAndAuthorization,async(req, res) => {
        
        try {
            const order=await Order.find({userid:req.params.userid});
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
     })
     router.get('/all',verifyTokenAndAdmin,async(req, res) => {
        
        try {
            const orders=await Order.find();
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
     })

     ///get money Income from

     router.get('/icome',verifyTokenAndAdmin,async(req, res)=>{
         
     })

     module.exports =router