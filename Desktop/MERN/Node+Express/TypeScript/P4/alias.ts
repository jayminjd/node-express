type   combineType=number|string;
function pick(input:combineType):combineType{
if(input=='string'){return input;}
else return input.toString();
}
let cp=pick(10);
let cp2=pick("jaymin");
console.log(cp2+"  "+cp);