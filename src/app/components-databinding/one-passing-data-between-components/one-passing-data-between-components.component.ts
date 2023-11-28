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

  wishList:ItemProps[] = [];

  onItemAdded( itemData:ItemProps ) {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description
    })
  }

}
