import { Component } from '@angular/core';

import { hero } from 'hero';

@Component({
    selector: 'hero-from',
    templateUrl: 'hero-from.component.html'
})

export class HeroForm {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}