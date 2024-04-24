import { Component } from '@angular/core';

export interface ItemProps {
  name:string;
  description:string;
}

@Component({
  selector: 'app-two-viewchild-and-local-references',
  templateUrl: './two-viewchild-and-local-references.component.html',
  styles: [``]
})
export class TwoViewchildAndLocalReferencesComponent {

  addTwoImportantItemsButton = true;
  addTwoUnimportantItemsButton = true;

  importantList:ItemProps[] = [
    {name: 'Laptop', description: 'For working remotely'},
    {name: 'Blanket', description: 'For the winter'},
  ];
  unimportantList:ItemProps[] = [
    {name: 'Boots', description: 'For hiking'},
    {name: 'Gloves', description: 'For climbing'},
  ];

  onImportantAdded(importantItem:ItemProps) {
    this.importantList.push({
      name: importantItem.name,
      description: importantItem.description,
    })
  }
  onImportantDeleted( index:number ) {
    this.importantList.splice(index, 1);
    console.log('item', index, 'deleted');
  }

  onUnimportantAdded(unimportantItem:ItemProps) {
    this.unimportantList.push({
      name: unimportantItem.name,
      description: unimportantItem.description,
    })
  }
  onUnimportantDeleted( index:number ) {
    this.unimportantList.splice(index, 1);
    console.log('item', index, 'deleted');
  }

  onClearLists() {
    this.importantList.length = 0;
    this.unimportantList.length = 0;
  }
  clearImportant() {
    this.importantList.length = 0;
  }
  clearUnimportant() {
    this.unimportantList.length = 0;
  }
  onImportantMoved( index:number, item:ItemProps ) {
    this.importantList.splice(index, 1)
    this.unimportantList.push(item)
  }
  onUnimportantMoved( index:number, item:ItemProps ) {
    this.unimportantList.splice(index, 1)
    this.importantList.push(item)
  }
  onAddTwoUnimportant() {
    this.addTwoUnimportantItemsButton = false;
    this.unimportantList.push(
      {name: 'Mousepad', description: 'Gaming accessory'},
      {name: 'USB Hub', description: 'Ports!'},
    )
  }
  onAddTwoImportant() {
    this.addTwoImportantItemsButton = false;
    this.importantList.push(
      {name: 'Sunglasses', description: 'Eye protection'},
      {name: 'Vinyl Records', description: 'I love vinyl'},
    )
  }

}
