import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [
    
    { name: 'The Basics', link: '/the-basics',
    img: '../../assets/images/angular-banner-image.jpg',
    description: `Databinding, Property Binding, 
    Event Binding, Passing & Using Data, Directives, ngIf, 
    ngFor, ngStyle & ngClass!` },

    { name: 'Components & Databinding', link: '/components-databinding',
    img: '../../assets/images/angular-banner-image.jpg',
    description: `Passing data between components, @Input, @Output, local references,
    @ViewChild, ng-content & Lifecycle Hooks!` },

    

  ]

}
