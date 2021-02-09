var Vector2 = /** @class */ (function () {
    function Vector2() {
    }
    Vector2.prototype.add = function (a, b) {
        return a + b;
    };
    return Vector2;
}());
;
var s = new Vector2();
var p = s.add(5, 5);
console.log(p);
//const v = new Vector2(1, 1);
//console.log(v.length);
