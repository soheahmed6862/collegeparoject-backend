const express=require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv= require('dotenv').config();
var bodyParser = require('body-parser');
const userRouter=require('./router/user');
const authRouter= require('./router/auth');
const productRouter= require('./router/product');
const cartRouter= require('./router/cart')
const orderRouter= require('./router/order');
const 

app.use(bodyParser.json())
////////////////////////////////////////////////////////////////MONGOOSE COLLECTIO////////////////////////////////


mongoose.connect(process.env.MONGOOSE_URL).then(() => {console.log("mongoose is conncet")}).catch(err => {
    console.log(err)
})
///////////ROUTER////////////////////////////////////////////////////////////////

app.use("/api",userRouter)
app.use('/api',authRouter)
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);

app.use('/api/order',orderRouter)

app.get('/api',(req, res) => {
    res.send("sadsadf")
})


///////////PORT////////////////////////////////////////////////////////////////////////////////
app.listen(process.env.PORT||5000,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})