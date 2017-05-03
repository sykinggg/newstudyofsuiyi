"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//使用了局部模板变量，在一个超简单的模板中实现按键反馈功能
var loopBackComponent = (function () {
    //总结:除非你绑定一个事件，否则这将完全无法工作
    //    只有在应用做了些异步事件（如击键），Angular 才更新绑定（并最终影响到屏幕）
    //本例代码将keyup事件绑定到了数字0，这是可能是最短的模板语句
    //虽然这个语句不做什么，但它满足 Angular 的要求，所以 Angular 将更新屏幕
    function loopBackComponent() {
    }
    return loopBackComponent;
}());
loopBackComponent = __decorate([
    core_1.Component({
        selector: 'loop-back',
        //这个模板引用变量名叫box，在<input>元素声明，它引用<input>元素本身
        //代码使用box获得输入元素的value值，并通过插值表达式把它显示在<p>标签中
        //这个模板完全是完全自包含的。它没有绑定到组件，组件也没做任何事情
        template: "\n        <input #box (keyup)=\"0\">\n        <p>{{box.value}}</p>"
    })
], loopBackComponent);
exports.loopBackComponent = loopBackComponent;
//# sourceMappingURL=app.loop-back.js.map