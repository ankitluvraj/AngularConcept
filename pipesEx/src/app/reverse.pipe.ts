import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    //now value contain "Hello"

    return Array.from(value).reverse().join('');
  }
}
