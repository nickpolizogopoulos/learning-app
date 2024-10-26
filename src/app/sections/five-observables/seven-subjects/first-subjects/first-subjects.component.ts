import { Component } from '@angular/core';

import { ToggleService } from '../toggle.service';
import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-first-subjects',
  template: `
  
    <h4>7. Passing data to other components via Subjects</h4>
    <p class="lead"> <u>Component #1</u> </p>
    <p class="lead">Toggle the switch to mute or unmute the microphone.</p>

    <svg (click)="onClickToActivate()" *ngIf="!toggleActive" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-toggle-off cursor-pointer" viewBox="0 0 16 16">
        <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
    </svg>

    <svg (click)="onClickToDeactivate()" *ngIf="toggleActive" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-toggle-on cursor-pointer" viewBox="0 0 16 16">
        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
    </svg>
  
  `,
  host: lessonHostClasses
})
export class FirstSubjectsComponent {

  constructor(
    private toggleService: ToggleService
  ) {}

  toggleActive: boolean = false;

  onClickToActivate(): void {
    this.toggleService.toggleOn.next(true);
    this.toggleActive = true;
  }

  onClickToDeactivate(): void {
    this.toggleService.toggleOn.next(false);
    this.toggleActive = false;
  }
  
}
