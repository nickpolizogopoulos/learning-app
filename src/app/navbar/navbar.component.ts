import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    
  // NAVBAR LINKS 
  navLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
  ]
  
  // NAVBAR DROPDOWN SECTIONS
  AngularSections = [
    { name: 'The Basics', link: '/the-basics' },
    { name: 'Components & Databinding', link: '/components-databinding' },
    { name: 'Directives', link: '/directives' },
  ]
  // NAVBAR DROPDOWN PROJECTS
  AngularProjects = [
    { name: 'To Do Application', link: '/project-to-do-application' },
    { name: 'Super Signature Maker', link: '/project-super-signature-maker' },
    { name: 'My Shopping List', link: '/project-shopping-list' },
    { name: 'Calculator', link: '/project-calculator' },
  ]
  
}
