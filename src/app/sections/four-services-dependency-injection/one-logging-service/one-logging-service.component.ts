import { Component } from '@angular/core';

import { LoggingServiceService } from './logging-service.service';
import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-one-logging-service',
  template: `
  
    <h4>1. Creating a Logging Service</h4>
    <p class="lead mb-2">
      Click one of the buttons to trigger a
      message in the developer tools console and the paragraph below
      via a service.
    </p>

    <hr class="mb-5">

    <app-one-service-button 
      (blueClick)="onBlueClicked()">
    </app-one-service-button>

    <app-two-service-button
      (redClick)="onRedClicked()">
    </app-two-service-button>

    <app-three-service-button
      (greenClick)="onGreenClicked()">
    </app-three-service-button>

    <p 
      class="lead mt-4 text-danger"
      [ngClass]="{ 
      'text-danger': messageColor === 'The Red button is clicked!',
      'text-primary': messageColor === 'The Blue button is clicked!',
      'text-success': messageColor === 'The Green button is clicked!',
      }"
    >
      {{ messageColor }}
    </p>

    <a
      *ngIf="resetButton"
      (click)="onResetMessage()" class="addToTestText inherit cursor-pointer nodecor mt-4"
    >
      [ Reset ]
    </a>

  `,
  host: lessonsHostClasses
})
export class OneLoggingServiceComponent {

  constructor (
    private loggingService: LoggingServiceService
  ) {}

  messageColor!: string;
  resetButton: boolean = false;
  
  blueButton: string = 'Blue';
  redButton: string = 'Red';
  greenButton: string = 'Green';

  onBlueClicked(): void {
    this.messageColor = this.loggingService.logMessage(this.blueButton);
    this.resetButton = true;
  }

  onRedClicked(): void {
    this.messageColor = this.loggingService.logMessage(this.redButton);
    this.resetButton = true;
  }

  onGreenClicked(): void {
    this.messageColor = this.loggingService.logMessage(this.greenButton);
    this.resetButton = true;
  }

  onResetMessage(): void {
    this.messageColor = '';
    this.resetButton = !this.resetButton;
  }

}
