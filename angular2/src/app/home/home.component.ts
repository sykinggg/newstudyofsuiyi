import {Component, OnInit, Output} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { LocalStorage } from '../common/local.storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private acxtiveRouterName: string = '';
    constructor(private router:Router,
                private ls:LocalStorage) {
        // this.acxtiveRouterName = this.ls.get('routerName');
    }


    ngOnInit() {
        // this.router.events.subscribe((event) => {
        //     if(event instanceof NavigationEnd) {
        //       // this.ls.set('routerName', event.urlAfterRedirects);
        //       // this.acxtiveRouterName = this.ls.get('routerName');
        //       console.log(this.ls.get('routerName'));
        //     }
        // })
    }

}
