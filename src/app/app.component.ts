import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <header appHeader></header>
    <main class="main-content">
      <router-outlet />
    </main>
    <footer appFooter></footer>
  
  `,
  styles: `
  
    .main-content {
      margin: 40px 40px 0px 40px;
      
      @media screen and (max-width: 800px) {
        margin: 40px 20px 0px 20px;;
      }
    }
  
  `
})
export class AppComponent {}