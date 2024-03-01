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

  sectionImage:string = '../../assets/images/home-images/angular-banner-image.jpg';
  projectImage:string = '../../assets/images/home-images/project-banner-image.jpg';

  constructor() {}

  //ANGULAR LESSON SECTIONS
  angularSections:SectionsAndProjectsProps[] = [
    { 
      name: 'The Basics', 
      link: '/the-basics',
      img: this.sectionImage,
      description: `Databinding, Property Binding, 
        Event Binding, Passing & Using Data, Directives, ngIf, 
        ngFor, ngStyle and ngClass!`
    },
    {
      name: 'Components & Databinding',
      link: '/components-databinding',
      img: this.sectionImage,
      description: `Passing data between components, @Input, 
      @Output, local references, @ViewChild and <ng-content>!`
    },
    {
      name: 'Directives',
      link: '/directives',
      img: this.sectionImage,
      description: `Basic custom attribute directives, Renderer2, 
      HostListener, HostBinding, Structural Directives and ngSwitch!`
    },
    {
      name: 'Services & Dependency Injection',
      link: '/services',
      img: this.sectionImage,
      description: `Using custom services to share data 
      between components, cross-component communication!`
    },
    {
      name: 'Observables',
      link: '/observables',
      img: this.sectionImage,
      description: `RxJS, Built-in and Custom Observables, 
      Errors & Completion, Operators, map( ), filter( ) and 
      Subjects!`
    },
    {
      name: 'Forms',
      link: '/forms',
      img: this.sectionImage,
      description: `Handling forms in Angular. Template Driven 
      Form Approach and Reactive Form Approach!`
    },
    {
      name: 'Data Transformation with Pipes',
      link: '/pipes',
      img: this.sectionImage,
      description: `Simple Transformations with Pipes, Custom Pipe,
      Parametrizations and Filtering data!`
    },
    {
      name: 'Http Requests',
      link: '/http-requests',
      img: this.sectionImage,
      description: `Requesting with .post(), .get(), .delete(), 
      error handling & Subjects, catchError, UX, Headers, Params, 
      Interceptors and request Manipulation!`
    },
    {
      name: 'Authentication & Route Protection',
      link: '/authentication-route-protection',
      img: this.sectionImage,
      description: `User authentication, Login, Signup, Error handling, 
      UI reflections, Token handling, Interceptor, route protection using 
      Auth Guard!`
    },

    
  ]

  //ANGULAR PROJECTS
  angularProjects:SectionsAndProjectsProps[] = [
    {
      name: 'To Do Application',
      link: '/project-to-do-application',
      img: this.projectImage,
      description: `Keep your important things organised 
      with this To Do application!`
    },
    {
      name: 'Super Signature Maker',
      link: '/project-super-signature-maker',
      img: this.projectImage,
      description: `Make an email signature super fast and easy!`
    },
    {
      name: 'My Shopping List',
      link: '/project-shopping-list',
      img: this.projectImage,
      description: `Who doesn't like shopping? Make a shopping 
      list of your favorite products!`
    },
    {
      name: 'Calculator',
      link: '/project-calculator',
      img: this.projectImage,
      description: `Here is a calculator that nobody will 
      use for any reason. But I've made it!`
    },
    {
      name: 'Greek Gyro Pita - Order Maker',
      link: '/project-pita-gyro',
      img: this.projectImage,
      description: `Your family wants to order Greek Pita Gyro 
      today. This app will make it easy for you. Let's go!`
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
