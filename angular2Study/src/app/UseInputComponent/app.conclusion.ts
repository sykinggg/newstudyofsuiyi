import { Component } from '@angular/core';

@Component({
    selector: 'in-conclusion',
    template: `
        <input type="text" #newHero
               (keyup.enter)="addHero(newHero.value)"
               (blur)="addHero(newHero.value); newHero.value = '' ">
        
        <button (click)="addHero(newHero.value)">Add</button>
        
        <ul><li *ngFor="let hero of heroes" (click)="delHero(hero)">{{hero}}</li></ul>`
})

export class inConclusion {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero:string) {
        if(newHero) {
            if(this.heroes.indexOf(newHero) > -1) {
                alert("不能输入重复名称");
            }else{
                this.heroes.push(newHero);
            }
        }
    };
    delHero(hero: string) {
        let idx = this.heroes.indexOf(hero);
        if(confirm("你确信要删除？")){
            this.heroes.splice(idx, 1);
        }else{
            alert("就别逼逼");
        }
    }
}
//总结:
//1.使用模板变量来引用元素 — newHero模板变量引用了<input>元素。 你可以在<input>的任何兄弟或子级元素中引用newHero
//2.传递数值，而非元素 — 获取输入框的值并将它传递给组件的addHero，而不要传递newHero
//3.保持模板语句简单 — (blur)事件被绑定到两个 JavaScript 语句
//    1.第一句调用addHero
//    2.第二句newHero.value=''在添加新英雄到列表中后清除输入框