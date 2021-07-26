const express=require('express')

const app=express()

const logger=require('./logger')
const authorize=require('./authorize')

//app.use([logger,authorize])   --> use this to apply middleware to all route

app.get('/',(req,res)=>{
    res.send('home')
  })

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',[logger,authorize],logger,(req,res)=>{ //use this to apply middleware to specific route
    console.log(req.user)
    res.send('Items')
})

.listen(5000,()=>{
    console.log('server is ruuning on port 5000');
})