export {}

function add(n1:number,n2:number,showResult:boolean,phrase:string)
{
    // if(typeof n1!=="number" || typeof n2!=="number")
    //     throw new Error("Incorrect Input");
    const result = n1 + n2;
    if(showResult)
        console.log(phrase+result);
    else
        return result;
}

let num1:number;
num1 = 5;
const num2 = 7.8;
const printResult = true;
let resultPhrase:string;
resultPhrase = "Result is : ";

const result = add(num1,num2,printResult,resultPhrase);
console.log(result);
