import { Component } from '@angular/core';

export interface UserProps {
  name:string;
  city:string;
  gender:string;
  language:string;
}

@Component({
  selector: 'app-two-data-service',
  templateUrl: './two-data-service.component.html',
  styleUrls: ['./two-data-service.component.css']
})
export class TwoDataServiceComponent {

  
  usersList:UserProps[] = [
    {name: 'Nick', city: 'Patras', gender: 'Male', language: 'Greek'},
    {name: 'Jelly', city: 'Athens', gender: 'Female', language: 'English'},
  ]
  
  usersNumber():number {
    return this.usersList.length;
  }


  deleteUser(index:number):void {
    this.usersList.splice(index, 1)
  }
}

