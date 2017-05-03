"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//通过 $event 对象取得用户输入
var keyupComponent_v1 = (function () {
    function keyupComponent_v1() {
        this.values = "";
        //    $event的类型现在是KeyboardEvent
        //    不是所有的元素都有value属性，所以它将target转换为输入元素
    }
    // onKey(event: any) {
    //     this.values += event.target.value + ' | ';
    // }
    //    上例将$event转换为any类型
    //    这样简化了代码，但是有成本,没有任何类型信息能够揭示事件对象的属性，防止简单的错误
    keyupComponent_v1.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    return keyupComponent_v1;
}());
keyupComponent_v1 = __decorate([
    core_1.Component({
        selector: 'event-keyup',
        template: "\n        <input type=\"text\" (keyup)=\"onKey($event)\">\n        <p>{{values}}</p>"
    })
], keyupComponent_v1);
exports.keyupComponent_v1 = keyupComponent_v1;
//注意:传入 $event 是靠不住的做法
//类型化事件对象揭露了重要的一点，即反对把整个 DOM 事件传到方法中，因为这样组件会知道太多模板的信息 
//# sourceMappingURL=app.$event.js.map