const express=require('express')

const app=express()
const {products}=require('./data')
app.get('/',(req,res)=>{
    res.send(' <h1>Home page</h1><a href="/api/products">products</a>')})

app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return{id,name,image}
    })
    res.json(newProducts)
})   

app.get('/api/products/:ProductID',(req,res)=>{
    // console.log(req)
    // console.log(req.params);
    const {ProductID}=req.params
    const singlePerson=products.find((product)=>product.id===Number(ProductID))
    
    if(!singlePerson){
        return res.status(404).send('product which you are looking does not exit')
    }
    
    return res.json(singlePerson)
    
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('Hello world')
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(200).send('No products matched')
    }
    res.status(200).json(sortedProducts);
    //res.send('Hello query program');
})

app.listen(5000,()=>{
    console.log('server is running on port 5000');
})