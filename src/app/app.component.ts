import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lessonSections = [
    {name: 'Home', link: ''},
    {name: 'About', link: ''},
    {name: 'Basics', link: ''},
  ]
}
