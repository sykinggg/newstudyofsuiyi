import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './UseInputComponent/app.component';
import { ClickMeComponent } from './UseInputComponent/app.clickComponent';
import { keyupComponent_v1 } from './UseInputComponent/app.$event';
import { loopBackComponent } from './UseInputComponent/app.loop-back';
import { keyUp2 } from './UseInputComponent/app.key-up2';
import { keyEnter } from './UseInputComponent/app.key-up3';
import { keyBlur } from './UseInputComponent/app.key-blur';
import { inConclusion } from './UseInputComponent/app.conclusion'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ClickMeComponent, keyupComponent_v1, loopBackComponent, keyUp2, keyEnter, keyBlur,
      inConclusion],
  bootstrap:    [ AppComponent, ClickMeComponent, keyupComponent_v1, loopBackComponent, keyUp2, keyEnter, keyBlur,
      inConclusion]
})
export class AppModule { }
