"use strict";
function add(n1, n2, p, s) {
    var sum = n1 + n2;
    if (p) {
        console.log(s + sum);
    }
    else {
        return sum;
    }
}
var num1 = 5;
var num2 = 10;
var pResult = true;
var s = 'The result is:';
add(num1, num2, pResult, s);
//console.log(result);
