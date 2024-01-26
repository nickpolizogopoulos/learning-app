import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl, 
  FormGroup, 
  Validators } from '@angular/forms';

type ValidatorReturnType = { [key:string]:boolean };

@Component({
  selector: 'app-two-reactive-form',
  templateUrl: './two-reactive-form.component.html',
  styles: [`

    .no-pointer {
      cursor: default;
    }
  `]
})
export class TwoReactiveFormComponent implements OnInit {

  orderDetails:boolean = false;
  alertSuccess:boolean = false;
  requiredField:string = 'This field is required';
  orderForm!:FormGroup;
  forbiddenNames:string[] = ['name'];
  forbiddenNumbers:number[] = [0];

  ngOnInit():void {
    const req = Validators.required;

    this.orderForm = new FormGroup({
      'nameReactive': new FormControl(null, [ req, this.forbiddenNamesValidator.bind(this) ]),
      'surname': new FormControl(null, req),
      'emailReactive': new FormControl(null, [req, Validators.email]),
      'phone': new FormControl(null, req),
      'city': new FormControl(null, req),
      'region': new FormControl(null, req),
      'street': new FormControl(null, req),
      'number': new FormControl(null, [
        req, 
        this.forbiddenNumbersValidator.bind(this), 
        this.nonNegative.bind(this) 
      ]),
      'checkReactive': new FormControl(null),
      'notes': new FormArray([])
    })
  }

  onSubmit():void {
    if (this.orderForm.valid) {
      this.alertSuccess = true;
      setTimeout(() => {
        this.alertSuccess = false;
      }, 1600)
    }
    
    console.log(this.orderForm.value);
    console.log('Valid: ' + this.orderForm.valid);
  }
  
  fillTheForm():void {
  }

  getControls() {
    const form = (<FormArray>this.orderForm.get('notes'))
    return form.controls;
  }

  onAddNote():void {
    const control = new FormControl(null);
    const form = (<FormArray>this.orderForm.get('notes'));
    form.push(control);
  }

  onDeleteNote(index:number):void {
    const form = (<FormArray>this.orderForm.get('notes'))
    form.removeAt(index);
  }

  onCloseDetails():void {
    this.orderDetails = false;
  }

  //-----------------CUSTOM VALIDATORS
  forbiddenNamesValidator(control:FormControl): ValidatorReturnType {
    if (this.forbiddenNames.indexOf(control.value) !== -1)
    return {'nameIsForbidden': true};
    //in case our type doesnt have the null option.
    return null as any;
    //We can also use this:
    // return null!; 
  }

  forbiddenNumbersValidator(control:FormControl): ValidatorReturnType {
    if (this.forbiddenNumbers.indexOf(control.value) !== -1)
      return {'numberIsForbidden': true};
    return null as any;
  }

  nonNegative(control:FormControl): ValidatorReturnType {
    if (Number(control.value) < 0)
      return {nonZero: true};
    return null as any;
  }
}
