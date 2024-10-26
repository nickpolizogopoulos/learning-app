import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

    <footer class="text-center">
      <hr style="margin: 0px 100px;">
      <p class="text-center m-3">
        Learning Angular 2023 - {{footerDate}} 
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
        </svg>
          An 
          <a class="angular nodecor" href="https://angular.io/" target="_blank">Angular</a>
           Application by 
          <a class="inherit nodecor" href="https://nick-polizogopoulos.web.app" target="_blank">Nick Polizogopoulos</a>.
      </p>
    </footer>
  
  `,
  styles: [`
    
    p {
      background-color: white;
    }
    
  `]
})
export class FooterComponent {

    footerDate: number = new Date().getFullYear();
}
