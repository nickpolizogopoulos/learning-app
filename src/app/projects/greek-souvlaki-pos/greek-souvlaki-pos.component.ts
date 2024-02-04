import { Component } from '@angular/core';

@Component({
  selector: 'app-greek-souvlaki-pos',
  templateUrl: './greek-souvlaki-pos.component.html',
  styleUrls: ['./greek-souvlaki-pos.component.css']
})
export class GreekSouvlakiPosComponent {

  explanation:boolean = false;
  orderMakerSection:boolean = false;

  mainIngredients = [
    'gyro pork',
    'gyro chicken',
    'souvlaki pork',
    'souvlaki chicken',
    'mixed pork chicken'
  ]


  onAgreeClick():void {
    this.explanation = !this.explanation;
    this.orderMakerSection = true;
  }

  onStepOneClick():void {
    this.explanation = !this.explanation;
    this.orderMakerSection = false;
  }
}
