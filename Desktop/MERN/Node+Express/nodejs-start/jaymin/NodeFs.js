const fs=require('fs');
// fs.mkdir('test1',(err)=>{
//     console.log("Folder created suceessfully");
// });
// fs.writeFile('test2.txt',"Hello i am jaymin and i m learning Nodejs",(err)=>{
//     if(err)console.log(err);
//     console.log("File named test2.txt created successfully");
// })
 
// fs.appendFile('test2.txt'," and i am learning it from Thapa technical",(err)=>{
//     console.log("files data appended");
// })

// fs.readFile('test2.txt',"UTF-8",(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
// })
// fs.rename('test2.txt','mine.txt',(err)=>{
//     console.log("rename is done")
// })
// fs.unlink('mine.txt',(err)=>{
//     console.log("files deleted");
// })
fs.rmdir('two',(err)=>{console.log("directory deleted");})