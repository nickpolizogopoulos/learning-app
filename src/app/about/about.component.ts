import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

    <section class="headtitle">
        <h2><mark>About.</mark></h2>
    </section>

    <section class="ps-4 mt-4 mb-5 niceblue">
        <p class="lead"><mark>This project started as an Angular playground for practice.</mark></p>
        <p class="lead"><mark>I decided to make it a mini Web App with exercises 
            for every lesson, then I added the sections and a separate projects section.</mark>
        </p>
        <p class="lead"><mark>The idea came after I started 
        <a
            class="inherit"
            href="https://www.linkedin.com/in/maximilian-schwarzmueller/"
            target="_blank"
            >Maximilian's</a>
            course, Max is a great teacher and my second favourite [ hi 
        <a
            class="inherit"
            href="https://www.linkedin.com/in/mosh-hamedani/"
            target="_blank"
            >Mosh</a> ].</mark>
        </p>
        <p class="lead"><mark>I update this project constantly as I am learning 
            and as long as it's easy for me to do so.</mark>
        </p>
        <p class="lead"><mark>With this project I keep myself 
            involved as much as I can as I am trying to make my own exercises.</mark>
        </p>
        <p class="lead">
            <mark>This project is powered by 
            <a  class="nodecor"
                href="https://getbootstrap.com/"
                target="_blank"
                ><u class="bootstrap nodecor">Bootstrap</u>
            </a>
            for fast styling as I wanted to focus in 
            <a  class="nodecor"
                href="https://angular.io/"
                target="_blank"
                ><u class="angular nodecor">Angular</u>
            </a>
                and the 
            <a  class="nodecor"
                href="https://www.typescriptlang.org/"
                target="_blank"
                ><u class="typescript nodecor">TypeScript</u>
            </a>
            programming language.</mark>
        </p>
        <p class="lead"><mark>Although I added some custom CSS (the illness of perfectionism).</mark></p>
        <div class="explanation">
            <div class="pb-1"><mark>Please note that some early lessons and projects in this Angular app use
                 a little awkward implementation methods for beginners.</mark>
            </div>
            <div class="pb-1"><mark>An example is the way I handled forms before I reach the 6th section, 
                <a class="inherit" routerLink="/forms">Forms</a>.</mark>
            </div>
            <div class="pb-1"><mark>These instances occurred prior to my exposure to lessons that guide on 
                the correct approaches.</mark>
            </div>
            <div class="pb-1"><mark>As a result, there may be inconsistencies 
                in the implementation across these phases. I might do updates in the future.</mark>
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