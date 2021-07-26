export {};

const person : {
  name : string;
  age : number;
  hobbies : string[],
  role : [number,string,boolean]
} = {
// const person = {
    name : "Maximilian",
    age : 30,
    hobbies: ["Sports","Cooking"],
    role:[4,"author",true]
}
person.role.push("Admin");
person.role.push(false);
person.role[0] = 10;
    console.log(person.role);

for(const hobby of person.hobbies){
    console.log(hobby);
}

let Activities : string[];
Activities = ["sports","video game"];

console.log(Activities);


