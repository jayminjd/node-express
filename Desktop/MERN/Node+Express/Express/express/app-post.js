const express=require('express')
const app=express()

const people=require('./PeopleRouter')
const auth=require('./authRouter')

app.use(express.static('../methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)


app.get('*',(req,res)=>{
    res.status(401).send('webpage not found')
})

app.post('*',(req,res)=>{
    res.status(401).send('webpage not found')
})

app.put('*',(req,res)=>{
    res.status(401).send('webpage not found')
})

app.delete('*',(req,res)=>{
    res.status(401).send('webpage not found')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000');
})