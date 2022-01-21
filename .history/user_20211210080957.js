const router = require('express').Router(); 


router.get('/user', function (req, res){

    res.send('Welcome')

})
router.post('/post',(req, res) => {

    const username=req.body.username;

    res.send(username)
    console.log(username);
})


module.exports =router