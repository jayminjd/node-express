 const {createReadStream}=require('fs')

 const stream=createReadStream('../folder/bigFile.txt','utf8')

 stream.on('data',(result)=>{
     console.log(result)
 })
 stream.on('error',(err)=>{
     console.log(err)
 })