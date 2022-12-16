var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.shapename = "Rectangle";
        this.length = l;
        this.breadth = b;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var Sphere = /** @class */ (function () {
    function Sphere(r) {
        this.shapename = "Sphere";
        this.radius = r;
    }
    Sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    Sphere.prototype.area = function () {
        return 4 * 3.14 * this.radius * this.radius;
    };
    return Sphere;
}());
var Cone = /** @class */ (function () {
    function Cone(r, h) {
        this.shapename = "Cone";
        this.radius = r;
        this.height = h;
    }
    Cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    Cone.prototype.area = function () {
        return 4 * 3.14 * this.radius * this.radius;
    };
    return Cone;
}());
var objRect = new Rectangle(6, 8);
objRect.printname();
console.log(objRect.area());
var objSph = new Sphere(3);
objSph.printname();
console.log(objSph.area());
var objCone = new Cone(4, 8);
objCone.printname();
console.log(objCone.area());
