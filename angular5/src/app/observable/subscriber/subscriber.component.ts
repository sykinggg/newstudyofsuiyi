import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

//  Observable.of方法加载
import 'rxjs/add/observable/of';
//  Observable.from方法加载
import 'rxjs/add/observable/from';
//  Observable.zip方法加载
import 'rxjs/add/observable/zip';
//  Observable.fromEvent方法加载
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-subscriber',
    templateUrl: './subscriber.component.html',
    styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
    /**
     * demo1
     * */
    sourceData1 = [];
    source1 = Observable.of(1, 2, 3, 4, 5);
    observer1 = {
        next: x => {
            console.log('Observer got a next value: ' + x);
            this.sourceData1.push(x);
        },
        error: err => {
            console.error('Observer got an error: ' + err);
            this.sourceData1.push(err);
        },
        complete: () => {
            console.log('Observer got a complete notification');
            this.sourceData1.push('complete');
        },
    };
    subscribe1 = () => {
        this.source1.subscribe(this.observer1);
    };
    //  demo1 结束
    
    /**
     * demo2
     * */
    sourceData2 = [];
    source2 = (observer) => {
        setTimeout(observer.next(1), 1000);
        
        setTimeout(observer.next(2), 2000);
        
        setTimeout(observer.next(3), 3000);
        observer.complete();
    
        return {unsubscribe() {}};
    };
    
    sequence = new Observable(this.source2);
    
    subscribe2 = () => {
        this.sequence.subscribe({
            next: (num) => {
                console.log(num);
                this.sourceData2.push(num);
            },
            complete: () => {
                console.log('Finished sequence');
                this.sourceData2.push('finished');
            }
        });
    };
    //  demo2 结束
    
    /**
     * demo 3 响应式编程
     * */
    subscribe3 = () => {
        let b = Observable.from([1, 3]);
        let c = Observable.from([2, 2]);
    
        let a = Observable.zip(b, c, (b, c) => {
            console.log('b: ' + b);
            console.log('c: ' + c);
            return b + c
        });
    
        a.subscribe(a => {
            console.log('a: ' + a);
        })
    };
    //  demo3 结束
    
    /**
     * demo 4 事件绑定
     * */
    demo4Data: any;
    demo4Event = document.getElementById('demo4');
    input$ = Observable.fromEvent(this.demo4Event, 'change');
    subscribe4 = () => {
        this.input$.subscribe(input => {
            this.demo4Data = input;
        })
    };
    constructor() {
    }
  
    ngOnInit() {
    }

}
