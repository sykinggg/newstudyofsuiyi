
import { TemplateComponent } from './template/template.component';
import { AllTemplateComponent } from './template.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { StrDirectiveComponent } from './str-directive/str-directive.component';
export const templateRoutes = [
    {
        path: '',
        component: AllTemplateComponent,
        children: [
            {
                path: '',
                redirectTo: 'tempalte',
                pathMatch: 'full'
            },
            {
                path: 'tempalte',
                component: TemplateComponent
            },
            {
                path: 'interaction',
                component: ComponentInteractionComponent
            },
            {
                path: 'attrDir',
                component: AttrDirectiveComponent
            },
            {
                path: 'strDir',
                component: StrDirectiveComponent
            }
        ]
    }
]