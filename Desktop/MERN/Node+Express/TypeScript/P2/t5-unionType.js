function combine(input1, input2) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number"))
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
var combineAges = combine(30, 28);
console.log(combineAges);
var combineStringAges = combine("30", "28");
console.log(combineStringAges);
var combineNames = combine("Maulik", "Savaliya");
console.warn(combineNames);
