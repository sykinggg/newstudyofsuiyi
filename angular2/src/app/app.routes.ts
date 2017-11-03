import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { homeRoutes } from './home/home.routes';

export const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        // component: HomeComponent
        children: homeRoutes
    },
    {
        path: 'about',
        component: AboutComponent
    }
]