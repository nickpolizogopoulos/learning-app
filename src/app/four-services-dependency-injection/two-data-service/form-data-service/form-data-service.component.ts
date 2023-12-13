import { Component } from '@angular/core';

import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-form-data-service',
  templateUrl: './form-data-service.component.html',
  styles: [``],
  providers: []
})
export class FormDataServiceComponent {

  constructor(private userListService:UserListService) {
    userListService.userDeleted.subscribe(
      (name:string) => alert(`${name} has been removed from the list!`)
    )
  }

  userCount:number = this.userListService.usersNumber()
  listNumber():number {
    return this.userListService.usersNumber()
  }


  errorMessage:boolean = false;

  onAddNewUser(
    name:HTMLInputElement, 
    city:HTMLInputElement, 
    gender:HTMLSelectElement, 
    language:HTMLSelectElement
  ) {
    if (
      name.value === '' ||
      city.value === ''
      ) {
        this.errorMessage = true;
        setTimeout(() => {
          this.errorMessage = false;
        }, 1500) 
        return
      }
    this.errorMessage = false;

    this.userListService.addUser(name.value, city.value, gender.value, language.value); 

    name.value = '';
    city.value = '';
  }

  
}
