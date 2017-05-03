import { Component } from '@angular/core';

//通过 $event 对象取得用户输入
@Component({
    selector: 'event-keyup',
    template: `
        <input type="text" (keyup)="onKey($event)">
        <p>{{values}}</p>`
})
//监听keyup事件，并将整个事件载荷 ($event) 传递给组件的事件处理器
//执行流程：
//1.当用户按下并释放一个按键时，触发keyup事件
//2.Angular 在$event变量提供一个相应的 DOM 事件对象
//3.上面的代码将它作为参数传递给onKey()方法

//$event对象的属性取决于 DOM 事件的类型
//所有标准 DOM 事件对象都有一个target属性， 引用触发该事件的元素
//注意:
//target是<input>元素， event.target.value返回该元素的当前内容
//可以用event.key替代event.target.value，积累各个按键本身，这样同样的用户输入可以产生
export class keyupComponent_v1 {
    values = "";
    // onKey(event: any) {
    //     this.values += event.target.value + ' | ';
    // }
    //    上例将$event转换为any类型
    //    这样简化了代码，但是有成本,没有任何类型信息能够揭示事件对象的属性，防止简单的错误
    onKey(event: any) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
    //    $event的类型现在是KeyboardEvent
    //    不是所有的元素都有value属性，所以它将target转换为输入元素
}
//注意:传入 $event 是靠不住的做法
//类型化事件对象揭露了重要的一点，即反对把整个 DOM 事件传到方法中，因为这样组件会知道太多模板的信息