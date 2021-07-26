
class member {
    name;
    phone;
    address;
  
}
class employee extends member{
    setName(n:string,p:string,a:string){
        this.name=n;
        this.phone=p;
        this.address=a;
    }
}
let a1=new employee;
a1.setName("jaymin","5454548215","1 street avanue");
console.log(a1.address);