import { Injectable } from '@angular/core';

export interface SectionsAndProjectsProps {
  name:string;
  link:string;
  img:string;
  description:string;
}

export interface ExternalLinkProps {
  name:string;
  link:string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionsAndProjectsService {

  constructor() {
    
  }

  // footerDate:number = new Date().getFullYear();

  //ANGULAR LESSON SECTIONS
  angularSections:SectionsAndProjectsProps[] = [
    { 
      name: 'The Basics', 
      link: '/the-basics',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Databinding, Property Binding, 
        Event Binding, Passing & Using Data, Directives, ngIf, 
        ngFor, ngStyle and ngClass!`
    },
    {
      name: 'Components & Databinding',
      link: '/components-databinding',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Passing data between components, @Input, 
      @Output, local references, @ViewChild and <ng-content>!`
    },
    {
      name: 'Directives',
      link: '/directives',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Basic custom attribute directives, Renderer2, 
      HostListener, HostBinding, Structural Directives and ngSwitch!`
    },
    {
      name: 'Services & Dependency Injection',
      link: '/services',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Using custom services to share data 
      between components, cross-component communication!`
    },
    {
      name: 'Observables',
      link: '/observables',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `RxJS, Built-in and Custom Observables, 
      Errors & Completion, Operators, map( ), filter( ) and 
      Subjects!`
    },
    {
      name: 'Forms',
      link: '/forms',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Handling forms in Angular. Template Driven 
      Form Approach, Reactive Form Approach!`
    },
    {
      name: 'Data Transformation with Pipes',
      link: '/pipes',
      img: '../../assets/images/angular-banner-image.jpg',
      description: `Simple Transformations with Pipes, Custom Pipe,
      Parametrizations, Filtering data!`
    },

    
  ]

  //ANGULAR PROJECTS
  angularProjects:SectionsAndProjectsProps[] = [
    {
      name: 'To Do Application',
      link: '/project-to-do-application',
      img: '../../assets/images/project-banner-image.jpg',
      description: `Keep your important things organised 
      with this To Do application!`
    },
    {
      name: 'Super Signature Maker',
      link: '/project-super-signature-maker',
      img: '../../assets/images/project-banner-image.jpg',
      description: `Make an email signature super fast and easy!`
    },
    {
      name: 'My Shopping List',
      link: '/project-shopping-list',
      img: '../../assets/images/project-banner-image.jpg',
      description: `Who doesn't like shopping? Make a shopping 
      list of your favorite products!`
    },
    {
      name: 'Calculator',
      link: '/project-calculator',
      img: '../../assets/images/project-banner-image.jpg',
      description: `Here is a calculator that nobody will 
      use for more than a minute. But I've made it!`
    },

  ]

  //MENU BAR LINKS
  externalNavLinks:ExternalLinkProps[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nickpolizogopoulos'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/nickpolizogopoulos'
    },
  ]

}
