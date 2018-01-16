// ChangeDetectionStrategy, ViewChild, TemplateRef calendar组件模块
import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
} from '@angular/core';
// calendar日历组件方法
// import {
//     startOfDay,
//     endOfDay,
//     subDays,
//     addDays,
//     endOfMonth,
//     isSameDay,
//     isSameMonth,
//     addHours
// } from 'date-fns';
import { Subject } from 'rxjs/Subject';
// import {}from'@ng-bootstrap/ng-bootstrap';
import { MapComponent } from '../../map/map.component';

@Component({
    selector: 'app-base-component',
    templateUrl: './base-component.component.html',
    styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent implements OnInit {

    weekData: Array<number> = [1, 2, 3];

    getChildEvent: Function = function (event) {
        this.weekData = event;
        console.log(this.weekData);
    }

    num: number = 1;
    num1: number = 2;

    setChange: Function = function (event, type) {
        this[type] = event;
    }

    constructor() { }

    ngOnInit() { }

}
