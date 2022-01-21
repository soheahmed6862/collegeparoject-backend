const res = require('express/lib/response');
const jwt = require('jsonwebtoken');


const verifytoken =(req, res,next) => {

const authHandler =req.headers.token;
console.log(authHandler)

if(authHandler){
    jwt.verify(token,process.env.JWT,(err,user) => {
if(err){
    return res.status(401).json("token is not valid")
}
else{
    req.user=user
     next();
}


    })

}else{

    return res.status(401).json("You ar not allow")
}

}

const verifyTokenAuthorization =(req, res, next) => {

    verifytoken((req,res)=>{
        if(req.body.id===req.params.id || req.user.isAdmin){
next()
        }
        else{
            return res.status(401).json("You are now allow that..")
        }
    })
}

module.exports={verifytoken, verifyTokenAuthorization}