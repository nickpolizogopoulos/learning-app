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
    // {name: '404', link: '/non-existing-path'},
  ]
  
  // NAVBAR DROPDOWN SECTIONS
  AngularSections = [
    { name: 'The Basics', link: '/the-basics' },
    { name: 'Components & Databinding', link: '/components-databinding' },
    { name: 'Directives', link: '/directives' },
  ]
  // NAVBAR DROPDOWN PROJECTS
  AngularProjects = [
    { name: 'Super Signature Maker', link: '/' },
    { name: 'To Do Application', link: '/' },
    { name: 'My Shopping List', link: '/' },
  ]
  
}
