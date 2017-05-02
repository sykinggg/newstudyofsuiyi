import { Component } from '@angular/core';
//从模板变量获得输入框比通过$event对象更加简单。 下面的代码重写了之前keyup示例，它使用变量来获得用户输入
@Component({
    selector: 'key-up2',
    template: `
        <input type="text" #box (keyup)="onKey(box.value)" >
        <p>{{values}}</p>`
})
export class keyUp2 {
    values = '';

    onKey(value: string) {
        this.values += value + ' | ';
    }
}
//总结:这个方法最漂亮的一点是：组件代码从视图中获得了干净的数据值。再也不用了解$event变量及其结构了