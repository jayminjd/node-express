function add(n1:number,n2:number,p:boolean,s:string){
    const sum=n1+n2;
    if(p){
        console.log(s+sum);
    }
    else{
return sum;}
}
const num1=5;
const num2=10;
const pResult=true;
const s='The result is:'
add(num1,num2,pResult,s);
//console.log(result);