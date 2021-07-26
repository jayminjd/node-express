const { promises } = require('dns')
const {readFile}=require('fs')
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

 getText('../folder/subfolder/file.txt')
 .then(result=>{console.log(result)})
 .catch(err=>{console.log(err)})
