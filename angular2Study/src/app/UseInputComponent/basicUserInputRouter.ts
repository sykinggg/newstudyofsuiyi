import { Component } from '@angular/core';

@Component({
    selector: 'basicUserInputRouter',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/userInput" routerLinkActive="active">用户输入</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.router.css']
})
export class basicUserInputRouter {

}