import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl, 
  FormGroup, 
  Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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

  orderForm!:FormGroup;
  orderDetails:boolean = false;
  alertSuccess:boolean = false;
  requiredField:string = 'This field is required!';
  InvalidField:string = 'Invalid input!'
  InvalidEmail:string = 'Please provide a valid email!'
  forbiddenNames:string[] = ['name', 'Name', 'asdf', 'test', 'Test'];
  forbiddenNumbers:number[] = [0];

  ngOnInit():void {
    const req = Validators.required;

    this.orderForm = new FormGroup({
      'nameReactive': new FormControl(null, [ req, this.forbiddenNamesValidator.bind(this) ]),
      'surname': new FormControl(null, req),
      // * line 39 breaks the alert "thank you" message 
      'emailReactive': new FormControl(null, [req, Validators.email], this.forbiddenEmails as any),
      // 'emailReactive': new FormControl(null, [req, Validators.email]),
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

    // this.orderForm.valueChanges.subscribe(
    //   (value) => {console.log(value)}
    // );
    this.orderForm.statusChanges.subscribe(
      (status) => {console.log(status)}
    );
  }

  onSubmit():void {
    if (this.orderForm.valid) {
      this.alertSuccess = true;
      setTimeout(() => {
        this.alertSuccess = false;
      }, 1600)
    }
    this.orderForm.reset()

    // SEE THE ORDER DERAILS BELOW THE FORM 
    // WHEN I SUBMIT IT LIKE THE FIRST FORM


    //FIX THE SUBMIT BUTTON TO BE DISABLED
    //IF THE FORM IS INVALID
    
    console.log(this.orderForm);
    // console.log(this.orderForm.value);
    // console.log('Valid: ' + this.orderForm.valid);
  }
  
  fillTheForm():void {
    this.orderForm.setValue({
      'nameReactive': 'Nick',
      'surname': 'Polizogopoulos',
      'emailReactive': 'nick.polizogopoulos@domain.com',
      'phone': 6900000000,
      'city': 'Patras',
      'region': 'Peloponnese',
      'street': 'Somewhere',
      'number': 49,
      'checkReactive': true,
      'notes': []
    })
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

  forbiddenEmails(control:FormControl): Promise<any> | Observable<any> {
    const promise = new Promise( (resolve, reject) => {
      // We add setTimeout to simulate the time it takes to resolve
      // in a case of a server response but it breaks the alert message.
      // setTimeout(() => {
        if (control.value === 'test@test.com')
          resolve({ 'emailIsForbidden': true });
        resolve(null);
      // },1500);
    });
    return promise;
  }
}
