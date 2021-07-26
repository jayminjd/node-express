var users = {
    name: "bruce lee",
    age: 30,
    address: "USA",
    getName: function () {
        return this.name;
    }
};
users.address = 199 + 3 + " USA";
// console.warn(users);
console.warn(users.getName());
