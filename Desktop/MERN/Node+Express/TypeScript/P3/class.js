var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        console.warn(this.name);
    };
    return App;
}());
var a1 = new App("Hello Gujarat");
a1.getName();
