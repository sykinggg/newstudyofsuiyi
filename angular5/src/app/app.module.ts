import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RouterModule } from '@angular/router';

// ui框架
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
// 路由
import { appRoutes } from './app.routes';
// 根组件
import { AppComponent } from './app.component';
// 公共组建
import { LocalStorage } from './common/local.storage';
// 其它组件
import { AboutComponent } from './about/about.component';
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



@NgModule({
    declarations: [
        // 根组件
        AppComponent,
        // 应用组件
        MapComponent,
        BasePipe,
        MapInformationPipe,
        MapBaseComponent,
        MapSearchComponent,
        MapDirectiveDirective,
        AllTemplateComponent,
        TemplateComponent,
        HttpComponent,
        ComponentInteractionChildComponent,
        ComponentInteractionComponent,
        AboutComponent
    ],
    imports: [
        // 基础
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        HttpModule,
        // 前端内存服务
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // UI框架
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatToolbarModule,
        MatChipsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        // 路由
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        LocalStorage,
        BaseServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
