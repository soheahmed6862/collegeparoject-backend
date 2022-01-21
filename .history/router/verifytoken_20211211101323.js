const res = require('express/lib/response');
const jwt = require('jsonwebtoken');


const verifytoken =(req, res,next) => {

const authHandler =req.headers.token;


if(authHandler){
    const token=authHandler.split(' ')[1]
    jwt.verify(token,process.env.JWT,(err,user) => {
if(err) res.status(401).json("token is not valid");

    req.user=user
     next();



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