const router = require('express').Router(); 


router.get('/user', function (req, res){

    res.send('Welcome')

})
app.post('/post',(req, res) => {

    const username=req.body.username;
    console.log(username);
})


module.exports =router