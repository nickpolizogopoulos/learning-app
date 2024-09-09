import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

    <section class="headtitle">
        <h2>About.</h2>
    </section>

    <section class="ps-4 mt-4 mb-5">
        <p class="lead">I started this project as an Angular playground for practice 
            and I decided to make it a mini Web App with exercises 
            for every lesson, then I added the sections and a separate projects section.
        </p>
        <p class="lead">
            With this project I kept myself 
            involved as much as I could as I was trying to make my own exercises.
        </p>
        <p class="lead">
            This project is powered by 
            <a  class="nodecor"
                href="https://getbootstrap.com/"
                target="_blank"
                ><span class="bootstrap nodecor">Bootstrap</span>
            </a>
            for faster styling and the
            <a href="https://firebase.google.com/" target="_blank" class="nodecor">
                <span class="firebase">Firebase</span>
            </a>
            API for the HTTP section and deployment.
            The main focus was of course on
            <a  class="nodecor"
                href="https://angular.io/"
                target="_blank"
                ><span class="angular nodecor">Angular</span>
            </a>
                and the 
            <a  class="nodecor"
                href="https://www.typescriptlang.org/"
                target="_blank"
                ><span class="typescript nodecor">TypeScript</span>
            </a>
            programming language.
        </p>
        <p class="lead">The project has a lot of custom CSS though.</p>

        <div class="explanation">
            <div class="pb-1">Please note that some early lessons and projects in this Angular app use
                awkward implementation logic for beginners.
            </div>
            <div class="pb-1">
                I know! There is <u>bad / beginner / junior / newbie</u> code in here, I can see it,  I'm glad I can!
                I started from that level, and I love seeing the progress I've made!
            </div>
            <div class="pb-1">An example is the way I handled forms before I reach the 6th section, 
                <a class="inherit" routerLink="/forms">Forms</a>.
            </div>
            <div class="pb-1">These instances occurred prior to my exposure to lessons that guide on 
                the correct approaches, plus I wasn't that familiar with more advanced practices at that point.
            </div>
            <div class="pb-1">As a result, there may be inconsistencies 
                in the implementation across these phases. There might be updates in the future.
            </div>
            <div class="pb-1">This app is not fully optimized for smaller screens.
            </div>
        </div>
        <p class="lead">Thank you!</p>
        <p class="lead mb-5">-Nick Polizogopoulos</p>
        <app-custom-button>Back to home</app-custom-button>

    </section>
  
  `,
  styles: [`
  
    .explanation {
        font-size: 16px;
        margin: 45px 0px 45px 30px;
        border-left: 2px solid rgba(36, 54, 99, 0.6);
        padding: 5px 0px 5px 15px;
    }
  
  `]
})
export class AboutComponent {
  
}