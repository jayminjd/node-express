"use strict";
exports.__esModule = true;
var person = {
    // const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [4, "author", true]
};
person.role.push("Admin");
person.role.push(false);
person.role[0] = 10;
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var Activities;
Activities = ["sports", "video game"];
console.log(Activities);
