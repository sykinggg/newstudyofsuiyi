import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { mapRoutes } from './map/map.routes';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'map',
        children: mapRoutes
    }
]