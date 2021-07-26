"use strict";
function addpoint(p1, p2) {
    var m = p1.x + p2.x;
    var n = p1.y + p2.y;
    return { x: m, y: n };
}
var k = addpoint({ x: 5, y: 6 }, { x: 8, y: 7 });
console.log(k);
