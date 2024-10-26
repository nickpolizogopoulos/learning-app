import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <app-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
  
  `,
  styles: [`
  
    .main-content {
      margin: 40px 40px 0px 40px;
    }
  
  `]
})
export class AppComponent {}