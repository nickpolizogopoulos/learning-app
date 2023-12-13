import { Component, OnInit } from '@angular/core';
import { UserListService, UserProps } from './user-list.service';

@Component({
  selector: 'app-two-data-service',
  template: `
    
<h4>2. Creating a Data Service</h4>
<p class="lead mb-3">Add new users in the list or remove any existing ones. The list is provided by a service.</p>
<app-form-data-service></app-form-data-service>
<hr>
<app-list-data-service
    *ngFor="let user of users let i = index" [newUser]="user"
></app-list-data-service>

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
  

}

