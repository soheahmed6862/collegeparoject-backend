const User = require('./modal/User');

const router = require('express').Router(); 

////////////////////////////////REGISTER

router.post('/register', function(req, res)=>{

    const newUser= new User();

})

module.exports =router;