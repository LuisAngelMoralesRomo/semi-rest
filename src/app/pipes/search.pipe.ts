import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'search',
  pure: true
})

export class SearchPipe implements PipeTransform {
  public transform(list: any[], ...ors: [string, string][][]): any[] {
    if (!isArray(list)) {
      return list;
    }
    return list.filter(item => {
      return ors.some((ands: [string, string][]) => {
        return ands.every(([property, text]) => {
          return (item[property] as string).includes(text);
        });
      });
    });
  }
}
