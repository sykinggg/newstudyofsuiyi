import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUIModule } from '../app.ui.module';

import { MapRoutesModule } from './map.routes.module';

import { MapComponent } from './map.component';
import { MapBaseComponent } from './map-base/map-base.component';
import { MapSearchComponent } from './map-search/map-search.component';

@NgModule({
    imports: [
        CommonModule,
        MapRoutesModule,
        AppUIModule
    ],
    declarations: [
        MapComponent,
        MapBaseComponent,
        MapSearchComponent
    ]
})

export class MapModule {}