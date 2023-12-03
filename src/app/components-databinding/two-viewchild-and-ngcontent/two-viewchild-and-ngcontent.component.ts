import { Component } from '@angular/core';

export interface ItemProps {
  name:string;
  description:string;
  type: 'important' | 'unimportant'
}

// export interface FormItemProps {
//   name:string;
//   description:string;
// }

@Component({
  selector: 'app-two-viewchild-and-ngcontent',
  templateUrl: './two-viewchild-and-ngcontent.component.html',
  styleUrls: ['./two-viewchild-and-ngcontent.component.css']
})
export class TwoViewchildAndNgcontentComponent {

  importantList:ItemProps[] = [
    {name: 'Important Item', description: 'Description if the item', type: 'important'}
  ];
  unimportantList:ItemProps[] = [
    {name: 'Unimportant Item', description: 'Description if the item', type: 'unimportant'}
  ];

  importantAdded() {
    this.importantList.push({
      name: '',
      description: '',
      type: 'important'
    })
  }

  unimportantAdded() {
    this.unimportantList.push({
      name: '',
      description: '',
      type: 'unimportant'
    })
  }

}
