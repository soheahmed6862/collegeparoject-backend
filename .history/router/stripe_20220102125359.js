const router = require('express').Router();

const stripe = require('stripe')('sk_test_51K8GwIAGouOa8CS5V0v7LgG71hdsbbSSwBH2Ugi1TStcZoEkQ5jIxc10dhYydXbMqpfuG4q9KYCgGn213lkzWcYA00Ke5dq7k2');

router.post("/p",(req, res) => {
    stripe.charges.create({
           source:req.body.tokenid,
           amount:req.body.amount,
           currency:"usd"
      },
      (strpeErr,striperes)=>{

        if(strpeErr){
            res.status(500).json(strpeErr)
            console.log(`reeor ${strpeErr}`)
            
        }
        else{
            res.status(200).json(striperes)
            console.log(striperes)
        }
      }
      
      )       
})

router.get('/r',(req, res)=>{
    res.send("sdfsadfasdf")
})
module.exports = router;