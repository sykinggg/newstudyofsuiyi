import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in'

@Component({
    selector: 'app-user-main',
    templateUrl: './user-main.component.html',
    styleUrls: ['./user-main.component.scss'],
    animations: [
        fadeIn
    ]
})

export class UserMainComponent implements OnInit{
    constructor() {}

    ngOnInit() {}

    onActivate(component) {
        console.log('组件加载完称>' + component);
    }

    onDeactivate(component) {
        console.log("组件已经移除>"+component);
    }

    doFollow(){
        alert("自己不能关注自己！");
    }
}