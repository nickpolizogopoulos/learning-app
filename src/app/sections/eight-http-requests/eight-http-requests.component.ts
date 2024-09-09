import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-http-requests',
  template: `
  
    <h2>Http Requests - 4 Lessons using 
      <a href="https://firebase.google.com/" class="inherit " target="_blank">Firebase</a>
    </h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-get-request />
        <app-two-post-request />
        <app-three-error-handling />
        <app-four-interceptor />
      </div>
    </section>  
  
  `,
  styles: [``]
})
export class EightHttpRequestsComponent {

}
