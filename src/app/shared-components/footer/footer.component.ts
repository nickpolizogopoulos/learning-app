import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
    <footer class="bg-body-tertiary text-center text-lg-start mt-5">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © {{footerDate}} 
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
        </svg>
          Learning Angular by Nick Polizogopoulos. 
      </div>
    </footer>
  
  `,
  styles: [``]
})
export class FooterComponent {

    footerDate:number = new Date().getFullYear();
}
