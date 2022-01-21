const router = require('express').Router();
const Product = require('../modal/Product');
const {     verifyToken,
    verifyTokenAndAuthorization,  verifyTokenAndAdmin}=require('./verifytoken')

    const multer  = require('multer')
    const upload = multer({ dest: './uploads' })

router.post('/addproduct',async(req,res)=>{
console.log(req.file)
    const product = new Product({

        title:req.body.title,
        desc:req.body.desc,
     
        // categories:req.body.categories,
        // price:req.body.price,
      
    });

try {

const saveproduct = await product.save();
res.status(200).json(saveproduct);
console.log(saveproduct)
    
} catch (error) {
    res.status(500).json(error);
}




})

router.post("/file",upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    res.send("success")
})

router.put('/:id', async(req,res)=>{
try {

    const updateproduct = await Product.findByIdAndUpdate(
       req.params.id,

       
       {
           $set:req.body,
       },
       {
           new:true
       }

    )
    console.log("dfsdfsfd"+req.params.id)
    res.status(200).json(updateproduct);

    
} catch (error) {
    res.status(500).json(error)
}

})


router.delete('/delete/:id',verifyTokenAndAdmin,async(req,res)=>{

try {

    const deleteproduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product is delete")
    
} catch (error) {
    res.status(500).json(error)
    
}
})

router.get('/find/:id',async(req,res)=>{

    try {
        const singleproduct=await Product.findById(req.params.id);
        res.status(200).json(singleproduct)

    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/allproduct",async(req,res)=>{
    const nQuery=req.query.new
    const newCatagory=req.query.category

    try {
        let allproduct ;
if(nQuery){

    allproduct = await Product.find().sort({createdAt:-1}).limit(1)
    res.status(200).json(allproduct)
    console.log(allproduct)
}
else if(newCatagory){
   allproduct = await Product.find({
    category :{
           $in:[newCatagory],
       },
   }) 

   res.status(200).json(allproduct)
}

else{
    allproduct = await Product.find();
    res.status(200).json(allproduct)
    console.log(allproduct)
}

    } catch (error) {
        res.status(500).json(error)
    }
    // res.send("sadfsafdsdf")
})

module.exports =router