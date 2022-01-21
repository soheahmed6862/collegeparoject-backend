const Cart = require('../modal/Cart');

const router = require('express').Router();

router.post('/go',async(req, res) => {

    const newCart= new Cart(req.body);

    try {

        const saveCart=await newCart.save();
        res.status(200).json(saveCart)
        
    } catch (error) {
        res.status(500).json(error);
    }




 

})



module.exports = router