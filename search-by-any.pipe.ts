import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByAny'
})
export class SearchByAnyPipe implements PipeTransform {

  transform(data: any[], value: string): unknown {
    if (value) {
      return data.filter(d => Object.keys(d).some(i => String(d[i]).toLowerCase().includes(value.toLowerCase())))
    } else {
      return data
    }
  }

}
