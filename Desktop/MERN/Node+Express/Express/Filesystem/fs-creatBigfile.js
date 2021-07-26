const {writeFileSync}=require('fs')
for(var i=1;i<100;i++){
     writeFileSync('../folder/bigFile.txt',`hello ${i}\n`,{flag:'a'} )
}