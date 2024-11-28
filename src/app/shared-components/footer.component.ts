import {
  Component,
  signal
} from '@angular/core';

@Component({
  selector: 'footer[appFooter]',
  template: `

    <hr class="ms-5 me-5">
    <p class="text-center">
      Learning Angular 2023 - {{ footerDate() }} 
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
      </svg>
      An 
      <a class="angular nodecor" href="https://angular.io/" target="_blank">
        Angular
      </a>
      Application by 
      <a class="inherit nodecor" href="https://nick-polizogopoulos.web.app" target="_blank">
        Nick Polizogopoulos
      </a>.
    </p>
  
  `,
  styles: `
    
    p {
      background-color: white;
    }
    
  `
})
export class FooterComponent {

    footerDate = signal(new Date().getFullYear());
    
}
