import {
  Component,
  OnInit
} from '@angular/core';

import {
  type ExternalLink,
  type SectionsAndProjects,
  SectionsAndProjectsService
} from '../sections-and-projects.service';


@Component({
  selector: 'header[appHeader]',
  template: `
  
    <nav class="navbar navbar-expand-xl">
      <div class="container-fluid">
          <a class="navbar-brand ms-5 me-5" routerLink="/">
              <img width="150px" src="../../assets/images/learning-angular-logo.png" alt="logo">
          </a>
          <!-- MOBILE BUTTON -->
          <button class="navbar-toggler niceblue" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <!-- MOBILE DROPDOWN MENU -->
          <div class="ms-4 collapse navbar-collapse lead" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <!-- DROPDOWN LINK SECTIONS -->
                  <li class="nav-item dropdown lead me-4">
                      <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Angular Sections
                      </a>
                      <ul class="dropdown-menu">
                          <li *ngFor="let section of angularSections let i = index">
                              <a class="dropdown-item section-link"
                              routerLink="{{ section.link }}">{{ i + 1 }}. {{ section.name }}
                            </a>
                          </li>
                      </ul>
                  </li>
                  <!-- DROPDOWN LINK PROJECTS -->
                  <li class="nav-item dropdown lead me-5">
                      <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Projects
                      </a>
                      <ul class="dropdown-menu">
                          <li *ngFor="let project of angularProjects let i = index">
                              <a class="dropdown-item section-link"
                              routerLink="{{ project.link }}">{{ i + 1 }}. {{ project.name }}
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li *ngFor="let link of navLinks" class="me-4 nav-item lead">
                      <a class="nav-link active" routerLink="{{ link.link }}">{{ link.name }}</a>
                  </li>
                  <li *ngFor="let link of externalLinks" class="me-4 nav-item lead">
                      <a class="nav-link active" href="{{ link.link }}" target="_blank">{{ link.name }}</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  
  `,
  styles: `

    .navbar-collapse {
      @media screen and (max-width: 991px) {
        margin-top: 20px;
      }
    }
    
    .navbar-brand {
      @media screen and (max-width: 991px) {
        margin: 0 !important;
      }
    }
  
    .navbar-custom-colour {
      background-color: rgb(231, 231, 231);
      padding: 15px 30px;
    }

    .section-link {
      font-size: 17px;
      padding: 10px 20px;

      &:hover {
        background-color: rgb(231, 231, 231);
      }

      &:focus {
        color: rgb(36, 54, 99);
      }
      
    }
    
  `
})
export class NavbarComponent implements OnInit {
 
  constructor(
    private sections: SectionsAndProjectsService
  ) {}

  ngOnInit(): void {
    this.angularSections = this.sections.sections;
    this.angularProjects = this.sections.projects;
    this.externalLinks = this.sections.links;
  }

  angularSections: SectionsAndProjects[] = [];
  angularProjects: SectionsAndProjects[] = [];
  externalLinks: ExternalLink[] = [];

  get navLinks(): ExternalLink[] {
    return [ ...this.links ];
  }
    
  // * NAVBAR LINKS 
  private links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    }
  ];
  
}
