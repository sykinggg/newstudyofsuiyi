import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ui框架
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { appRoutes } from './app.routes';// 路由

import { AppComponent } from './app.component'; // 根组件

import { LocalStorage } from './common/local.storage'; // 公共组建

import { AboutComponent } from './about/about.component'; // 其它组件
import { MapComponent } from './map/map.component';
import { MapBaseComponent } from './map/map-base/map-base.component';
import { BasePipe } from './pipe/base/base.pipe';
import { MapInformationPipe } from './pipe/map-information/map-information.pipe';
import { MapSearchComponent } from './map/map-search/map-search.component';
import { MapDirectiveDirective } from './directive/map-directive/map-directive.directive';
import { HttpComponent } from './http/http.component';
import { BaseServiceService } from "./service/http-service/base-service/base-service.service";
import { AllTemplateComponent } from './template/template.component';
import { TemplateComponent } from './template/template/template.component';
import { ComponentInteractionComponent } from './template/component-interaction/component-interaction.component';
import { ComponentInteractionChildComponent } from './template/component-interaction/component-interaction-child/component-interaction-child.component';
import { AttrDirectiveComponent } from './template/attr-directive/attr-directive.component';
import { AttrFirstDirectiveDirective } from './directive/attr-first-directive/attr-first-directive.directive';
import { AttrSecondDirectiveDirective } from './directive/attr-second-directive/attr-second-directive.directive';
import { AttrThirdDirectiveDirective } from './directive/attr-third-directive/attr-third-directive.directive';
import { StrDirectiveComponent } from './template/str-directive/str-directive.component';
import { StrFirstDirectiveDirective } from './directive/str-first-directive/str-first-directive.directive';
import { PipeComponent } from './template/pipe/pipe.component';
import { ExponentialStrengthPipePipe } from './pipe/exponential-strength-pipe/exponential-strength-pipe.pipe';
import { PipeFirstPipe } from './pipe/pipe-first/pipe-first.pipe';
import { PipeHttpPipe } from './pipe/pipe-http/pipe-http.pipe';
import { AnimationsComponent } from './template/animations/animations.component';
import { UserInputComponent } from './form/user-input/user-input.component';
import { FormComponent } from './form/form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { FormValidateComponent } from './form/form-validate/form-validate.component';
import { FormResponseComponent } from './form/form-response/form-response.component';
import { ForbiddenNameDirective } from './directive/forbidden-name/forbidden-name.directive';
import { FormResponseDetailComponent } from './form/form-response-detail/form-response-detail.component';
import { FormResponseListComponent } from './form/form-response-list/form-response-list.component';


@NgModule({
    declarations: [
        AppComponent, // 根组件
        MapComponent, // 应用组件
        BasePipe,
        MapInformationPipe,
        MapBaseComponent,
        MapSearchComponent,
        MapDirectiveDirective,
        AllTemplateComponent,
        TemplateComponent,
        HttpComponent,
        ComponentInteractionChildComponent,
        AttrDirectiveComponent,
        ComponentInteractionComponent,
        AboutComponent,
        AttrSecondDirectiveDirective, // 指令
        AttrFirstDirectiveDirective,
        StrDirectiveComponent,
        StrFirstDirectiveDirective,
        PipeComponent,
        ExponentialStrengthPipePipe,
        PipeFirstPipe,
        PipeHttpPipe,
        AnimationsComponent,
        UserInputComponent,
        FormComponent,
        TemplateFormComponent,
        FormValidateComponent,
        FormResponseComponent,
        ForbiddenNameDirective,
        FormResponseDetailComponent,
        FormResponseListComponent,
        AttrThirdDirectiveDirective,
    ],
    imports: [
        BrowserModule, // 基础
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService), // 前端内存服务
        NoopAnimationsModule, // UI框架
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSelectModule,
        MatToolbarModule,
        MatChipsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        RouterModule.forRoot(appRoutes), // 路由
    ],
    providers: [
        LocalStorage,
        BaseServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
