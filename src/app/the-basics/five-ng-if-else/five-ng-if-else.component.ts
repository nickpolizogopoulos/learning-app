import { Component } from '@angular/core';

@Component({
  selector: 'app-five-ng-if-else',
  templateUrl: './five-ng-if-else.component.html',
  styleUrls: ['./five-ng-if-else.component.css']
})
export class FiveNgIfElseComponent {
  
  statement = false;

  onClick() {
    this.statement = !this.statement;
  }

  reset() {
    this.statement = false;
  }

}
