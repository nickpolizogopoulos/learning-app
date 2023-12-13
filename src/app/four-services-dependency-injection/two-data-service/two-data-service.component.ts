import { Component, OnInit } from '@angular/core';
import { UserListService, UserProps } from './user-list.service';

@Component({
  selector: 'app-two-data-service',
  template: `
    
<h4>2. Creating a Data Service</h4>
<p class="lead mb-3">Add new users in the list or remove any existing ones. The list is provided by a service.
  <span class="addToTestText" (click)="onAddFourUsers()">[ +4 dummy users ]</span>
</p>
<app-form-data-service></app-form-data-service>

<hr>

<app-list-data-service 
  *ngFor="let user of users let i = index"
  [newUser]="user" 
  (deleteUser)="onUserDelete(i, user.name)"
  >
</app-list-data-service>
<button (click)="onListClear()" *ngIf="users.length > 1" class="btn btn-sm btn-secondary rounded-1 mt-2 mb-3">Clear</button>
<div *ngIf="messageState" class="alert alert-warning ps-3 p-2" role="alert">
  {{removalMessage}}
</div>


  `,
  styles: [``],
  providers: [UserListService]
})
export class TwoDataServiceComponent implements OnInit {
  
  users:UserProps[] = [];
  removalMessage:string = '';
  messageState:boolean = false;

  constructor(private userListService:UserListService) {
  }

  ngOnInit():void {
    this.users = this.userListService.usersList;
  }

  onUserDelete( index:number, name:string ):void {
    this.userListService.removeUser(index)
    this.messageState = true;
    this.removalMessage = `${name} has been removed from the list.`
    setTimeout(() => {
      this.messageState = false;
    }, 2000);
  }

  onAddFourUsers():void {
    this.userListService.addUser('Stacy','Athens','Female','Greek',)
    this.userListService.addUser('Mary','Patras','Female','Greek',)
    this.userListService.addUser('Christine','Athens','Female','Greek',)
    this.userListService.addUser('Fay','Nafpaktos','Female','Greek',)

    }

  onListClear():void {
    this.userListService.usersList.length = 0;
  }

  

}

