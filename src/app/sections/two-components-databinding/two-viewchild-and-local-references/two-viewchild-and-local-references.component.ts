import { Component } from '@angular/core';

export type ListItem = {
  name:string;
  description:string;
}

@Component({
  selector: 'app-two-viewchild-and-local-references',
  templateUrl: './two-viewchild-and-local-references.component.html'
})
export class TwoViewchildAndLocalReferencesComponent {

  addTwoImportantItemsButton = true;
  addTwoUnimportantItemsButton = true;

  importantList: ListItem[] = [
    {
      name: 'Laptop',
      description: 'For working remotely'
    },
    {
      name: 'Blanket',
      description: 'For the winter'
    }
  ];

  unimportantList: ListItem[] = [
    { 
      name: 'Boots',
      description: 'For hiking'
    },
    {
      name: 'Gloves',
      description: 'For climbing'
    }
  ];

  onImportantAdded( importantItem: ListItem ): void {
    this.importantList.push({
      name: importantItem.name,
      description: importantItem.description
    });
  }

  onImportantDeleted( index: number ): void {
    this.importantList.splice(index, 1);
  }

  onUnimportantAdded( unimportantItem: ListItem ): void {
    this.unimportantList.push({
      name: unimportantItem.name,
      description: unimportantItem.description
    });
  }
  
  onUnimportantDeleted( index: number ): void {
    this.unimportantList.splice(index, 1);
  }

  onClearLists(): void {
    this.importantList.length = 0;
    this.unimportantList.length = 0;
  }

  clearImportant(): void {
    this.importantList.length = 0;
  }

  clearUnimportant(): void {
    this.unimportantList.length = 0;
  }

  onImportantMoved( index: number, item: ListItem ): void {
    this.importantList.splice(index, 1);
    this.unimportantList.push(item);
  }

  onUnimportantMoved( index: number, item: ListItem ): void {
    this.unimportantList.splice(index, 1);
    this.importantList.push(item);
  }

  onAddTwoUnimportant(): void {
    this.addTwoUnimportantItemsButton = false;
    this.unimportantList.push(
      {
        name: 'Mousepad',
        description: 'Gaming accessory'
      },
      {
        name: 'USB Hub',
        description: 'Ports!'
      }
    );
  }

  onAddTwoImportant(): void {
    this.addTwoImportantItemsButton = false;
    this.importantList.push(
      {
        name: 'Sunglasses',
        description: 'Eye protection'
      },
      {
        name: 'Vinyl Records',
        description: 'I love vinyl'
      }
    );
  }

}
