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

     router.put('/',async(req, res)=>{

        try {

            const deleteorder= await 

            
        } catch (error) {
            
        }
     })

    //  router.get('/castomer',(req, res) => {
    //      res.send("sadfsadfasfd")
    //  })


     module.exports =router