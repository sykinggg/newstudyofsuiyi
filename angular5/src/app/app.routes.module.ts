import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpComponent } from './http/http.component';
import { templateRoutes } from './template/template.routes';
import { formRoutes } from './form/form.routes';
import { mapRoutes } from './map/map.routes';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'map',
        children: mapRoutes,
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

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
