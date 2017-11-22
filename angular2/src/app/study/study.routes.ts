import { RouterComponent } from './router/router.component';
import { StudyComponent } from "./study.component";

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
            }
        ]
    }
]
