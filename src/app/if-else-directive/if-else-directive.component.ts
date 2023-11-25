import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-directive',
  templateUrl: './if-else-directive.component.html',
  styleUrls: ['./if-else-directive.component.css']
})
export class IfElseDirectiveComponent {
  
  statement = false;

  onClick() {
    this.statement = !this.statement;
  }

  reset() {
    this.statement = false;
  }

}

