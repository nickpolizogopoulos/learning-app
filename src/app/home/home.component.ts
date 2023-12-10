import { Component } from '@angular/core';

interface HomeCardProps {
  name:string;
  link:string;
  img:string;
  description:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeCards:HomeCardProps[] = [

    { name: 'The Basics', link: '/the-basics',
    img: '../../assets/images/angular-banner-image.jpg',
    description: `Databinding, Property Binding, 
    Event Binding, Passing & Using Data, Directives, ngIf, 
    ngFor, ngStyle and ngClass!` },

    { name: 'Components & Databinding', link: '/components-databinding',
    img: '../../assets/images/angular-banner-image.jpg',
    description: `Passing data between components, @Input, @Output, local references,
    @ViewChild and <ng-content>!` },

    { name: 'Directives Deep Dive', link: '/directives',
    img: '../../assets/images/angular-banner-image.jpg',
    description: `Basic custom attribute directives, Renderer2, HostListener, HostBinding, 
    Structural Directives and ngSwitch!` },
    
  ]

  projectCards:HomeCardProps[] = [

    { name: 'To Do Application', link: '/project-to-do-application',
    img: '../../assets/images/project-banner-image.jpg',
    description: `Keep your important things organised with this To Do application!` },

    { name: 'Super Signature Maker', link: '/project-super-signature-maker',
    img: '../../assets/images/project-banner-image.jpg',
    description: `Make an email signature super fast and easy!` },

    { name: 'My Shopping List', link: '/project-shopping-list',
    img: '../../assets/images/project-banner-image.jpg',
    description: `Who doesn't like shopping? Make a shopping list of your favorite products!` },

    { name: 'Calculator', link: '/project-calculator',
    img: '../../assets/images/project-banner-image.jpg',
    description: `Here is a calculator that nobody will use for more than a minute. But I've made it!` },


  ]


}
