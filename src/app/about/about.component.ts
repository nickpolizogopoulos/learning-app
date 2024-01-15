import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

    <section class="headtitle">
        <h2><mark>About.</mark></h2>
    </section>
        <section class="ps-4 pe-4 mt-5 mb-5 niceblue">
            <p class="lead"><mark>This project started as an Angular playground for practice.</mark></p>
            <p class="lead"><mark>I decided to make it a mini Web App with exercises 
                for every lesson, then I added the sections.</mark>
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
            <p class="lead paragraphbg"><mark>I update this project constantly as I am learning 
                and as long as it's easy for me to do so.</mark>
            </p>
            <p class="lead paragraphbg"><mark>With this project I keep myself 
                involved as much as I can as I am trying to make my own exercises.</mark>
            </p>
            <p class="lead paragraphbg">
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
            <p class="lead paragraphbg"><mark>Although I added some custom CSS (the illness of perfectionism).</mark></p>
            <p class="mt-5 lead paragraphbg"><mark>Thank you!</mark></p>
            <p class="mt-3 lead paragraphbg"><mark>Nick</mark></p>
            <div class="mt-5">
                <a class="nodecor inherit" routerLink="/">
                <span class="aboutBtn lead">
                    Back to home
                </span>
                </a>
            </div>

    </section>
  
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
}