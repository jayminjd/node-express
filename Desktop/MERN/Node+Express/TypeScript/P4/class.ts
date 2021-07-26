class App{
name:string;
constructor(Name:string){
    this.name=Name;
}
getname():string{
return this.name;
}
}

const A=new App("jaymin darji");
console.log(A.getname());