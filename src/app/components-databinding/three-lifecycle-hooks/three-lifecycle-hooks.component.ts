import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-lifecycle-hooks',
  templateUrl: './three-lifecycle-hooks.component.html',
  styleUrls: ['./three-lifecycle-hooks.component.css']
})
export class ThreeLifecycleHooksComponent implements 
  OnInit,
  OnChanges {

  constructor() {
    this.stateConstructor = true;
  }
  ngOnInit() {

  }
  ngOnChanges () {

  }

 
  stateConstructor:boolean = false;
  stateNgOnChanges:boolean = false;
  stateNgOnInit:boolean = false;
  stateNgDoCheck:boolean = false;
  stateNgAfterContentInit:boolean = false;
  stateNgAfterContentChecked:boolean = false;
  stateNgAfterViewInit:boolean = false;
  stateNgAfterViewChecked:boolean = false;
  stateNgOnDestroy:boolean = false;

  componentContent:boolean = true;
  reloadSpinner:boolean = false;

  reloadComponent() {
    this.componentContent = false;
    this.reloadSpinner = true;

    setTimeout(() => {
      this.componentContent = true;
      this.reloadSpinner = false;
    }, 2000)
  }










  // FOR TEST 
  allToTrue(){
    this.stateConstructor = true;
    this.stateNgOnChanges = true;
    this.stateNgOnInit = true;
    this.stateNgDoCheck = true;
    this.stateNgAfterContentInit = true;
    this.stateNgAfterContentChecked = true;
    this.stateNgAfterViewInit = true;
    this.stateNgAfterViewChecked = true;
    this. stateNgOnDestroy = true;
  }
  allToFalse(){
    this.stateConstructor = false;
    this.stateNgOnChanges = false;
    this.stateNgOnInit = false;
    this.stateNgDoCheck = false;
    this.stateNgAfterContentInit = false;
    this.stateNgAfterContentChecked = false;
    this.stateNgAfterViewInit = false;
    this.stateNgAfterViewChecked = false;
    this. stateNgOnDestroy = false;
  }

}
