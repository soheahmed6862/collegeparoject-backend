const router = require('express').Router(); 


router.get('/user', function (req, res){

    res.send('Welcome')

})


module.exports =router