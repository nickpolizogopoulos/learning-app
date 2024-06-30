import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { windowsSelected, macSelected } from './macWindows.actions';
import { selectMacVsWindows } from './macWindows.selector';

export interface OperatingSystem {
  macVSwindows: string;
}

@Component({
  selector: 'app-three-selector',
  template: `
  
    <h4>3. Reading data using a Selector <span class="text-secondary h6">- string type</span></h4>
    <p class="lead">What are you using right now?</p>

    <div class="btn-group d-flex justify-content-center align-items-center mt-4" role="group">
        <button (click)="onWindows()" class="btn btn-outline-primary" [ngClass]="{'btn-primary': (macVSwindows$ | async) === 'Windows'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16" [ngClass]="{'text-white': (macVSwindows$ | async) === 'Windows'}">
            <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
          </svg>
        </button>
        <button (click)="onMac()" class="btn btn-outline-primary" [ngClass]="{'btn-primary': (macVSwindows$ | async) === 'Mac'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16" [ngClass]="{'text-white': (macVSwindows$ | async) === 'Mac'}">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
          </svg>
        </button>
    </div>

    <div class="mt-5">
      <p *ngIf="(macVSwindows$ | async) === 'empty'">Make a selection.</p>
      <h4 *ngIf="(macVSwindows$ | async) === 'Windows'">But a Mac would be so cool!</h4>
      <div *ngIf="(macVSwindows$ | async) === 'Mac'">
        <h4>Isn't Mac is so cool?!</h4>
        <img src="assets/images/slightly-smiling-face_1f642.png" width="40">
      </div>
    </div>

  `
})
export class ThreeSelectorComponent {

  macVSwindows$!: Observable<string>;

  constructor(
    private store: Store<OperatingSystem>
  ) {
    this.macVSwindows$ = this.store.select( selectMacVsWindows );
  }

  onWindows(): void {
    this.store.dispatch(
      windowsSelected( { value: 'Windows' } )
    );
  }

  onMac(): void {
    this.store.dispatch(
      macSelected( { value: 'Mac' } )
    );
  }

}
