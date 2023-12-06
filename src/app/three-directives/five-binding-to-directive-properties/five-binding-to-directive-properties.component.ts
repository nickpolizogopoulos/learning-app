import { Component } from '@angular/core';

@Component({
  selector: 'app-five-binding-to-directive-properties',
  templateUrl: './five-binding-to-directive-properties.component.html',
  styleUrls: ['./five-binding-to-directive-properties.component.css']
})
export class FiveBindingToDirectivePropertiesComponent {

  //Fill colours.
  fillColour?:string;
  amaranth:string = '#e52b50';
  glaucous:string = '#6082b6';
  celadon:string = '#ace1af';

  //border colours.
  borderColour?:string;
  viridian:string = '#40826d';
  merlot:string = '#7f171f';
  daffodil:string = '#e28d00';

  

}
