import { Component, inject, OnInit } from '@angular/core';
import { SectionsAndProjects, SectionsAndProjectsService } from '../shared/sections-and-projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private sections: SectionsAndProjectsService
  ) {}

  ngOnInit(): void {
    this.homeCards = this.sections.getSections();
    this.projectCards = this.sections.getProjects();
  }

  homeCards: SectionsAndProjects[] = [];
  projectCards: SectionsAndProjects[] = [];

}
