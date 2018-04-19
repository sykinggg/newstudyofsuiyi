import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
    
    routerLinkArr: Array<any> = [
        { routerName: 'subscriber', routerLink: 'subscriber' },
        { routerName: 'RxJs', routerLink: 'RxJs' },
        { routerName: 'observableObj', routerLink: 'observableObj' },
        { routerName: 'actualCombat', routerLink: 'actualCombat' },
        { routerName: 'otherSkill', routerLink: 'otherSkill' },
    ];
    
    //  创建一个可观察的，就开始监听定位更新
    locations = new Observable((observer) => {
        
        const {next, error} = observer;
        
        let watchId;
    
        if ('geolocation' in navigator) {
            watchId = navigator.geolocation.watchPosition(next, error);
        } else {
            error('Geolocation not available');
        }
    
        return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
    });
    
    locationsSubscription = this.locations.subscribe({
        next(position) { console.log('Current Position: ', position); },
        error(msg) { console.log('Error Getting Location: ', msg); }
    });
    
    constructor() {
        setTimeout(() => {this.locationsSubscription.unsubscribe(); }, 10000);
    }
    
    ngOnInit() {
    }

}
