import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  pure: true
})
export class DatePipe implements PipeTransform {

  transform(value: number): string {

    const date = new Date(value * 1000);

    return date.toDateString();
  }

}
