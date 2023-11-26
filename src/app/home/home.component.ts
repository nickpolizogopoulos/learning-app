import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [
    {id: '1', name: 'The Basics', link: '/the-basics',
    description: `Databinding, Property Binding, 
    Event Binding, Passing & Using Data, Directives, ngIf, 
    ngFor, ngStyle, ngClass.` },

    {id: '2', name: 'Components & Databinding', link: '/components-databinding',
    description: `Here goes the second section description` },



  ]

}
