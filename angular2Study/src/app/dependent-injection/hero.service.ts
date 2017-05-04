import { Injectable } from '@angular/core';

import { HEROESa } from './mock-heroes';

@Injectable()
//@Injectable() 标识一个类可以被注入器实例化
//通常，在试图实例化没有被标识为@Injectable()的类时，注入器会报错
export class HeroServer {
    getHeros() {
        return HEROESa;
    }
}