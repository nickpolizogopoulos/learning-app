import {
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Observable,
  Observer,
  Subscription
} from 'rxjs';

import { ProgAlertComponent } from './prog-alert.component';
import { PlaceholderDirective } from './placeholder.directive';
import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-two-programmatically',
  templateUrl: './two-programmatically.component.html',
  styles: `
  
    p {
      background-color: transparent;
    }
    
  `,
  host: lessonsHostClasses
})
export class TwoProgrammaticallyComponent implements OnDestroy {

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  knifePulledOut: boolean = false;
  formHidden: boolean = false;
  starPlaying?: boolean;
  counter: number = 0;
  private runAwaySubscription?: Subscription;
  @ViewChild('form') form?: NgForm;
  runAwayWindow: boolean = false;
  emptyStars: boolean = false;
  runningAway: boolean = false;
  thiefName: string = '';
  alertMessage: string = 'Guess you dodged a bullet there.'
  @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective; 
  private alertSubscription?: Subscription;

  pullKnife(): void {
    this.knifePulledOut = true;
  }

  onSubmit(): void {
    this.thiefName = this.form?.value.name;
    this.form?.reset();
    this.police();
    this.formHidden = true;
    setTimeout(() =>
      this.runAwayWindow = true,
      1000
    );
  }
  
  onRunAway(): void {
    this.starPlaying = false;
    this.runAwayWindow = false;
    this.runningAway = true;
    this.emptyStars = true;
    this.runAwaySubscription?.unsubscribe();
    setTimeout(() => {
        this.runningAway = false;
        this.showAlert(this.alertMessage);
        this.emptyStars = false;
      },
      2000
    );
  }

  police(): void {
    this.starPlaying = true;
    
    const observable = new Observable(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 150);
      }
    )

    this.runAwaySubscription = observable.subscribe({
      next: data => this.counter = data
    });
  }

  private showAlert( message: string ): void {
    const component = this.viewContainerRef.createComponent(ProgAlertComponent);

    component.instance.message = message;
    this.alertSubscription = component.instance.close
      .subscribe(() => {
          this.alertSubscription!.unsubscribe();
          this.viewContainerRef.clear();
          this.knifePulledOut = false;
          this.formHidden = false;
        }
      )
  }

  ngOnDestroy(): void {
    
    if (this.runAwaySubscription)
      this.runAwaySubscription?.unsubscribe();

    if (this.alertSubscription)
      this.alertSubscription?.unsubscribe();
  }

}

