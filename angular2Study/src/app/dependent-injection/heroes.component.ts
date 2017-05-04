import { Component } from '@angular/core';

import { HeroServer } from './hero.service';

@Component({
    selector: 'my-heroes',
    providers: [HeroServer],
    template: `
  <h2>Heroes</h2>
  <hero-list></hero-list>
  `
})
export class HeroesComponent { }