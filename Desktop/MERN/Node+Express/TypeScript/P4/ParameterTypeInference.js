"use strict";
var foo = function (x) {
    if (typeof x == number) {
        console.log(x + " is number");
    }
    else if (typeof x == string) {
        console.log(x + " is string");
    }
    else if (typeof x == Boolean) {
        console.log(x + " is boolen");
    }
    else if (typeof x == null) {
        console.log(x + " does not have any value");
    }
};
foo(10);
foo("this is me");
foo(true);
