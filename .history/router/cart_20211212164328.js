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
        res.status(500).json(error)
    }

})

//delete

router.delete('/',async(req, res)=>{


    try {

        const deletecart=await Cart.findByIdAndDelete(req.params.id)

        res.status(200).json("cart is delete")
        
    } catch (error) {
        res.status(500).json(error)
    }


})

module.exports = router