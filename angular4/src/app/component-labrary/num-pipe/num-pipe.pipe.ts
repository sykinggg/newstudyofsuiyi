import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numPipe'
})
export class NumPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
