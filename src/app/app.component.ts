import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  navLinks = [
    {name: 'Home', link: ''},
    {name: 'About', link: ''},
    {name: 'GitHub', link: ''},
  ]

  AngularSections = [
    {name: 'The Basics', link: ''},
    {name: 'Components & Databinding', link: ''},
  ]


}
