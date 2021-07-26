"use strict";
var s1 = {
    program: "test1",
    cmd: "success"
};
console.log(s1.program + " " + s1.cmd);
var s2 = {
    program: "test2",
    cmd: ["true", "false"]
};
console.log(s2.program + " " + s2.cmd[0] + " or " + s2.cmd[1]);
var s3 = {
    program: "test3",
    cmd: function () { return "will soon be failed"; }
};
var fn = s3.cmd;
console.log(fn());
var foo = function (name) {
    if (typeof name == "string") {
        console.log(name);
        console.log(typeof name);
    }
    else {
        var j;
        var k;
        for (j in name) {
            for (k in name[j]) {
                console.log(name[j][k]);
            }
        }
    }
};
foo("jd");
foo([[1, 2, 3], [7, 8, 9]]);
