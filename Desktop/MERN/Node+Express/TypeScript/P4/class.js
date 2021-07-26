var App = /** @class */ (function () {
    function App(Name) {
        this.name = Name;
    }
    App.prototype.getname = function () {
        return this.name;
    };
    return App;
}());
var A = new App("jaymin darji");
console.log(A.getname());
