import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    console.log('value', value);
    if (value) {
      return `Sale`;
    }
    return '';
  }
}
