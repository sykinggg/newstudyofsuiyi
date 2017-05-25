import { Component } from '@angular/core';

@Component({
    selector: 'study-basic',
    template: `
    <h1 routerLink="/study_basic/basicUserInput">用户输入</h1>
    <router-outlet></router-outlet>
`
})

export class study_basic {}