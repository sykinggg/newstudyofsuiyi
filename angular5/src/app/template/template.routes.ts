
import { TemplateComponent } from './template/template.component';
import { AllTemplateComponent } from './template.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
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
            }
        ]
    }
]