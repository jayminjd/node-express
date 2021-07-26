const path =require('path')
console.log(path.sep)

const filepath=path.join('/temp/','temp2','file.txt')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'temp','temp2','file.txt')
console.log(absolute)