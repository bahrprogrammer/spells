import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstParagraphTruncated'
})
export class FirstParagraphTruncatedPipe implements PipeTransform {
  maxLength = 140;

  transform(value: string): string {
    if (!value.includes('<p')) {
      return this.shortenString(value);
    }
    let index = value.indexOf('</p>', 0);

    if (index < 0) {
      return this.shortenString(value);
    } else {
      index += 4;
    }

    return this.shortenString(value.substr(0, index), true);
  }

  shortenString(value: string, html = false): string {
    let result = value;

    if (html) {
      result = result.replace('<p>', '');
      result = result.replace('</p>', '');
      if (result.length > this.maxLength) {
        result = `${result.substr(0, this.maxLength)}...`;
      }
      return `<p>${result}</p>`;
    } else {
      if (result.length <= this.maxLength) {
        return result;
      } else {
        return `${result.substr(0, this.maxLength)}...`;
      }
    }
  }

}
