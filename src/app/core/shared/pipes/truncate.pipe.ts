import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, max: number, contador?: number): string {
    if (contador != null && contador != undefined) {
      contador += value.length;
      if (contador >= max) {

      }
      return value;
    }
    return value;
  }

}
