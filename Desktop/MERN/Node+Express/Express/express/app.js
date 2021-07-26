const express=require('express')
const app=express()
const path=require('path')

// setup static and middleware
app.use(express.static('../navbar'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'../navbar/index.html'))
})

app.get('/about',(req,res)=>{
    res.status(200).send('this is about page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>webpage not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})