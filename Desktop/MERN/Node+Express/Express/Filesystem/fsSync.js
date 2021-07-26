const {readFileSync,writeFileSync}=require('fs')
console.log('start')
const first=readFileSync('./folder/subfolder/file.txt','utf-8')
const second=readFileSync('./folder/subfolder/file2.txt','utf-8')

writeFileSync(
    './folder/result-sync.txt',
    'here is the result:'+first+","+second,
    {flag:'a'}
    )

console.log('done with task');
console.log('starting the next one');

