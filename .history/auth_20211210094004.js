const User = require('./modal/User');

const router = require('express').Router(); 

////////////////////////////////REGISTER

router.post('/register', async(req, res)=>{

    const newUser= new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    });
   try {
    const saveUser=await newUser.save();

    res.status(200).json(saveUser);
    console.log(saveUser);
       
   } catch (error) {
       res.status(500).json(error)
   }

})

router.get('/register', async(req, res)=>{
    res.send("sdfsdfsdf")
})

module.exports =router;