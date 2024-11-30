import { Component } from '@angular/core';

@Component({
  selector: 'app-nine-authentication-route-protection',
  template: `
  
    <h2>Authentication & Route Protection - 1 Project.</h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <div class="lessonbox col-md-6 col-lg-5 col-xxl-3 lead">
          
          <h4>The Food Recipes Project</h4>
          <p class="mb-3">
            Everything related to this section is implemented in my Angular course 
            project called <strong>"Food Recipes".</strong>
          </p>
          <p class="mb-3">
            It's paired with Firebase and I implemented an Authentication page, 
            Login and Signup functionality, Error handling, UI reflections, Token handling, route protection 
            using Auth Guard and more!
          </p>

          <a class="btn btn-primary rounded-1 me-3 mb-3" href="https://ng-course-food-application.firebaseapp.com/auth" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-caret-right-square mb-1 me-2" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082"/>
            </svg>
            Launch the project!
          </a>
          <a class="btn btn-success rounded-1  mb-3" href="https://github.com/nickpolizogopoulos/food-recipes-app" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github mb-1 me-2" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            The Source Code
          </a>

        </div>
      </div>
    </section>
  
  `
})
export class NineAuthenticationRouteProtectionComponent {}