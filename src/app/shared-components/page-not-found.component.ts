import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  
    <div class="headtitle niceblue pb-5">
      <h2><mark>Error 404:</mark></h2>    
      <p class="lead"><mark>The page you are looking for doesn't exist.</mark></p>
      <div class="ms-3 mt-5">
          <a class="nodecor inherit" routerLink="/">
              <span class="customButton lead">
                  Back to home
              </span>
          </a>
      </div>
    </div>
  
  `,
  styles: [``]
})
export class PageNotFoundComponent { 
  
}
