const http=require('http')
var fs=require('fs')

http
    .createServer(function(req,res){
        const filestream=fs.createReadStream('../folder/bigFile.txt','utf8')
        filestream.on('open',()=>{
            filestream.pipe(res)//sending chunks of data
        })
        filestream.on('error',()=>{
            console.log(err)
        })
    })
    .listen(5000,()=>{
        console.log('listening on port 5000')
    })