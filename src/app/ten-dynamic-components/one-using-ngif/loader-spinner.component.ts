import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  template: `
  
    <span class="loader"></span>
    
  `,
  styles: [`
  
    .loader {
    width: 48px;
    height: 48px;
    border: 2px solid #A0A0A0;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 0;
      background: #FF3D00;
      width: 3px;
      height: 24px;
      transform: translateX(-50%);
    }
        
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  
  `]
})
export class LoaderSpinnerComponent {

}
