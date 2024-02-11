import { Component } from '@angular/core';

interface CarouselItems {
  imageSrc:string;
  imageAlt:string;
  activeClass?:string;
}

@Component({
  selector: 'app-home-carousel',
  // templateUrl: './home-carousel.component.html',
  template: `
  
    <div class="container">
      <!-- WHEN data-bs-ride="carousel", it auto-plays, when data-bs-ride="false" it stops autoplaying -->
      <div #carousel id="carousel" class="carousel slide" [attr.data-bs-ride]="dataRide" data-bs-pause="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div class="carousel-inner">

          <div *ngFor="let item of carouselItemsHorizontal" class="carousel-item {{item.activeClass}}" data-bs-interval="3000">
            <img src="{{item.imageSrc}}" class="carouselImage d-flex justify-content-center" alt="{{item.imageAlt}}">
              <div class="carousel-caption d-none d-md-block">
                <button routerLink="about" class="btn">Learn more</button>
              </div>
          </div>
          
        </div>
        
        <div class="carouselPlayPause">
          <svg (click)="playClick()" *ngIf="isPlaying" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play playPauseColor" viewBox="0 0 16 16">
            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          </svg>

          <svg (click)="pauseClick()" *ngIf="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause playPauseColor" viewBox="0 0 16 16">
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          </svg>
        </div>
        
      </div>
    </div>
  `,
  styleUrls: ['./home-carousel.component.css']

})
export class HomeCarouselComponent {

  dataRide:string = 'carousel';
  isPlaying:boolean = false;

  playClick():void {
    this.dataRide = 'carousel';
    this.isPlaying = !this.isPlaying;
  }

  pauseClick():void {
    this.dataRide = 'false';
    this.isPlaying = !this.isPlaying;
  }

  carouselItemsHorizontal:CarouselItems[] = [

    {
      imageSrc: '../../assets/images/home-images/carousel/main-artboard.png',
      imageAlt: 'Welcome to "Learning Angular" Application banner.',
      activeClass: 'active'
    },
    {
      imageSrc: '../../assets/images/home-images/carousel/sections-artboard.png',
      imageAlt: 'Learning Angular - Sections banner.',
    },
    {
      imageSrc: '../../assets/images/home-images/carousel/projects-artboard.png',
      imageAlt: 'Learning Angular - Projects banner.',
    },
  ]

  // carouselItemsVertical:CarouselItems[] = [

  //   {
  //     imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
  //     imageAlt: 'Welcome to "Learning Angular" Application banner.',
  //     activeClass: 'active'
  //   },
  //   {
  //     imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
  //     imageAlt: 'Learning Angular - Sections banner.',
  //   },
  //   {
  //     imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
  //     imageAlt: 'Learning Angular - Projects banner.',
  //   },
  // ]


}
