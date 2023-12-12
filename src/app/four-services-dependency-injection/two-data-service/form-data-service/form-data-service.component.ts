import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProps } from '../two-data-service.component';

@Component({
  selector: 'app-form-data-service',
  templateUrl: './form-data-service.component.html',
  styles: [``]
})
export class FormDataServiceComponent {

  @Input() userCount!:number;
  @Output() newUser = new EventEmitter<UserProps>();

  userAddedMessage:boolean = false;
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
    this.userAddedMessage = true;
    setTimeout(() => {
      this.userAddedMessage = false;
    }, 1500) 
    this.newUser.emit(
      {
        name: name.value,
        city: city.value,
        gender: gender.value,
        language: language.value
      }
    )
    name.value = '';
    city.value = '';
  }

  
}
