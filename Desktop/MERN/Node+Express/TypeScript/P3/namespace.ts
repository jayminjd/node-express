
/// <reference path='./Utils.ts' />

namespace UsersUtils 
{
    export class Users extends Parent implements UserTypes
    {
        getName() : string
        {
            return this.name;
        }
    }
}

let obj = new UsersUtils.Users()
obj.setName("tony stark and james bond")
console.warn(obj.getName());