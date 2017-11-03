import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]'
})
export class MyFirstDirectiveDirective {
  private _defaultColor = 'yellow';

  
  constructor() { }

}
