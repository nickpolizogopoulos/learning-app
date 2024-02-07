import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pita } from './pita.,model';
import { map } from 'rxjs';

@Component({
  selector: 'app-greek-gyro-pita-order-maker',
  templateUrl: './greek-gyro-pita-order-maker.component.html',
  styles: [``]
})
export class GreekGyroPitaOrderMakerComponent implements OnInit {


  termsVisible:boolean = false;
  orderMakerSection:boolean = false;
  requiredMessage:string = 'This field is required';
  @ViewChild('foodForm') form?:NgForm;
  url:string = 'https://pites-project-default-rtdb.firebaseio.com/pites.json'
  isFetchingOrder:boolean = false;
  loadedPites:Pita[] = [];
  formVisible:boolean = true;

  mainAdditionals = [
    {
      name: 'potatoes',
      text: 'Potakoes'
    },
    {
      name: 'tomatoes',
      text: 'Tomatoes'
    },
    {
      name: 'onion', 
      text: 'Onion'
    },
    {
      name: 'tzatziki', 
      text: 'Tzatziki'
    },
  ];

  quantities = [
    {value: '1'},{value: '2'},{value: '3'},
    {value: '4'},{value: '5'},{value: '6'},
    {value: '7'},{value: '8'},{value: '9'},{value: '10'},
  ];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit():void {
    this.fetchPites()
  }

  onAgreeClick():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = true;
  }

  onStepOneClick():void {
    this.termsVisible = !this.termsVisible;
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
