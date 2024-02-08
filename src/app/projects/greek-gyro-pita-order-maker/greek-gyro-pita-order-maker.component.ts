import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Additionals, Pita, Quantity } from './pita.models';
import { PitesService } from './pites.service';

@Component({
  selector: 'app-greek-gyro-pita-order-maker',
  templateUrl: './greek-gyro-pita-order-maker.component.html',
  styles: [` .btn-close { padding: 32px; }`]
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
  ngOnInit():void {
    this.onClearList()
    this.mainAdditionals = this.pitesService.additionals;
    this.pitaQuantity = this.pitesService.quantity;
    this.pitesService.addDummyPites()
    }
    
  onAgreeClick():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = true;
    this.stepOneVisible = false;
  }

  onStepOneClick():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = false;

    //* Fetches the list.
    this.fetchPitesList()
  }

  onAddPites( pita:Pita ):void {
    this.pitesService.createAndStorePita(pita)
      .subscribe( () => {
        this.fetchPitesList();
      })
    this.form?.reset()
  }

  onClearList():void {
    this.pitesService.deletePitesList()
      .subscribe(
        () => {
          this.loadedPites = [];
        })
  }

  onDeletePita( id:Pita['id'] ) { 
    this.pitesService.onDeleteSinglePita(id as any)
      .subscribe(() => {
        this.loadedPites.splice(1, id as any)
        this.fetchPitesList()
      }
    )
  }

  fetchPitesList():void {
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
