import { Component, OnInit } from '@angular/core';
import { ExternalLinkProps, SectionsAndProjectsProps, SectionsAndProjectsService } from '../shared/sections-and-projects.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  
    .navbar-custom-colour {
      background-color: rgb(231, 231, 231);
      padding: 15px 30px;
    }
    .section-link {
      font-size: 17px;
      padding: 10px 20px;
      
    }
    .section-link:hover {
      background-color: rgb(231, 231, 231);
    }
    .section-link:focus {
      color: rgb(36, 54, 99);
    }
    
  `]
})
export class NavbarComponent implements OnInit {
 
  constructor(private sections:SectionsAndProjectsService) {

  }

  ngOnInit():void {
    this.angularSections = this.sections.angularSections;
    this.angularProjects = this.sections.angularProjects;
    this.externalLinks = this.sections.externalNavLinks;
  }

  angularSections:SectionsAndProjectsProps[] = [];
  angularProjects:SectionsAndProjectsProps[] = [];
  externalLinks:ExternalLinkProps[] = [];
    
  // NAVBAR LINKS 
  navLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
  ]
  
  // NAVBAR DROPDOWN SECTIONS
  // AngularSections = [
  //   { name: 'The Basics', link: '/the-basics' },
  //   { name: 'Components & Databinding', link: '/components-databinding' },
  //   { name: 'Directives', link: '/directives' },
  //   { name: 'Services & Dependency Injection', link: '/services'}
  // ]
  // NAVBAR DROPDOWN PROJECTS
  // angularProjects = [
  //   { name: 'To Do Application', link: '/project-to-do-application' },
  //   { name: 'Super Signature Maker', link: '/project-super-signature-maker' },
  //   { name: 'My Shopping List', link: '/project-shopping-list' },
  //   { name: 'Calculator', link: '/project-calculator' },
  // ]
  
}
