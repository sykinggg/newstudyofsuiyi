"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var inConclusion = (function () {
    function inConclusion() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
    inConclusion.prototype.addHero = function (newHero) {
        if (newHero) {
            if (this.heroes.indexOf(newHero) > -1) {
                alert("不能输入重复名称");
            }
            else {
                this.heroes.push(newHero);
            }
        }
    };
    ;
    inConclusion.prototype.delHero = function (idx) {
        if (confirm("你确信要删除？")) {
            this.heroes.splice(idx, 1);
        }
        else {
            alert("就别逼逼");
        }
    };
    return inConclusion;
}());
inConclusion = __decorate([
    core_1.Component({
        selector: 'in-conclusion',
        template: "\n        <input type=\"text\" #newHero\n               (keyup.enter)=\"addHero(newHero.value)\"\n               (blur)=\"addHero(newHero.value); newHero.value = '' \">\n        \n        <button (click)=\"addHero(newHero.value)\">Add</button>\n        \n        <ul><li *ngFor=\"let hero of heroes\" (click)=\"delHero($index)\">{{hero}}</li></ul>"
    })
], inConclusion);
exports.inConclusion = inConclusion;
//总结:
//1.使用模板变量来引用元素 — newHero模板变量引用了<input>元素。 你可以在<input>的任何兄弟或子级元素中引用newHero
//2.传递数值，而非元素 — 获取输入框的值并将它传递给组件的addHero，而不要传递newHero
//3.保持模板语句简单 — (blur)事件被绑定到两个 JavaScript 语句
//    1.第一句调用addHero
//    2.第二句newHero.value=''在添加新英雄到列表中后清除输入框 
//# sourceMappingURL=app.conclusion.js.map