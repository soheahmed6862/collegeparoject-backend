
const {     verifyToken,
    verifyTokenAndAuthorization,  verifyTokenAndAdmin}=require('./verifytoken')

const router = require('express').Router();

// router.post('/go',verifyToken,async(req, res) => {

//     const newCart= new Cart(req.body);

//     try {

//         const saveCart=await newCart.save();
//         res.status(200).json(saveCart)
        
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

// router.put('/cartupdate',  verifyTokenAndAuthorization,async(req, res) => {

//     try {
//         const updateCart=await Cart.findByIdAndUpdate(
 
//             req.params.id,
//             {
//          $set:req.body
//             },
//             {
//                 new:true,
//             }
//         )
//         res.status(200).json(updateCart)
        
//     } catch (error) {
//         res.status(500).json(error)
//     }

// })

// //delete

// router.delete('/',async(req, res)=>{


//     try {

//         const deletecart=await Cart.findByIdAndDelete(req.params.id)

//         res.status(200).json("cart is delete")
        
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// ///singleproduct/////singleproduct
// router.get('/find/:userid',verifyTokenAndAuthorization,async(req, res)=>{

//     try {
//         const singlecart=await Cart.findOne({ userid: req.params.userid});
//         res.status(200).json(singlecart)
        
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// ///all cart

// router.get('/all',verifyTokenAndAdmin,async(req, res)=>{

// try {
//     const allcart=await Cart.find();
//     res.status(200).json(allcart);
    
// } catch (error) {
//     res.status(500).json(error)
// }
// })
module.exports = router