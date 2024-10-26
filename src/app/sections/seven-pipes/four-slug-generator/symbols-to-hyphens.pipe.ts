import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'symbolsToHyphens'
})
export class SymbolsToHyphensPipe implements PipeTransform {

  transform( value: string ): string {
    return value.replace(/[\W\s]+/g, '-');
  }

}
