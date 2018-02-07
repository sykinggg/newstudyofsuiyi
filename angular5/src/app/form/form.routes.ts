import { FormComponent } from './form.component';
import { UserInputComponent } from './user-input/user-input.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const formRoutes = [
    {
        path: '',
        component: FormComponent,
        children: [
            {
                path: '',
                redirectTo: 'userInput',
                pathMatch: 'full'
            },
            {
                path: 'userInput',
                component: UserInputComponent
            },
            {
                path: 'templateForm',
                component: TemplateFormComponent
            }
        ]
    }
]