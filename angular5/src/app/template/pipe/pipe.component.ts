import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

    birthday = new Date(1992, 2, 28);

    toggle = true;
    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }
    toggleFormat() {
        this.toggle = !this.toggle;
    }

    power: number = 5;
    factor: number = 1;
    constructor() { }

    ngOnInit() {
    }

}
