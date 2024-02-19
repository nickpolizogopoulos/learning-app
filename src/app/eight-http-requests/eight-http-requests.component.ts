import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-http-requests',
  template: `
  
    <h2><mark>Http Requests - X Lessons using 
      <a href="https://firebase.google.com/" class="inherit " target="_blank">Firebase</a>
    </mark>
    </h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <!-- <app-one-get-request class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-get-request>
          <app-two-post-request class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-post-request>
          <app-three-error-handling class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-error-handling> -->
          <app-four-interceptor class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-four-interceptor>
      </div>
    </section>  
  
  `,
  styles: [``]
})
export class EightHttpRequestsComponent {

}
