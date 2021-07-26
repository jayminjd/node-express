"use strict";
var i;
var j;
function create() {
    return new Array([1, 2, 3], [7, 8, 9]);
}
var display = function (arr_Name) {
    for (i in arr_Name) {
        for (j in arr_Name[i]) {
            console.log(arr_Name[i][j]);
        }
        console.log("\n");
    }
};
var arrName = create();
display(arrName);
