const Cart = require('../modal/Cart');
const {     verifyToken,
    verifyTokenAndAuthorization,  verifyTokenAndAdmin}=require('./verifytoken')

const router = require('express').Router();

router.post('/go',verifyToken,async(req, res) => {

    const newCart= new Cart(req.body);

    try {

        const saveCart=await newCart.save();
        res.status(200).json(saveCart)
        
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/cartupdate',  verifyTokenAndAuthorization,async(req, res) => {

    try {
        const updateCart=await Cart.findByIdAndUpdate(
 
            req.params.id,
            {
         $set:req.body
            },
            {
                new:true,
            }
        )
        
    } catch (error) {
        
    }

})

module.exports = router