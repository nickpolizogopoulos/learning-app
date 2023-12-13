import { Component, OnInit } from '@angular/core';
import { UserListService, UserProps } from './user-list.service';

@Component({
  selector: 'app-two-data-service',
  templateUrl: './two-data-service.component.html',
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

