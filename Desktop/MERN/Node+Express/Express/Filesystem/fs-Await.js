const { promises } = require('dns')
const {readFile,writeFile}=require('fs')
const { resolve } = require('path')
//const path=require('path')
//const filepath=path.join(__dirname,'file.txt')

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
      readFile(path,'utf8',(err,result)=>{
                
        if(err){
            reject(err);
        }
        else{
            resolve(result);
        }
      })
    })
}


 const start=async()=>{
     try {
        const first=await getText('../folder/subfolder/file.txt');
        const second=await getText('../folder/subfolder/file2.txt');
        
        console.log(first+"\n"+second)
        
        await writeFile('../folder/result-Await.txt',`this is both file ${first}  ${second}`,(err,result)=>{
         //   for(var i=1;i<10;i++){console.log(i)}
            if(err){
                console.log(err)
                return
            }
            console.log('Writing on a file is successful')
        })
        console.log("qqqqqqqqqqqqqqqqqqqqqqqq")
    } 
    
     catch (error) {
       console.log(error)  
     }
     
 }
 start()
   