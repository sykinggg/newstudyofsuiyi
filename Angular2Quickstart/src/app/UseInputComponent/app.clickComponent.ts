import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
//等号左边的(click)表示把按钮的点击事件作为绑定目标。
//等号右边引号中的文本是模板语句，通过调用组件的onClickMe方法来响应这个点击事件
//当用户点击按钮时，Angular 调用ClickMeComponent的onClickMe方法
export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }
}