import { Component, EventEmitter, Output } from '@angular/core';

export interface ItemProps {
  name: string;
  description: string;
  type: 'immediate' | 'future'
}

@Component({
  selector: 'app-one-passing-data-between-components',
  templateUrl: './one-passing-data-between-components.component.html',
  styles: [``]
})
export class OnePassingDataBetweenComponentsComponent {

  wishList:ItemProps[] = [
    { name: 'Backpack', description: 'For carrying important files.', type: 'immediate' },
    { name: 'Sleeping bag', description: 'For the winter.', type: 'future' },
  ];
  
  onImmediateAdded(itemData:ItemProps):void {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description,
      type: itemData.type 
    })
  }
  
  onFutureAdded(itemData:ItemProps):void {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description,
      type: itemData.type 
    })
  }
  
  onClearList():void {
    this.wishList.length = 0;
  }
  onDeleteItem( i:number ):void {
    this.wishList.splice( i, 1 )
  }

}
