import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { appRoutes } from './app.routes';
import { MapComponent } from './map/map.component';
import { UiComponent } from './ui/ui.component';
import { MyFirstDirectiveDirective } from './directive/my-first-directive/my-first-directive.directive';
import { CustomStructureInstructionDirective } from './directive/custom-structure/custom-structure-instruction.directive';
import { DirectiveExplainComponent } from './directive-explain/directive-explain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    UiComponent,
    MyFirstDirectiveDirective,
    CustomStructureInstructionDirective,
    DirectiveExplainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
