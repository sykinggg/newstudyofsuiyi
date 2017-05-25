/*
* 普通路由结构
 * */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//原始实例
import { DashboardComponent }   from './angular-router/dashboard.component/dashboard.component';
import { HeroesComponentRouter }      from './angular-router/heroes.component/heroes.component';
import { HeroDetailComponent }  from './angular-router/hero-detail.component/hero-detail.component';
//
// const routes: Routes = [
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     { path: 'dashboard',  component: DashboardComponent },
//     { path: 'detail/:id', component: HeroDetailComponent },
//     { path: 'heroes',     component: HeroesComponentRouter }
// ];
//
// @NgModule({
//     imports: [ RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ]
// })
// export class AppRoutingModule {}
/*
* 嵌套路由结构
* */

/*
* UseInputComponent-用户输入
* */
import { study_basic } from './app.study_basic';

import { basicUserInputRouter } from './UseInputComponent/basicUserInputRouter';

import { AppComponent }  from './UseInputComponent/app.component';

//定义常量路由
const routes: Routes = [
    {
        path: '',
        redirectTo: '/study_basic',
        pathMatch: 'full'
    },
    {
        path: 'study_basic',
        component: study_basic,
        children: [
            {
                path: 'basicUserInput',
                component: basicUserInputRouter,
                children: [
                    {
                        path: 'basic',
                        component: AppComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}