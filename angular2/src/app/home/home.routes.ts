import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapComponent } from '../map/map.component';
import { UiComponent } from '../ui/ui.component';
import { DirectiveExplainComponent } from '../directive-explain/directive-explain.component';

export const homeRoutes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'map',
                pathMatch: 'full'
            },
            {
                path: 'map',
                component: MapComponent
            },
            {
                path: 'ui',
                component: UiComponent
            },
            {
                path: 'directive',
                component: DirectiveExplainComponent
            }
        ]
    }
]