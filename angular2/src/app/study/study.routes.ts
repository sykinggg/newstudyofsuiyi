import { RouterComponent } from './router/router.component';
import { StudyComponent } from "./study.component";
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { TemplateDataBindingComponent } from './template-data-binding/template-data-binding.component';

export const studyRoutes = [
    {
        path: '',
        component: StudyComponent,
        children: [
            {
                path: '',
                redirectTo: 'router',
                pathMatch: 'full'
            },
            {
                path: 'router',
                component: RouterComponent
            },
            {
                path: 'dependencyInject',
                component: DependencyInjectionComponent
            },
            {
                path: 'templateDataBind',
                component: TemplateDataBindingComponent
            }
        ]
    }
]
