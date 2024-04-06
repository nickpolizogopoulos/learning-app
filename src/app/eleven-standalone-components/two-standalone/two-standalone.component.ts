import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface DaysProps {
  name: string;
  dayTitle: string;
  exercises: ExercisesProps[];
}

interface ExercisesProps {
  name: string;
  description: string;
}

@Component({
  selector: 'app-two-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  
    <h4>Standalone Component #2 - Fit Today: Pick Your Workout Plan! </h4>
    <p class="lead">Select the day and start working out. <span class="addToTestText">[workout... lmao]</span></p>

    <select class="form-select shadow-none mb-4" type="text" [(ngModel)]="selectedDay">
      <option [value]="0" disabled selected>Select Day</option>
      <option *ngFor="let day of days" [ngValue]="day">{{day.name}}</option>
    </select>

    <h5 *ngIf="selectedDay">{{selectedDay.name}}:<span class=" ms-2 h6"><u>{{getSelectedDayTitle()}}</u></span></h5>
    <hr *ngIf="selectedDay">
    <table *ngIf="selectedDay" class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Exercise</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let exercise of getSelectedDayExercises(); let i = index">
                <th>{{i + 1}}</th>
                <td>{{exercise.name}}</td>
                <td>{{exercise.description}}</td>
            </tr>
        </tbody>
    </table>

  `,
  styles: [``]
})
export class TwoStandaloneComponent {

  selectedDay:any = 0;

  days:DaysProps[] = [
    {
      name: 'Monday',
      dayTitle: 'Lower Body Strength Resistance Work',
      exercises:
      [
        { name: 'Squats', description: 'Three sets of 10 reps' },
        { name: 'Lunges', description: 'Three sets of 12 reps (each leg)' },
        { name: 'Hamstring curls', description: 'Three sets of 12 reps' },
        { name: 'Calf raises', description: 'Three sets of 15 reps' }
      ]
    },
    {
      name: 'Tuesday',
      dayTitle: 'Cardio and Core',
      exercises:
      [
        { name: 'Run, hike or cycle', description: '45 minutes' },
        { name: 'Plank', description: 'Three 30-second sets' },
        { name: 'Forearm plank with twists', description: 'Three sets of 15 reps' },
        { name: 'Mountain climbers', description: 'Three 1-minute sets' }
      ]
    },
    {
      name: 'Wednesday',
      dayTitle: 'Cardio and Mobility',
      exercises:
      [
        { name: 'Mobility', description: '30 minutes incorporating hip, shoulder, spine and ankle mobility movements' },
        { name: 'Walk briskly', description: '30 minutes' },
      ]
    },
    {
      name: 'Thursday',
      dayTitle: 'Upper Body Strength',
      exercises:
      [
        { name: 'Push-ups', description: 'Three sets of 12 reps' },
        { name: 'Dumbbell chest press', description: 'Three sets of 10 reps' },
        { name: 'Bent-over rows', description: 'Three sets of 10 reps' },
        { name: 'Tricep dips', description: 'Three sets of 12 reps' },
      ]
    },
    {
      name: 'Friday',
      dayTitle: 'Cardio and Full Body',
      exercises:
      [
        { name: 'Jumping jacks', description: 'Three 1-minute sets' },
        { name: 'High knees', description: 'Three 1-minute sets' },
        { name: 'Full-body burpees & push-ups', description: ' Three 30 second rounds for burpees and push-ups' },
      ]
    },
    {
      name: 'Saturday',
      dayTitle: 'Active Recovery and Flexibility',
      exercises:
      [
        { name: 'Walk or light cycle', description: '20 minutes' },
        { name: 'Dynamic stretching routine', description: '10 to 15 minutes' },
      ]
    },
    {
      name: 'Sunday',
      dayTitle: 'Endurance Cardio',
      exercises:
      [
        { name: 'Hike, bike or brisk walk', description: '60 to 100 minutes (one hour to about one hour and 40 minutes)' },
      ]
    }
  ];

  getSelectedDayTitle():string {
    const selectedDayTitle = this.days.find( day => day.name === this.selectedDay.name )
    return selectedDayTitle ? selectedDayTitle.dayTitle : '';
  }

  getSelectedDayExercises(): ExercisesProps[] {
    const selectedDayObject = this.days.find( day => day.name === this.selectedDay.name );
    return selectedDayObject ? selectedDayObject.exercises : [];
  }
}
