import { Injectable } from '@angular/core';

export type SectionsAndProjects = {
  name: string;
  link: string;
  img: string;
  description:string;
};

export type ExternalLink = {
  name: string;
  link: string;
};

@Injectable({
  providedIn: 'root'
})
export class SectionsAndProjectsService {

  getImagePath( section: string ): string {
    return `../../assets/images/home-images/${section}-banner-image.jpg`;
  }

  sectionImage: string = this.getImagePath('angular');
  projectImage: string = this.getImagePath('project');

  get sections(): SectionsAndProjects[] {
    return [ ...this.angularSections ];
  }

  get projects(): SectionsAndProjects[] {
    return [ ...this.angularProjects ];
  }

  get links(): ExternalLink[] {
    return [ ...this.externalNavLinks ];
  }

  //**ANGULAR LESSON SECTIONS
  private angularSections: SectionsAndProjects[] = [
    { 
      name: 'The Basics', 
      link: 'the-basics',
      img: this.sectionImage,
      description: `Databinding, Property Binding, 
        Event Binding, Passing & Using Data, Directives, ngIf, 
        ngFor, ngStyle and ngClass!`
    },
    {
      name: 'Components & Databinding',
      link: 'components-databinding',
      img: this.sectionImage,
      description: `Passing data between components, @Input, 
      @Output, local references, @ViewChild and <ng-content>!`
    },
    {
      name: 'Directives',
      link: 'directives',
      img: this.sectionImage,
      description: `Basic custom attribute directives, Renderer2, 
      HostListener, HostBinding, Structural Directives and ngSwitch!`
    },
    {
      name: 'Services & Dependency Injection',
      link: 'services',
      img: this.sectionImage,
      description: `Using custom services to share data 
      between components, cross-component communication!`
    },
    {
      name: 'RxJS & Observables',
      link: 'rxjs-observables',
      img: this.sectionImage,
      description: `RxJS, Built-in and Custom Observables, 
      Errors & Completion, Operators, map( ), filter( ) and 
      Subjects!`
    },
    {
      name: 'Forms',
      link: 'forms',
      img: this.sectionImage,
      description: `Handling forms in Angular. Template Driven 
      Form Approach and Reactive Form Approach!`
    },
    {
      name: 'Data Transformation with Pipes',
      link: 'pipes',
      img: this.sectionImage,
      description: `Simple Transformations with Pipes, Custom Pipe,
      Parametrizations and Filtering data!`
    },
    {
      name: 'Http Requests',
      link: 'http-requests',
      img: this.sectionImage,
      description: `Requesting with .post(), .get(), .delete(), 
      error handling & Subjects, catchError, UX, Headers, Params, 
      Interceptors and request Manipulation!`
    },
    {
      name: 'Authentication & Route Protection',
      link: 'authentication-route-protection',
      img: this.sectionImage,
      description: `User authentication, Login, Signup, Error handling, 
      UI reflections, Token handling, Interceptor, route protection using 
      Auth Guard!`
    },
    {
      name: 'Dynamic Components',
      link: 'dynamic-components',
      img: this.sectionImage,
      description: `Creating and using custom dynamic components with
      both *ngIf and programmatic implementation methods!`
    },
    {
      name: 'Standalone Components',
      link: 'standalone-components',
      img: this.sectionImage,
      description: `Deep Dive on how to turn Components to Standalone Components
      and how to integrate Standalone Components into Applications!`
    },
    {
      name: 'Signals',
      link: 'signals',
      img: this.sectionImage,
      description: `Updating Signal Values, Reading & Outputting Signal Values,
      set(), update()!`
    },
    {
      name: 'NgRx',
      link: 'ngrx',
      img: this.sectionImage,
      description: `Creating a Store, Reading & Updating data utilising Reducers, 
      Actions, Selectors and Effects!`
    },
    {
      name: 'Animations',
      link: 'animations',
      img: this.sectionImage,
      description: `Basic Animation triggering, state switching, "Void" and "Wildcard" states!`
    }
  ];

  //**ANGULAR PROJECTS
  private angularProjects: SectionsAndProjects[] = [
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
      name: 'FizzBuzz',
      link: '/project-fizzbuzz',
      img: this.projectImage,
      description: `FizzBuzz quickly became my favorite exercise 
      when I began learning to code. Here it is in Angular!`
    },
    {
      name: 'Greek Gyro Pita - Order Maker',
      link: '/project-pita-gyro',
      img: this.projectImage,
      description: `Your family wants to order Greek Pita Gyro 
      today. This app will make it easy for you. Let's go!`
    }
  ];

  //**MENU BAR LINKS
  private externalNavLinks: ExternalLink[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nickpolizogopoulos'
    },
    {
      name: 'Source Code',
      link: 'https://github.com/nickpolizogopoulos/learning-app'
    }
  ];

}
