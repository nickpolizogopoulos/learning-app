import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pita } from './pita.,model';
import { map } from 'rxjs';

@Component({
  selector: 'app-greek-souvlaki-pos',
  templateUrl: './greek-souvlaki-pos.component.html',
  styleUrls: ['./greek-souvlaki-pos.component.css']
})
export class GreekSouvlakiPosComponent implements OnInit {


  explanation:boolean = false;
  orderMakerSection:boolean = false;
  requiredMessage:string = 'This field is required';
  @ViewChild('foodForm') form?:NgForm;
  url:string = 'https://pites-project-default-rtdb.firebaseio.com/pites.json'
  isFetchingOrder:boolean = false;
  loadedPites:Pita[] = [];
  formVisible:boolean = true;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit():void {
    this.fetchPites()
  }

  onAgreeClick():void {
    this.explanation = !this.explanation;
    this.orderMakerSection = true;
  }

  onStepOneClick():void {
    this.explanation = !this.explanation;
    this.orderMakerSection = false;
  }

  onAddPites( pita:Pita ):void {
    this.http
      .post <{ [key:string]:Pita }> (this.url, pita)
      .subscribe( responseData => console.log(responseData) ) 

    this.form?.reset()
  }

  onFetchPites():void {
    this.fetchPites()
  }


  private fetchPites():void {
    this.isFetchingOrder = true;
    this.http
      .get <{ [key:string]:Pita }> (this.url)
      .pipe(
        map( responseData => {
          const pitesArray:Pita[] = [];
          for (const key in responseData)
            if (responseData.hasOwnProperty(key)) {
              pitesArray.push( { ...responseData[key], id:key } )
            }
          return pitesArray;
        })
      )
      .subscribe( pites => {
        this.loadedPites = pites;
        this.isFetchingOrder = false;
      })
  }

  onClearList():void {
    //code
  }

  onShowHideForm():void {
    this.formVisible = !this.formVisible;
  }

}
