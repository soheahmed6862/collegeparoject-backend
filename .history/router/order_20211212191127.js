const {verifyToken,
    verifyTokenAndAuthorization, 
     verifyTokenAndAdmin}=require('./verifytoken')


     const router=require('express').Router();

     router.post('/',async(req, res) => {

        const newOrder = new Order(req.body)
     })


     module.exports =router