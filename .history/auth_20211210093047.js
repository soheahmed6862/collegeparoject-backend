const User = require('./modal/User');

const router = require('express').Router(); 

////////////////////////////////REGISTER

router.post('/register', async(req, res)=>{

    const newUser= new User({
        username: req.bosy.username,
        email: req.bosy.email,
        password: req.bosy.password,

    });
   try {
    cosnt saveUser=await newUser.save();

    res.status(200).json(saveUser);
    console.log(saveUser);
       
   } catch (error) {
       res.status(500).json(error)
   }

})

module.exports =router;