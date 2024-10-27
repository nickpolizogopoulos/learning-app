import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

interface Guests {
  id: number
  name: string
  age: number
  status: string
  title: string
}

@Component({
  selector: 'app-three-filter-pipe',
  template: `
  
    <h4>3. A Filter Pipe</h4>
    <p class="lead">Filter the list of our party guests.</p><hr>
    <div class="dropdown mb-3">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter the list
        </button>
        <ul class="dropdown-menu cursor-pointer">
          <li><a (click)="onMarriedSelect()" class="dropdown-item">Show Married</a></li>
          <li><a (click)="onSingleSelect()" class="dropdown-item">Show Single</a></li>
        </ul> 
        <span *ngIf="filterBtn" class="filter-btn ms-3">
          {{ selection === 'Married' ? 'Married guests' : selection === 'Single' ? 'Single guests' : '' }}
          <a>
            <svg (click)="onReset()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle cursor-pointer ms-1 mb-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </a>
        </span>
      </div>
    <div class="row">
          <span class="lead mb-2" *ngFor="let guest of guests | statusFilter : selection : 'status'">
            {{guest.name}} - <em>{{guest.title}}</em>. Age: 
            {{ guest.age }}, Status: 
            <span [ngClass]="{'text-success' : guest.status === 'Married', 'text-primary' : guest.status === 'Single'}">
            {{ guest.status }}</span>
        </span>
    </div>
  
  `,
  styles: [``],
  host: lessonsHostClasses
})
export class ThreeFilterPipeComponent {

  currentYear = new Date().getFullYear();
  selection: string = '';
  filterBtn: boolean = false;

  guests: Guests[] = [
    {
      id: 1,
      name: 'Nick P.',
      age: this.currentYear-1992,
      status: 'Single',
      title: 'The Insane'
    },
    {
      id: 2,
      name: 'Jelly M.',
      age: this.currentYear-1994,
      status: 'Married',
      title: 'The Wise'
    },
    {
      id: 3,
      name: 'Margo H.',
      age: this.currentYear-1990,
      status: 'Single',
      title: 'The Destroyer'
    },
    {
      id: 4,
      name: 'Eliot W.',
      age: this.currentYear-1990,
      status: 'Married',
      title: 'The Spectacular'
    }
  ];

  onReset(): void {
    this.guests.sort(
      ( a, b ) => a.id - b.id
    )
    this.selection = '';
    this.filterBtn = false;
  }

  onMarriedSelect(): void {
    this.selection = 'Married';
    this.filterBtn = true;
  }

  onSingleSelect(): void {
    this.selection = 'Single';
    this.filterBtn = true;
  }

}
