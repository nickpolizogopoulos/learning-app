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
      <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

          <div *ngFor="let item of carouselItemsHorizontal" class="carousel-item {{item.activeClass}}" data-bs-interval="2500">
            <img src="{{item.imageSrc}}" class="d-block w-100" alt="{{item.imageAlt}}">
              <div class="carousel-caption d-none d-md-block">
                <button routerLink="about" class="btn">Learn more</button>

              </div>
          </div>
          
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->

        <div class="carouselPlayPause">
          <svg (click)="playClick()" *ngIf="isPlaying" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
          </svg>
          
          <svg (click)="pauseClick()" *ngIf="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
          </svg>
        </div>
        
      </div>
    </div>
  `,
  // styleUrls: ['./home-carousel.component.css']
  styles: [`
  
    .container {
      max-width: 100%;
    }

    .carousel-item {
      height: 750px;
    }
    .carousel-item-horizontal {
      height: 750px;
    }

    .btn {
      color: rgb(36, 54, 99);
      border: 2px solid;
      padding: 7px 60px;
      margin-bottom: 30px;
    }
    .btn:hover {
      background-color: rgba(184, 194, 219, 0.255);
      border: 2px solid;
    }
    .carouselPlayPause {
      margin-left: 97%;
      position: absolute;
      bottom: 15px;
    }
  
  `]
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
      imageSrc: 'https://lh3.googleusercontent.com/proxy/VfpfKLXz_W5vdw8HsEDEv2hO1ruUaKtWmSkfiScTR31RE_XL0B1xPTB3-XfO1qgo1U8eUFtbn5MYfrOwNzNermneQ2JPl5J1O03Sfhdt5905SK3s1IulR0fNxgcBtQXGVtwvEPnGRf0HW_8X-vY',
      imageAlt: 'Welcome to "Learning Angular" Application banner.',
      activeClass: 'active'
    },
    {
      imageSrc: 'https://lh3.googleusercontent.com/proxy/VfpfKLXz_W5vdw8HsEDEv2hO1ruUaKtWmSkfiScTR31RE_XL0B1xPTB3-XfO1qgo1U8eUFtbn5MYfrOwNzNermneQ2JPl5J1O03Sfhdt5905SK3s1IulR0fNxgcBtQXGVtwvEPnGRf0HW_8X-vY',
      imageAlt: 'Learning Angular - Sections banner.',
    },
    {
      imageSrc: 'https://lh3.googleusercontent.com/proxy/VfpfKLXz_W5vdw8HsEDEv2hO1ruUaKtWmSkfiScTR31RE_XL0B1xPTB3-XfO1qgo1U8eUFtbn5MYfrOwNzNermneQ2JPl5J1O03Sfhdt5905SK3s1IulR0fNxgcBtQXGVtwvEPnGRf0HW_8X-vY',
      imageAlt: 'Learning Angular - Projects banner.',
    },
  ]

  carouselItemsVertical:CarouselItems[] = [

    {
      imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
      imageAlt: 'Welcome to "Learning Angular" Application banner.',
      activeClass: 'active'
    },
    {
      imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
      imageAlt: 'Learning Angular - Sections banner.',
    },
    {
      imageSrc: 'https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg',
      imageAlt: 'Learning Angular - Projects banner.',
    },
  ]


}
