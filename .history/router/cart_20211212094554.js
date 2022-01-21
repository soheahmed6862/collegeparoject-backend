const Cart = require('../modal/Cart');

const router = require('express').Router();

router.post('/go',(req, res) => {

    const newCart= new Cart();

    try {

        const saveCart=await newCart.save();
        res.status(200).json(saveCart)
        
    } catch (error) {
        
    }




 

})



module.exports = router