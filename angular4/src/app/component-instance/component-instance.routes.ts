import { ComponentInstanceComponent } from './component-instance.component';
import { BaseComponentComponent } from './base-component/base-component.component';
export const componentInstanceRoutes = [
    {
        path: '',
        component: ComponentInstanceComponent,
        children: [
            {
                path: '',
                redirectTo: 'base',
                pathMatch: 'full'
            },
            {
                path: 'base',
                component: BaseComponentComponent
            },
        ]
    }
]