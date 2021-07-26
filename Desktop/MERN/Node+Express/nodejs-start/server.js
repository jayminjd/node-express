const express=require('express');
const app=new express();
//const bodyParser= require('body-parser');

app.listen(3000,function(){
    console.log('server running at http://localhost:3000/');
})
const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('connectionstring',{useUnifiedTopology: true},
(err,client)=>{
    if(err) console.error(err);
    console.log('connection successfull')
} 
)

/*app.use(bodyParser.urlencoded({extended: true}))

app.get( '/', (req,res) =>{res.sendFile(__dirname+'/index.html');} )

app.post( '/quotes', (req,res) => {console.log(req.body);})*/

