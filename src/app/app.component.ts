import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  components = [
    {name: 'app-data-binding'},
    {name: 'app-data-binding'},
    {name: 'app-data-binding'},
    {name: 'app-data-binding'},
    {name: 'app-data-binding'},
    {name: 'app-data-binding'},
  ]
}
