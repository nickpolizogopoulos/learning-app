import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

    <section class="headtitle">
        <h2><mark>About.</mark></h2>
    </section>

    <section class="ps-4 mt-4 mb-5 niceblue">
        <p class="lead"><mark>I started this project as an Angular playground for practice 
            and I decided to make it a mini Web App with exercises 
            for every lesson, then I added the sections and a separate projects section.</mark>
        </p>
        <p class="lead"><mark>With this project I kept myself 
            involved as much as I could as I was trying to make my own exercises.</mark>
        </p>
        <p class="lead">
            <mark>This project is powered by 
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
            programming language.</mark>
        </p>
        <p class="lead"><mark>The project carries a lot of custom CSS though.</mark></p>

        <div class="explanation">
            <div class="pb-1"><mark>Please note that some early lessons and projects in this Angular app use
                awkward implementation logic for beginners.</mark>
            </div>
            <div class="pb-1"><mark>
                I know! There is <u>bad / beginner / junior / newbie</u> code in here, I can see it,  I'm glad I can!
                I started from that level, and I love seeing the progress I’ve made!</mark>
            </div>
            <div class="pb-1"><mark>An example is the way I handled forms before I reach the 6th section, 
                <a class="inherit" routerLink="/forms">Forms</a>.</mark>
            </div>
            <div class="pb-1"><mark>These instances occurred prior to my exposure to lessons that guide on 
                the correct approaches, plus I wasn't that familiar with more advanced practices at that point.</mark>
            </div>
            <div class="pb-1"><mark>As a result, there may be inconsistencies 
                in the implementation across these phases. There might be updates in the future.</mark>
            </div>
            <div class="pb-1"><mark>This app is not fully optimized for smaller screens.</mark>
            </div>
        </div>
        <p class="lead"><mark>Thank you!</mark></p>
        <p class="lead"><mark>-Nick Polizogopoulos</mark></p>
        <div class="mt-5">
            <a class="nodecor inherit" routerLink="/">
                <span class="customButton lead">Back to home</span>
            </a>
        </div>

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