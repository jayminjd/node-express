 interface userTyped  {
        name : string,
        age:number,
        address: any,
        getName:()=>string
    }

    let users : userTyped= {
        name:"bruce lee",
        age:30,
        address:"USA",
        getName : function(){
            return this.name;
        }
    }
    users.address = 199 + 3 + " USA";
    // console.warn(users);
    console.warn(users.getName());