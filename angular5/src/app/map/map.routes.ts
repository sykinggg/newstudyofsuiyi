import { MapComponent } from './map.component';
import { MapBaseComponent } from './map-base/map-base.component';
import { MapSearchComponent } from './map-search/map-search.component';

export const mapRoutes = [
    {
        path: '',
        component: MapComponent,
        children: [
            {
                path: '',
                redirectTo: 'base',
                pathMatch: 'full'
            },
            {
                path: 'base',
                component: MapBaseComponent
            },
            {
                path: 'search',
                component: MapSearchComponent
            }
        ]
    }
]