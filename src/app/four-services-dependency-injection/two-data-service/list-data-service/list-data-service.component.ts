import { Component, Input } from '@angular/core';
import { UserListService, UserProps } from '../user-list.service';

@Component({
  selector: 'app-list-data-service',
  templateUrl: './list-data-service.component.html',
  styles: [`
  
  td {
    max-width: 10px;
  }
  
  `],

  providers: []
})
export class ListDataServiceComponent {

  @Input() newUser!:UserProps;
  @Input() usersArrayLength!:number;



}
