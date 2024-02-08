import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Additionals, Pita, Quantity } from './pita.models';
import { PitesService } from './pites.service';

@Component({
  selector: 'app-greek-gyro-pita-order-maker',
  templateUrl: './greek-gyro-pita-order-maker.component.html',
  styles: [``]
})
export class GreekGyroPitaOrderMakerComponent implements OnInit, OnDestroy {

  termsVisible:boolean = false;
  stepOneVisible:boolean = true;
  orderMakerSection:boolean = false;
  @ViewChild('foodForm') form?:NgForm;
  requiredMessage:string = 'This field is required';
  isFetchingPites:boolean = false;
  formVisible:boolean = true;
  loadedPites:Pita[] = [];
  mainAdditionals:Additionals[] = [];
  pitaQuantity:Quantity[] = [];
  
  constructor(
    private pitesService:PitesService
  ) { }
  
  //* Clears Firebase on Component Init
  //* and also adds two default orders.
  ngOnInit():void {
    this.onClearList()
    this.pitesService.addDefaultPites()

    this.mainAdditionals = this.pitesService.additionals;
    this.pitaQuantity = this.pitesService.quantity;
    }
    
  onAgreeClick():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = true;
    this.stepOneVisible = false;
  }

  onStepOneClick():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = false;

    //* This refetches the list.
    //* This is in ngOnInit by default.
    this.onFetchPites()
  }

  onAddPites( pita:Pita ):void {
    this.pitesService.createandStorePita(pita)
      .subscribe( responseData => {
        console.log(responseData)
        this.onFetchPites();
      })

    this.form?.reset()
  }

  onClearList():void {
    this.pitesService.deletePites()
      .subscribe(
        () => {
          this.loadedPites = [];
        })
  }

  onDeletePita() {
    //delete a single pita from the database  
  }

  onFetchPites():void {
    this.isFetchingPites = true;
    this.pitesService.fetchPites().subscribe(
      pites => {
        this.isFetchingPites = false;
        this.loadedPites = pites;
      }
    )
  }

  onShowHideForm():void {
    this.formVisible = !this.formVisible;
  }

  //* Clears Firebase on Component Destruction
  ngOnDestroy():void {
    this.onClearList()
  }

}
