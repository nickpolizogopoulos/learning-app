import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProps } from '../two-data-service.component';

@Component({
  selector: 'app-list-data-service',
  templateUrl: './list-data-service.component.html',
  styles: [`
  
  td {
    max-width: 10px;
  }
  
  `],
})
export class ListDataServiceComponent {

  @Input() newUser!:UserProps;
  @Output() deleteUser = new EventEmitter<Function>();
  

  onDeleteUser():void {
    this.deleteUser.emit(
      () => {}
    );
    console.log(`User "${this.newUser.name}" from ${this.newUser.city}, deleted`);
  }

}
