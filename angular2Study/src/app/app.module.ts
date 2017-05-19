import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//基础用户输入
import { AppComponent }  from './UseInputComponent/app.component';
import { ClickMeComponent } from './UseInputComponent/app.clickComponent';
import { keyupComponent_v1 } from './UseInputComponent/app.$event';
import { loopBackComponent } from './UseInputComponent/app.loop-back';
import { keyUp2 } from './UseInputComponent/app.key-up2';
import { keyEnter } from './UseInputComponent/app.key-up3';
import { keyBlur } from './UseInputComponent/app.key-blur';
import { inConclusion } from './UseInputComponent/app.conclusion';

//表单
import { HeroFormComponent } from './angular-from/hero-form.component';

//依赖注入
//小的可被别的组件使用的小组件
import { HeroListComponent } from './dependent-injection/hero-list.component';
//大的使用别的组件的大组件
import { HeroesComponent } from './dependent-injection/heroes.component';


import { HeroServer } from './dependent-injection/hero.service';

//路由实例
import { AppComponentRouter } from './angular-router/app.component.router/app.component.router';
import { DashboardComponent }   from './angular-router/dashboard.component/dashboard.component';
import { HeroesComponentRouter }      from './angular-router/heroes.component/heroes.component';
import { HeroDetailComponent }  from './angular-router/hero-detail.component/hero-detail.component';
import { HeroService } from './angular-router/hero.service';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  //所有组件全部放在这下面包括引用和被应用的
  declarations: [
      AppComponent, ClickMeComponent, keyupComponent_v1,
      loopBackComponent, keyUp2, keyEnter,
      keyEnter, keyBlur, inConclusion,
      HeroFormComponent, HeroListComponent, HeroesComponent,
      AppComponentRouter, DashboardComponent, HeroesComponentRouter,
      HeroDetailComponent
  ],
  //本身带有的装饰器
  imports: [
      BrowserModule, FormsModule, HttpModule,
      AppRoutingModule
  ],
  //一方面，NgModule 中的服务是被注册到根注入器。这意味着在 NgModule 中注册的服务可以被整个应用访问
  //在应用组件中注册的提供商只在该组件及其子组件中可用
  providers: [
      HeroServer, HeroService
  ],
  //可以在页面上渲染的根组件
  bootstrap: [
      HeroFormComponent, AppComponentRouter
  ]
})
export class AppModule { }
