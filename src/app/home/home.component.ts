import { Component, OnInit } from '@angular/core';
import { SectionsAndProjects, SectionsAndProjectsService } from '../shared/sections-and-projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sections:SectionsAndProjectsService
  ) {}

  ngOnInit():void {
    this.homeCards = this.sections.angularSections;
    this.projectCards = this.sections.angularProjects;
  }

  homeCards:SectionsAndProjects[] = [];
  projectCards:SectionsAndProjects[] = [];

}
