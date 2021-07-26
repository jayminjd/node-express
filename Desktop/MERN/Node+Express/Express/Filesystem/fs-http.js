const http=require('http')
var fs=require('fs')

http
    .createServer(function(req,res){
        const text=fs.readFileSync('../folder/bigFile.txt','utf8')
        res.end(text)
    })
    .listen(5000,()=>{
        console.log('listening on port 5000')
    })