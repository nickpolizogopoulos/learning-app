import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Additionals, Pita, Quantity } from './pita.models';
import { PitesService } from './pites.service';

@Component({
  selector: 'app-greek-gyro-pita-order-maker',
  templateUrl: './greek-gyro-pita-order-maker.component.html',
  styles: [` 

    .btn-close { 
      padding: 32px;
    }`

  ],
  styleUrls: ['../projects.css']
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
    }

  onStartHere():void {
    this.termsVisible = !this.termsVisible;
  }

  onAgree():void {
    this.termsVisible = !this.termsVisible;
    this.orderMakerSection = true;
    this.stepOneVisible = false;
  }

  onShowHideForm():void {
    this.formVisible = !this.formVisible;
  }

  onAddToList( pita:Pita ):void {
    this.pitesService.createAndStorePita(pita)
      .subscribe( () => {
        this.fetchPitesList();
      })
    this.form?.reset()
  }

  onClearList():void {
    this.isFetchingPites = true;
    this.pitesService.deletePitesList()
      .subscribe(
        () => {
          this.isFetchingPites = false;
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

  addFourDummyPites() {
    this.isFetchingPites = true;
    this.pitesService.addDummyPites()

    //* fetch doesn't work at once, 
    //* so I leave 1,2 seconds to pass
    //* with the setTimeout function.

    setTimeout(() => {
      this.fetchPitesList()
    }, 1200);
  }


  //* Clears Firebase on Component Destruction
  ngOnDestroy():void {
    this.onClearList()
  }

}
