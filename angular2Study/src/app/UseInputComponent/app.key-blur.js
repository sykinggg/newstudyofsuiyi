"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var keyBlur = (function () {
    function keyBlur() {
        this.value = "";
    }
    keyBlur.prototype.update = function (value) {
        this.value = value;
    };
    return keyBlur;
}());
keyBlur = __decorate([
    core_1.Component({
        selector: 'key-blur',
        template: "\n        <input type=\"text\" #box (keyup.enter)=\"update(box.value)\" (blur)=\"update(box.value)\">\n        <p>{{value}}</p>"
    })
], keyBlur);
exports.keyBlur = keyBlur;
//# sourceMappingURL=app.key-blur.js.map