"use strict";
exports.__esModule = true;
function add(n1, n2, showResult, phrase) {
    // if(typeof n1!=="number" || typeof n2!=="number")
    //     throw new Error("Incorrect Input");
    var result = n1 + n2;
    if (showResult)
        console.log(phrase + result);
    else
        return result;
}
var num1;
num1 = 5;
var num2 = 7.8;
var printResult = true;
var resultPhrase;
resultPhrase = "Result is : ";
var result = add(num1, num2, printResult, resultPhrase);
console.log(result);
