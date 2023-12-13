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
  (deleteUser)="onUserDelete(i)"
  >
</app-list-data-service>
<button (click)="onListClear()" *ngIf="users.length > 1" class="btn btn-sm btn-secondary rounded-1 mt-2">Clear</button>

  `,
  styles: [``],
  providers: [UserListService]
})
export class TwoDataServiceComponent implements OnInit {
  
  users:UserProps[] = [];

  constructor(private userListService:UserListService) {
  }

  ngOnInit(): void {
    this.users = this.userListService.usersList;
  }

  onUserDelete( index:number ):void {
    this.userListService.removeUser(index)
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

