import { Component }   from '@angular/core';
// import { HEROESa }      from './mock-heroes';
import { Hero1 } from './hero';
import { HeroServer } from './hero.service';
@Component({
    selector: 'hero-list',
    template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})
//HeroListComponent从HEROES获得英雄数据，是在另一个文件中定义的内存数据集
export class HeroListComponent {
    // heroes = HEROESa;
    heroes: Hero1[];

    /*
    * 注意，构造函数参数的类型是HeroServer，并且HeroListComponent类有一个@Component装饰器
    * 父级组件 (HeroesComponent) 有HeroService的providers信息
    * 构造函数参数类型、@Component装饰器和父级的providers信息合起来告诉 Angular 的注入器，
    * 任何新建HeroListComponent的时候，注入一个HeroServer的实例
    * */
    constructor(HeroServer: HeroServer) {
        this.heroes = HeroServer.getHeros();
    }
}
