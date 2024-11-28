import {
  Component,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Observer,
  Subscription
} from 'rxjs';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-three-observable-errors',
  template: `
  
    <h4>3. Observable Errors</h4>
    <p class="lead">Woop-woop, that's the sound of da police.</p>
    <button (click)="play()" *ngIf="!playing" class="btn btn-sm btn-primary rounder-1">Play</button>
    <button (click)="stop()" *ngIf="playing" class="btn btn-sm btn-secondary rounder-1 mb-4">Stop</button>
    <div *ngIf="playing" [ngClass]="{'blueBg': counter % 2 !== 0, 'redBg': counter % 2 === 0 }" class="row mb-3" style="height: 30px;">
      <div [ngClass]="{'blueLightbar' : counter % 2 === 0}" class="col"></div>
      <div [ngClass]="{'redLightbar' : counter % 2 !== 0}" class="col"></div>
    </div>
    
    <div *ngIf="playing">
      <svg *ngIf="counter >= 10" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg *ngIf="counter >= 20" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg *ngIf="counter >= 30" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg *ngIf="counter >= 40" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg *ngIf="counter >= 50" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <p *ngIf="counter >= 60" class="lead mt-2">Run!</p>
    </div>
    
  `,
  styles: `

    .blueLightbar {
      background-color: rgb(50, 50, 255);
    }

    .redLightbar {
      background-color: rgb(255, 58, 58);
    }

    .blueBg {
      background-color: rgb(106, 153, 255);
    }

    .redBg {
      background-color: rgb(255, 146, 146);
    }

  `,
  host: lessonsHostClasses
})
export class ThreeObservableErrorsComponent implements OnDestroy {

  playing: boolean = false;
  counter: number = 0;
  subscription?: Subscription;

  play(): void {
    this.playing = true;
    const customObservable = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval( () =>
          {
            observer.next(count);
            count++;
            if (count >= 85) observer.error(
              new Error('You are under arrest!'),
            )
          },
          100
        );
      });

    this.subscription = customObservable
      .subscribe({
        next: (data: number) => this.counter = data,
        error: (error: Error) => {
          alert(error.message),
          this.playing = false;
        }
      });
  }

  stop(): void {
    this.playing = false;
    this.subscription!.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
}
