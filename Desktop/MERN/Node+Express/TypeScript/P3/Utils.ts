namespace UsersUtils{
    export class Parent{
        name;
        setName(name : string):void
        {
            this.name = name;
        }
    }
    export interface UserTypes{
        getName();
    }
}