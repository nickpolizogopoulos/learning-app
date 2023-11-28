import { Component, Input } from '@angular/core';
import { ItemProps } from '../one-passing-data-between-components.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {



  // THIS USES 'Definite Assignment Assertion' => !
  // to tell typescript that this variable will have
  // a value at runtime as follows:
   @Input() element!:ItemProps;


  
}
