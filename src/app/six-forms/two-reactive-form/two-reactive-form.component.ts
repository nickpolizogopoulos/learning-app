import { Component } from '@angular/core';

@Component({
  selector: 'app-two-reactive-form',
  templateUrl: './two-reactive-form.component.html',
  styleUrls: ['./two-reactive-form.component.css']
})
export class TwoReactiveFormComponent {

  orderDetails:boolean = false;




  fillTheForm():void {
    
  }

  onCloseDetails():void {
    this.orderDetails = false;
  }
}
