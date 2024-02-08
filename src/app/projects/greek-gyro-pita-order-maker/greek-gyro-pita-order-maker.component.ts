import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Additionals, Pita, Quantities } from './pita.models';
import { PitesService } from './pites.service';

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
  isFetchingPites:boolean = false;
  loadedPites:Pita[] = [];
  formVisible:boolean = true;
  
  mainAdditionals:Additionals[] = [];
  quantities:Quantities[] = [];
  
  constructor(
    private pitesService:PitesService
  ) { }
  
  ngOnInit():void {
    this.isFetchingPites = true;
    this.pitesService.fetchPites().subscribe(
      pites => {
        this.isFetchingPites = false;
        this.loadedPites = pites;
      }
      )
      this.mainAdditionals = this.pitesService.additionals;
      this.quantities = this.pitesService.quantities;
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
    this.pitesService.createandStorePita(pita)
    this.form?.reset()
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

  onClearList():void {
    //code
  }

  onShowHideForm():void {
    this.formVisible = !this.formVisible;
  }

}
