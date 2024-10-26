import { Component } from '@angular/core';

export type ListItem = {
  name: string;
  description: string;
  type: 'immediate' | 'future'
}

@Component({
  selector: 'app-one-passing-data-between-components',
  templateUrl: './one-passing-data-between-components.component.html'
})
export class OnePassingDataBetweenComponentsComponent {

  wishList: ListItem[] = [
    { 
      name: 'Backpack',
      description: 'For carrying important files.',
      type: 'immediate'
    },
    {
      name: 'Sleeping bag',
      description: 'For the winter.',
      type: 'future'
    }
  ];
  
  onImmediateAdded( itemData: ListItem ): void {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description,
      type: itemData.type 
    });
  }
  
  onFutureAdded( itemData: ListItem ): void {
    this.wishList.push({
      name: itemData.name,
      description: itemData.description,
      type: itemData.type 
    });
  }
  
  onClearList(): void {
    this.wishList.length = 0;
  }

  onDeleteItem( i: number ): void {
    this.wishList.splice( i, 1 );
  }

}
