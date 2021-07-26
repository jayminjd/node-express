interface ip{
    program:string;
    cmd:string|string[]|(()=>string);
}

var s1:ip={
    program:"test1",
    cmd:"success"
}
console.log(s1.program+" "+s1.cmd);

var s2:ip={
    program:"test2",
    cmd:["true","false"]
}
console.log(s2.program+" "+s2.cmd[0]+" or "+s2.cmd[1]);

var s3:ip={
    program:"test3",
    cmd:():string=>{return "will soon be failed";}
}
var fn:any=s3.cmd;
console.log(fn());


var foo=(name:string|number[][])=>{
if(typeof name=="string")
 { 
      console.log( name);
      console.log(typeof name);
 }
    
    

else{
    var j:any;
     var k:any;
     for(j in name){for(k in name[j]){ console.log(name[j][k]);}}
       }

}
foo("jd");
foo([[1,2,3],[7,8,9]]);
