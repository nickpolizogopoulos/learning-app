import { Component, EventEmitter, Output } from '@angular/core';

export interface ItemProps {
  name: string;
  description: string;
}

@Component({
  selector: 'app-one-passing-data-between-components',
  templateUrl: './one-passing-data-between-components.component.html',
  styleUrls: ['./one-passing-data-between-components.component.css']
})
export class OnePassingDataBetweenComponentsComponent {

  wishList:ItemProps[] = [
    { name: 'Backpack', description: 'For carrying my laptop.' },
  ];
  
  onItemAdded(itemData:ItemProps):void {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description
    })
  }
  onClearList():void {
    this.wishList.length = 0;
  }
  onDeleteItem( i:number ):void {
    this.wishList.splice( i, 1 )
  }

}
