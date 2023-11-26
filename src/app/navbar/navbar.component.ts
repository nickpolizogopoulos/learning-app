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
  
  // NAVBAR DROPDOWN LINK
  AngularSections = [
    {id: 1, name: 'The Basics', link: '/the-basics'},
    {id: 2, name: 'Components & Databinding', link: '/components-databinding'},
  ]
  
}
