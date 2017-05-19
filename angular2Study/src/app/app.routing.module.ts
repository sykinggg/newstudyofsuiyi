import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//原始实例
import { DashboardComponent }   from './angular-router/dashboard.component/dashboard.component';
import { HeroesComponentRouter }      from './angular-router/heroes.component/heroes.component';
import { HeroDetailComponent }  from './angular-router/hero-detail.component/hero-detail.component';

// const routes: Routes = [
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     { path: 'dashboard',  component: DashboardComponent },
//     { path: 'detail/:id', component: HeroDetailComponent },
//     { path: 'heroes',     component: HeroesComponentRouter }
// ];

// @NgModule({
//     imports: [ RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ]
// })
// export class AppRoutingModule {}
/*
* UseInputComponent-用户输入
* */
import { basicUserInputRouter } from './UseInputComponent/basicUserInputRouter';
import { keyupComponent_v1 } from './UseInputComponent/app.$event';

//定义常量 嵌套自路由
const appChildRoutes: Routes = [
    {path: '', redirectTo: 'app_event', pathMath: 'full'},
    {path: 'app_event', component:keyupComponent_v1}
];

//定义常量路由
const appRoutes:Routes = [
    {path: '', redirectTo: 'app_event', pathMath: 'full'},
    {path: 'userInput', component: basicUserInputRouter, children: appChildRoutes}
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}