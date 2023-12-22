import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  
  <section class="headtitle niceblue ">
    <h2><mark>Error 404:</mark></h2>    
    <p class="lead"><mark>The page you are looking for doesn't exist.</mark></p>
    <div class="ms-3 mt-5">
        <a class="nodecor inherit" routerLink="/">
            <span class="aboutBtn lead">
                Back to home
            </span>
        </a>
    </div>
</section>
  

  `,
  styles: [`
  
  .aboutBtn{
    position:relative;
    padding: 0px 5px;
}
.aboutBtn:before{
    background-color: white;
    content: "";
    z-index: -1;
    left: -10px;
    top: -6px;
    border-width: 3px;
    border-style: solid;
    border-color: rgba(36, 54, 99, 0.9);
    position: absolute;
    border-right-color: transparent;
    width: 140px;
    height: 40px;
    transform: rotate(2deg);
    border-radius: 5px;
}  
.aboutBtn:after{
    content: "";
    z-index: -1;
    left: -5px;
    top: -5px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(36, 54, 99, 0.9);
    border-left-color: transparent;
    border-top-color: transparent;
    position: absolute;
    width: 140px;
    height: 40px;
    transform: rotate(-1deg);
    border-radius: 5px;
}
  

  `]
})
export class PageNotFoundComponent {

}
