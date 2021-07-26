function pick(input) {
    if (input == 'string') {
        return input;
    }
    else
        return input.toString();
}
var cp = pick(10);
var cp2 = pick("jaymin");
console.log(cp2 + "  " + cp);
