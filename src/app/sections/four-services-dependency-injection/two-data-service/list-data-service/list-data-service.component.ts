import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { type User } from '../user-list.service';

@Component({
  selector: 'app-list-data-service',
  template: `

    <table class="table">    
      <tr>
          <td>
              <svg (click)="onUserDelete()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x text-danger cursor-pointer" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
          </td>
          <td>{{ newUser.name }}</td>
          <td>{{ newUser.city }}</td>
          <td>{{ newUser.gender }}</td>
          <td>{{ newUser.language }}</td>
      </tr>
    </table>
    <hr>
  
  `,
  styles: [`
  
    td {
      max-width: 10px;
    }
  
  `]
})
export class ListDataServiceComponent {

  // constructor (
  //   private userListService:UserListService
  //   ) {}

  @Input() newUser!: User;
  @Input() usersArrayLength!: number;
  @Output() deleteUser = new EventEmitter<Function>()

  onUserDelete() {
    this.deleteUser.emit();
    // this.userListService.userDeleted.emit(this.newUser.name)
  }
}