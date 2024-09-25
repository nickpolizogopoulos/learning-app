import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
  
    <div>
      <a class="nodecor inherit" routerLink="/{{ path }}">
        <span class="customButton lead">
          <ng-content />
        </span>
      </a>
    </div>
  
  `,
  styles: [`
    
    .customButton{

      position:relative;
      padding: 0px 5px;
      border-color: rgba(36, 54, 99, 0.9);
      
      &::before {
        background-color: white;
        content: "";
        z-index: -1;
        left: -10px;
        top: -6px;
        border-width: 3px;
        border-style: solid;
        position: absolute;
        border-right-color: transparent;
        width: 140px;
        height: 40px;
        transform: rotate(2deg);
        border-radius: 5px;
      }
      &::after {
        content: "";
        z-index: -1;
        left: -5px;
        top: -5px;
        border-width: 3px;
        border-style: solid;
        border-left-color: transparent;
        border-top-color: transparent;
        position: absolute;
        width: 140px;
        height: 40px;
        transform: rotate(-1deg);
        border-radius: 5px;
      }
    }
    
  `]
})
export class CustomButtonComponent {

  @Input() path?:string;

}