import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform( value: any, filterString: string, propName: string ): any {
  
    if ( value.length === 0 || filterString === '' )
      return value;

    const resultArray = [];
    
    for ( let item of value )
      if ( item[propName] === filterString )
        resultArray.push(item);

    return resultArray;
  }

}
