import { Component } from '@angular/core';
//按键事件过滤（通过key.enter）
//(keyup)事件处理器监听每一次按键
//有时只在意回车键，因为它标志着用户结束输入
//解决这个问题的一种方法是检查每个$event.keyCode，只有键值是回车键时才采取行动
//更简单的方法是：绑定到 Angular 的keyup.enter 模拟事件
//只有当用户敲回车键时，Angular 才会调用事件处理器
@Component({
    selector: 'key-enter',
    template: `
        <input type="text" #box (keyup.enter)="onError(box.value)">
        <p>{{value}}</p>`
})

export class keyEnter {
    value = '';
    onError(value: string) {
        this.value = value;
    }
}