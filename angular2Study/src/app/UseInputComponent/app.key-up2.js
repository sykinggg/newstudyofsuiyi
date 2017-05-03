"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//从模板变量获得输入框比通过$event对象更加简单。 下面的代码重写了之前keyup示例，它使用变量来获得用户输入
var keyUp2 = (function () {
    function keyUp2() {
        this.values = '';
    }
    keyUp2.prototype.onKey = function (value) {
        this.values += value + ' | ';
    };
    return keyUp2;
}());
keyUp2 = __decorate([
    core_1.Component({
        selector: 'key-up2',
        template: "\n        <input type=\"text\" #box (keyup)=\"onKey(box.value)\" >\n        <p>{{values}}</p>"
    })
], keyUp2);
exports.keyUp2 = keyUp2;
//总结:这个方法最漂亮的一点是：组件代码从视图中获得了干净的数据值。再也不用了解$event变量及其结构了 
//# sourceMappingURL=app.key-up2.js.map