import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { LocalStorage } from './common/local.storage';

import { appRoutes } from './app.routes';
import { MapComponent } from './map/map.component';
import { UiComponent } from './ui/ui.component';
import { MyFirstDirectiveDirective } from './directive/my-first-directive/my-first-directive.directive';
import { CustomStructureInstructionDirective } from './directive/custom-structure/custom-structure-instruction.directive';
import { DirectiveExplainComponent } from './directive-explain/directive-explain.component';
import { MapStudyComponent } from './map-study/map-study.component';
import { UiStudyComponent } from './ui-study/ui-study.component';
import { StudyComponent } from './study/study.component';
import { RouterComponent } from './study/router/router.component';
import { DependencyInjectionComponent } from './study/dependency-injection/dependency-injection.component';
import { TemplateDataBindingComponent } from './study/template-data-binding/template-data-binding.component';
import { LifecycleHooksComponent } from './study/lifecycle-hooks/lifecycle-hooks.component';
import { ComponentInteractionComponent } from './study/component-interaction/component-interaction.component';
import { ComponentStylesComponent } from './study/component-styles/component-styles.component';
import { DynamicComponentLoaderComponent } from './study/dynamic-component-loader/dynamic-component-loader.component';
import { AttributeDirectivesComponent } from './study/attribute-directives/attribute-directives.component';
import { SructuralDectivesComponent } from './study/sructural-dectives/sructural-dectives.component';
import { PipesComponent } from './study/pipes/pipes.component';
import { JsAlgorithmComponent } from './js-algorithm/js-algorithm.component';
import { AlgorithmComponent } from './js-algorithm/algorithm/algorithm.component';
import { AnimationsComponent } from './study/animations/animations.component';
import { FormComponent } from './study/form/form.component';
import { JsDesignPatternComponent } from './js-design-pattern/js-design-pattern.component';
import { OpjectOrientedComponent } from './js-design-pattern/opject-oriented/opject-oriented.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    UiComponent,
    MyFirstDirectiveDirective,
    CustomStructureInstructionDirective,
    DirectiveExplainComponent,
    MapStudyComponent,
    UiStudyComponent,
    StudyComponent,
    RouterComponent,
    DependencyInjectionComponent,
    TemplateDataBindingComponent,
    LifecycleHooksComponent,
    ComponentInteractionComponent,
    ComponentStylesComponent,
    DynamicComponentLoaderComponent,
    AttributeDirectivesComponent,
    SructuralDectivesComponent,
    PipesComponent,
    JsAlgorithmComponent,
    AlgorithmComponent,
    AnimationsComponent,
    FormComponent,
    JsDesignPatternComponent,
    OpjectOrientedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    BsDropdownModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
