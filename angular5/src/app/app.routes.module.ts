import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { aboutRoutes } from './about/about.routes.module';
import { mapRoutes } from './map/map.routes';
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
        children: aboutRoutes
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

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}