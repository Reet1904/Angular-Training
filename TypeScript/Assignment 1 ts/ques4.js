var item = /** @class */ (function () {
    function item(itemid, name, price, category) {
        var _this = this;
        this.display = function () {
            return _this.itemid + " " + _this.itemname + " " + _this.itemprice + " " + _this.category;
        };
        this.itemid = itemid;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;
    }
    return item;
}());
var items = new item(1, "Apple", 10000, "Mobile");
var itemsa = new item(2, "Parker", 10000, "Pen");
console.log(items.display());
