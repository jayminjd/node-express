const { promises } = require('dns')
const {readFile,writeFile}=require('fs')
const { resolve } = require('path')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)
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
        const first=await readFilePromise('../folder/subfolder/file.txt','utf8');
        const second=await readFilePromise('../folder/subfolder/file2.txt');
       
        console.log(first+"\n"+second)
       
        await writeFilePromise('../folder/result-Await.txt',`nhere is the result2: ${first} ${second} \n`,{flag:'a'} )
        
     } catch (error) {
       console.log(error)  
     }
     
 }
 start()
   