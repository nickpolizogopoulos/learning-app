import { Component, OnInit } from '@angular/core';

interface Guests {
  name: string
  age: number
  status: string
  title: string
}

@Component({
  selector: 'app-filter-pipe',
  template: `
  
    <h4>3. A filter Pipe</h4>
    <p class="lead">Filter the list of our party guests.</p><hr>
    <div class="dropdown mb-3">
        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter the list
        </button>
        <ul class="dropdown-menu cursor-pointer">
          <li><a class="dropdown-item">Married</a></li>
          <li><a class="dropdown-item">Single</a></li>
          <li><a (click)="onReset()" class="dropdown-item">Reset</a></li>
        </ul>
      </div>
    <div class="row">
          <span class="lead mb-2" *ngFor="let guest of guests let i = index">
            {{guest.name}} - <em>{{guest.title}}</em>. Age: 
            {{ guest.age }}, Status: 
            <span [ngClass]="{'text-success' : guest.status === 'Married', 'text-primary' : guest.status === 'Single'}">
            {{ guest.status }}</span>
        </span>
    </div>
  
  `,
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent {

  currentYear = new Date().getFullYear();

  guests:Guests[] = [
    {
      name: 'Nick P.',
      age: this.currentYear-1992,
      status: 'Single',
      title: 'The Insane'
    },
    {
      name: 'Jelly M.',
      age: this.currentYear-1994,
      status: 'Married',
      title: 'The Wise'
    },
    {
      name: 'Margo H.',
      age: this.currentYear-1990,
      status: 'Single',
      title: 'The Destroyer'
    },
    {
      name: 'Eliot W.',
      age: this.currentYear-1990,
      status: 'Married',
      title: 'The Spectacular'
    },
  ]

  onReset() {
  }
}
