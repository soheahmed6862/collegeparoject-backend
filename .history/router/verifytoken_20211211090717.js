const res = require('express/lib/response');
const jwt = require('jsonwebtoken');


const verifytoekn =(req, ,next) => {

const authHandler =req.headers.token;

if(authHandler){

}else{

    return res.status(401).json("You ar not allow")
}

}