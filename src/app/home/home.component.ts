import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [
    {id: '1', name: 'The Basics', link: '',
    description: `Coponents, Databinding, Property Binding, 
    Event Binding, Passing & Using Data, Directives, ngIf, 
    ngFor, ngStyle, ngClass.` },

    {id: '2', name: 'Components & Databinding', link: '',
    description: `Coponents, Databinding, Property Binding, 
    Event Binding, Passing & Using Data, Directives, ngIf, 
    ngFor, ngStyle, ngClass.` },

    

  ]

}
