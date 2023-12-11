import { Component } from '@angular/core';

export interface ShoppingItemProps {
  name:string;
  quantity:number;
  comment:string;
  type: 'food' | 'home'
}

@Component({
  selector: 'app-my-shopping-list',
  templateUrl: './my-shopping-list.component.html',
  styleUrls: ['./my-shopping-list.component.css']
})
export class MyShoppingListComponent {

  foodList:ShoppingItemProps[] = [
    {
      name: 'Tomatoes',
      quantity: 5,
      comment: 'For salad',
      type: 'food'
    },
    {
      name: 'Potatoes',
      quantity: 3,
      comment: 'For soup',
      type: 'food'
    }
  ]
  homeList:ShoppingItemProps[] = [
    {
      name: 'Cleaning Gloves',
      quantity: 15,
      comment: 'For kitchen cleaning',
      type: 'home'
    },
    {
      name: 'Paper towels',
      quantity: 2,
      comment: 'For cleaning',
      type: 'home'
    },
  ]

  onFoodItemAdded(itemData:ShoppingItemProps):void {
    this.foodList.push({
      name: itemData.name,
      quantity: itemData.quantity,
      comment: itemData.comment,
      type: 'food'
    })
  }
  onHomeItemAdded(itemData:ShoppingItemProps):void {
    this.homeList.push({
      name: itemData.name,
      quantity: itemData.quantity,
      comment: itemData.comment,
      type: 'home'
    })
  }
  onListsClear() {
    this.foodList.length = 0;
    this.homeList.length = 0;
  }
  onDeleteFoodItem(index:number):void {
    this.foodList.splice(index, 1)
  }
  onDeleteHomeItem(index:number):void {
    this.homeList.splice(index, 1)
  }
  onMoveFoodItem(index:number, item:ShoppingItemProps) {
    this.foodList.splice(index, 1)
    this.homeList.push(item)
  }
  onMoveHomeItem(index:number, item:ShoppingItemProps) {
    this.homeList.splice(index, 1)
    this.foodList.push(item)
  }
  foodLengthMessage():string {
    return (this.foodList.length === 0) ? `the list is empty` 
    : (this.foodList.length === 1)
    ? `${this.foodList.length} item in the list`
    : `${this.foodList.length} items in the list`;
  }
  homeLengthMessage():string {
    return (this.homeList.length === 0) ? `the list is empty` 
    : (this.homeList.length === 1)
    ? `${this.homeList.length} item in the list`
    : `${this.homeList.length} items in the list`;
  }
  foodTotalQuantity():number {
    let foodQuantity = 0;
    for (let item of this.foodList)
      foodQuantity += item.quantity
    return foodQuantity;
  }
  homeTotalQuantity():number {
    let homeQuantity = 0;
    for (let item of this.homeList)
      homeQuantity += item.quantity
    return homeQuantity;
  }
  onClearFoodList():void {
    this.foodList.length = 0;
  }
  onClearHomeList():void {
    this.homeList.length = 0;
  }
  addTwoFood() {
    this.foodList.push(
      {
        name: 'Carrots',
        quantity: 5,
        comment: 'for soup and salads.',
        type: 'food'
      },
      {
        name: 'Spaghetti',
        quantity: 3,
        comment: 'for the weekend.',
        type: 'food'
      }
    )
  }
  addTwoHome() {
    this.homeList.push(
      {
        name: 'Carpet',
        quantity: 1,
        comment: 'for my bedroom.',
        type: 'home'
      },
      {
        name: 'Microwave',
        quantity: 1,
        comment: 'kitchen tools.',
        type: 'home'
      }
    )
  }
}
