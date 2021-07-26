const express=require('express')
const app=express()

const logger=require('./logger')
const authorize=require('./authorize')

const morgan=require('morgan')

  // --> use this to apply middleware to all route

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('home')
  })

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{ 
    console.log(req.user)
    res.send('Items')
})

.listen(5000,()=>{
    console.log('server is ruuning on port 5000');
})