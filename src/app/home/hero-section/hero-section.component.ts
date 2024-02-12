import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `

    <div class="d-flex justify-content-center">
      <img class="hero-img" src="../../assets/images/home-images/hero.jpg" alt="Learning Angular Banner">
    </div>
  
  `,
  styles: [`
  
    .hero-img {
      width: 90%;
      height: auto;
    }

  `]
})
export class HeroSectionComponent {

}
