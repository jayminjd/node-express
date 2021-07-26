const {readFile,writeFile}=require('fs')
console.log('start')

readFile('./folder/subfolder/file.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
       return
    }
    const first=result;
    readFile('./folder/subfolder/file2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile(
            './folder/result-async.txt',
            `Here is the result : ${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
               console.log('done with this task')
            }
        )
    })

})
console.log('starting new task')