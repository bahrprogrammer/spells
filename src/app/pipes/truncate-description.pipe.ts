import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription'
})
export class TruncateDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    const index = value.indexOf('</p>');
    return `${value.substr(0, index + 4)}`;
  }

}
