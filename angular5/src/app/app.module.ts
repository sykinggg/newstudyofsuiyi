import { NgModule } from '@angular/core';
//  基础模块
import { AppBaseModule } from './app.base.module';
//  ui模块
import { AppUIModule } from './app.ui.module';
//  路由模块
import { AppRoutingModule } from './app.routes.module';
//  根组件
import { AppComponent } from './app.component';

import { LocalStorage } from './common/local.storage';

// import { AboutComponent } from './about/about.component';
// import { AboutIndexComponent } from './about/about-index/about-index.component';
// import { AboutCreateComponent } from './about/about-create/about-create.component';

import { MapComponent } from './map/map.component';
import { MapBaseComponent } from './map/map-base/map-base.component';
import { MapSearchComponent } from './map/map-search/map-search.component';
import { MapInformationPipe } from './pipe/map-information/map-information.pipe';
import { MapDirectiveDirective } from './directive/map-directive/map-directive.directive';

import { BasePipe } from './pipe/base/base.pipe';
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
        BasePipe,
        AllTemplateComponent,
        TemplateComponent,
        HttpComponent,
        ComponentInteractionChildComponent,
        AttrDirectiveComponent,
        ComponentInteractionComponent,
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
        MapComponent,
        MapBaseComponent,
        MapSearchComponent,
        MapInformationPipe,
        MapDirectiveDirective,
    ],
    imports: [
        AppBaseModule,
        AppUIModule,
        AppRoutingModule, // 路由
    ],
    providers: [
        LocalStorage,
        BaseServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
