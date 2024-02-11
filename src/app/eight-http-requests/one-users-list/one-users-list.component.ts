import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-users-list',
  templateUrl: './one-users-list.component.html',
  styleUrls: ['./one-users-list.component.css']
})
export class OneUsersListComponent {

  url:string = 'http://jsonplaceholder.typicode.com/users'


}
