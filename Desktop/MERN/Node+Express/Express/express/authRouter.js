const express=require('express')
const router=express.Router()


router.post('/',(req,res)=>{
    const {name}=req.body;
    if(name){
        res.status(200).send(`Hello ${name}`)
    }
    else{
        res.status(401).send('please provide credentials')
    }
})

module.exports=router