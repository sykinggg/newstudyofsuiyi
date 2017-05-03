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


import { HeroFormComponent } from './angular-from/hero-form.component';

//依赖注入
import { HeroListComponent } from './dependent-injection/hero-list.component';
import { HeroesComponent } from './dependent-injection/heroes.component';
@NgModule({
  declarations: [
      AppComponent, ClickMeComponent, keyupComponent_v1,
      loopBackComponent, keyUp2, keyEnter,
      keyEnter, keyBlur, inConclusion,
      HeroFormComponent, HeroListComponent, HeroesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [
      AppComponent, ClickMeComponent, keyupComponent_v1,
      loopBackComponent, keyUp2, keyEnter,
      keyEnter, keyBlur, inConclusion
  ]
})
export class AppModule { }
