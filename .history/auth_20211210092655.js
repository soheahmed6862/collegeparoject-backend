const User = require('./modal/User');

const router = require('express').Router(); 

////////////////////////////////REGISTER

router.post('/register', function(req, res)=>{

    const newUser= new User({
        username: req.bosy.username,
        email: req.bosy.email,
        password: req.bosy.password,

    });
    newUser.save();

})

module.exports =router;