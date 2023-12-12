import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-data-service',
  templateUrl: './form-data-service.component.html',
  styleUrls: ['./form-data-service.component.css']
})
export class FormDataServiceComponent {

  @Input() userCount!:number;

}
