import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpComponent } from './http/http.component';
import { templateRoutes } from './template/template.routes';
import { formRoutes } from './form/form.routes';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'map',
        loadChildren: './map/map.module#MapModule'
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