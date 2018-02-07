import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { mapRoutes } from './map/map.routes';
import { HttpComponent } from './http/http.component';
import { templateRoutes } from './template/template.routes';
import { formRoutes } from './form/form.routes';

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
    },
    {
        path: 'http',
        component: HttpComponent
    },
    {
        path: 'Alltemplate',
        children: templateRoutes
    },
    {
        path: 'form',
        children: formRoutes
    }
]