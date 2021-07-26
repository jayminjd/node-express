var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var member = /** @class */ (function () {
    function member() {
    }
    return member;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    employee.prototype.setName = function (n, p, a) {
        this.name = n;
        this.phone = p;
        this.address = a;
    };
    return employee;
}(member));
var a1 = new employee;
a1.setName("jaymin", "5454548215", "1 street avanue");
console.log(a1.address);
