interface ipoint{
    x:number,
    y:number
}
function addpoint (p1:ipoint,p2:ipoint):ipoint{
    var m=p1.x+p2.x;
    var n=p1.y+p2.y;
    return {x:m,y:n}
}
var k=addpoint({x:5,y:6},{x:8,y:7});
console.log(k);