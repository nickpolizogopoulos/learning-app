import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tools, ToolsService } from './tools.service';

@Component({
  selector: 'app-four-interceptor',
  // templateUrl: './four-interceptor.component.html',
  template: `
  
    <h4>4. A basic Interceptor</h4>
    <p class="lead">A list of tools. Reload to trigger the interceptor.</p>
    <button (click)="fetchTools()" class="btn btn-primary rounded-1" [disabled]="isLoading">
        <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
        {{ isLoading ? 'Loading...' : 'Reload List'}}
    </button>
    <hr>
    <p *ngIf="message" class="menlo">{{message}}</p>
    <div class="mt-4">
        <div *ngFor="let tool of toolsList" class="mb-4">
            <a href="{{tool.info}}" target="_blank"><img src="{{tool.logo}}" alt="{{tool.name}} language logo"></a>
            <span class="h5 ms-3">{{tool.name}}</span>
            <span class="ms-2">- Designed by {{tool.designer}}, <em>{{tool.year}}</em></span>
            <hr>
        </div>
    </div>
    <!-- <button (click)="postTools()" class="me-1">post</button>
    <button (click)="deleteList()">clear</button> -->
  
  `,
  styles: [`
  
  img {
    width: 60px;
    height: auto;
    filter: grayscale(100%);
  }
  img:hover {
    filter: grayscale(0%);
  }
  
  `]
})
export class FourInterceptorComponent implements OnInit {

  constructor(
    private toolsService:ToolsService,
  ) { }

  isLoading:boolean = false;
  message?:string | null;
  toolsList:Tools[] = [];
  time:number = 0;

  ngOnInit():void {
    this.fetchTools()
    this.time = 1500;
  }

  fetchTools() {
    this.isLoading = true;
    this.toolsList = [];
    console.log(this.toolsService.message);
    this.message = this.toolsService.message;

    //* setTimeout simulates 1.5 sec server response time 
    setTimeout( () => {
      this.toolsService.fetchTools()
        .subscribe(
          tools => {
            this.isLoading = false;
            this.toolsList = tools;
            this.message = null;
          }
        )
    }, this.time )
  }

  //* lesson utilities
  postTools():void {
    this.toolsService.postTools()
  }
  deleteList():void {
    this.toolsService.deleteList()
      .subscribe(
        () => this.toolsList = []
      )
  }

}
