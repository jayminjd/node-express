const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {ADMIN="admin",READ_ONLY=100,AUTHOR="writer"}
const person = {
    name : 'Maximilian',
    age : 30,
    hobbies : ["Sports","Cooking"],
    role : Role.AUTHOR
};

if(person.role === Role.AUTHOR)
    console.log("is author")

console.log(person)