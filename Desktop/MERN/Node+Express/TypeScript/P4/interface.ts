interface iperson{
    firstName:string,
    lastName:string,
    sayHi:()=>string   
}
 var employee:iperson={
     firstName:"jaymin",
     lastName:"darji",
     sayHi:():string=>{return "hello employee";}
 }

 console.log("Employee object");
 console.log(employee.firstName);
 console.log(employee.lastName);
 console.log(employee.sayHi());

 var customer:iperson={
     firstName:"urmi",
     lastName:"patel",
     sayHi:():string=>{return "hello customer"}
 }
 console.log("customer object");
 console.log(customer.firstName);
 console.log(customer.lastName);
 console.log(customer.sayHi());
