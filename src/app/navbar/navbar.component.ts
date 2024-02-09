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
 
  constructor(
    private sections:SectionsAndProjectsService
  ) { }

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

    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },

  ];
  
}
