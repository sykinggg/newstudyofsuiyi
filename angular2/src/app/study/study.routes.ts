import { RouterComponent } from './router/router.component';
import { StudyComponent } from "./study.component";
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { TemplateDataBindingComponent } from './template-data-binding/template-data-binding.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';

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
            },
            {
                path: 'LifecycleHooks',
                component: LifecycleHooksComponent
            },
            {
                path: 'ComponentInteraction',
                component: ComponentInteractionComponent
            },
            {
                path: 'ComponentStyles',
                component: ComponentStylesComponent
            },
            {
                path: 'DynamicComponentLoader',
                component: DynamicComponentLoaderComponent
            }
        ]
    }
]
