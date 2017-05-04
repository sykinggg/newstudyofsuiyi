import { Component } from '@angular/core';

import { Hero }    from './hero';
// 导入了Angular核心库以及创建的Hero模型


/*
* gModel 指令不仅仅跟踪状态。它还使用特定的 Angular CSS 类来更新控件，以反映当前状态
* 可以利用这些 CSS 类来修改控件的外观，显示或隐藏消息
*
* 状态                为真时的 CSS 类             为假时的 CSS 类
* 控件被访问过         ng-touched                 ng-untouched
* 控件的值变化了       ng-dirty                   ng-pristine
* 控件的值有效         ng-valid                   ng-invalid
* */
@Component({
    selector: 'hero-form',
    //@Component选择器"hero-form"表示可以用<hero-form>标签把这个表单放进父模板
    templateUrl: './hero-form.component.html'
    //templateUrl属性指向一个独立的 HTML 模板文件
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // 以JSON格式输出数据格式
    get diagnostic() { return JSON.stringify(this.model); }
    // 添加一个diagnostic属性，以返回这个模型的 JSON 形式

    newHero() { this.model = new Hero(42, '', ''); }
}
