var i:any;
var j:any;
function create():number[][]{
    return new Array([1,2,3],[7,8,9]);
}
 const display=(arr_Name:number[][])=>{
     for(i in arr_Name){
         for(j in arr_Name[i]){
             console.log(arr_Name[i][j]);
         }
         console.log("\n")
     }
 }
 var arrName:number[][]=create();
 display(arrName);
 