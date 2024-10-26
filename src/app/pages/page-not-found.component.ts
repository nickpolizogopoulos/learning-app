import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  
    <div class="headtitle niceblue pb-5">
      <h2>Error 404:</h2>    
      <p class="lead">The page you are looking for doesn't exist.</p>
      <div class="ms-3 mt-5">
          <a class="nodecor inherit" routerLink="/">
            <app-custom-button>
              Back to home
            </app-custom-button>
          </a>
      </div>
    </div>
  
  `
})
export class PageNotFoundComponent {}