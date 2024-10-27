import { 
  Component,
  WritableSignal,
  signal
} from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-signal',
  template: `
  
    <h4 class="user-select-none">1. Reading, Outputting & Updating Signals</h4>
    <p class="lead user-select-none">How much RAM is enough RAM?</p>
    <p class="lead user-select-none">{{ram()}} GB</p>
    <button [disabled]="ram() === 2" (click)="decrement()" class="btn btn-sm btn-danger rounded-1 me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
        </svg>
    </button>
    <button [disabled]="ram() === 1024" (click)="increment()" class="btn btn-sm btn-primary rounded-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
    </button>
    <div class="mt-4 user-select-none">
      <span *ngIf="ram() === 2" class="lead">You can't even launch a rocket with 2gb ram!</span>
      <p *ngIf="ram() === 2" class="lead addToTestText">Wait...</p>
      <span *ngIf="ram() === 256" class="lead">Very RAM, much wow!</span>
      <span *ngIf="ram() === 512" class="lead">OH COME ON!</span>
      <span *ngIf="ram() === 1024" class="lead">THATS A LOT OF MONEY!</span>
      <p *ngIf="ram() === 1024" class="lead addToTestText">Chrome still hungry though.</p>
    </div>
 
  `,
  host: lessonsHostClasses
})
export class SignalComponent {

  ram: WritableSignal<number> = signal(4);

  increment(): void {
    if (this.ram() === 1024)
      return;

    if (this.ram() !== 1024)
      this.ram.set( this.ram() + this.ram() );
  }

  decrement(): void {
    if (this.ram() === 2)
      return;

    this.ram.update( () => this.ram() - (this.ram() / 2) );
  }

}