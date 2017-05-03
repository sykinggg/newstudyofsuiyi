"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//按键事件过滤（通过key.enter）
//(keyup)事件处理器监听每一次按键
//有时只在意回车键，因为它标志着用户结束输入
//解决这个问题的一种方法是检查每个$event.keyCode，只有键值是回车键时才采取行动
//更简单的方法是：绑定到 Angular 的keyup.enter 模拟事件
//只有当用户敲回车键时，Angular 才会调用事件处理器
var keyEnter = (function () {
    function keyEnter() {
        this.value = '';
    }
    keyEnter.prototype.onError = function (value) {
        this.value = value;
    };
    return keyEnter;
}());
keyEnter = __decorate([
    core_1.Component({
        selector: 'key-enter',
        template: "\n        <input type=\"text\" #box (keyup.enter)=\"onError(box.value)\">\n        <p>{{value}}</p>"
    })
], keyEnter);
exports.keyEnter = keyEnter;
//# sourceMappingURL=app.key-up3.js.map