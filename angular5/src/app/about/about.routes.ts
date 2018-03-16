import { AboutComponent } from './about.component';
import { AboutIndexComponent } from './about-index/about-index.component';
import { AboutCreateComponent } from './about-create/about-create.component';

export const aboutRoutes = [
    {
        path: '',
        component: AboutComponent,
        children: [
            {
                path: '',
                redirectTo: 'aboutIndex',
                pathMatch: 'full'
            },
            {
                path: 'aboutIndex',
                component: AboutIndexComponent
            },
            {
                path: 'aboutCreate',
                component: AboutCreateComponent
            }
        ]
    }
]