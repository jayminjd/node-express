var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "writer";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
if (person.role === Role.AUTHOR)
    console.log("is author");
console.log(person);
