import { 
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormControl, 
  FormGroup, 
  Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-two-reactive-form',
  templateUrl: './two-reactive-form.component.html',
  host: lessonHostClasses
})
export class TwoReactiveFormComponent implements OnInit {

  orderForm!: FormGroup;
  orderDetails: boolean = false;
  alertSuccess: boolean = false;
  requiredField: string = 'This field is required!';
  InvalidField: string = 'Invalid input!';
  invalidEmail: string = `You can't use test@test.com / gr as email.`;
  forbiddenNames: string[] = ['name', 'Name', 'asdf', 'test', 'Test'];
  // forbiddenNumbers:number[] = [0];
  
  detailsData = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    region: '',
    street: '',
    number: 0,
    payment: false,
    notes: []
  }

  ngOnInit(): void {
    const req = Validators.required;

    this.orderForm = new FormGroup({
      'nameReactive': new FormControl(null, [ req, this.forbiddenNamesValidator.bind(this) ]),
      'surname': new FormControl(null, req),
      'emailReactive': new FormControl(null, [
        req,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
      ], this.forbiddenEmails as any),
      
      'phone': new FormControl(null, req),
      'city': new FormControl(null, req),
      'region': new FormControl(null, req),
      'street': new FormControl(null, req),
      'number': new FormControl(null, [
        req, 
        // this.forbiddenNumbersValidator.bind(this), 
        Validators.pattern( /^[1-9]+[0-9]*$/ ),
      ]),
      'checkReactive': new FormControl(null),
      'notes': new FormArray([])
    });

    //Subscriptions to changes in value and status
    //with valueChanges and statusChanges

    // this.orderForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // this.orderForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
  }

  onSubmit(): void {
    this.orderDetails = true;

    if (this.orderForm.valid) {
      this.alertSuccess = true;
      setTimeout(() =>
        this.alertSuccess = false,
        1600
      )
    }
    
    this.detailsData.name = this.orderForm.get('nameReactive')?.value;
    this.detailsData.surname = this.orderForm.get('surname')?.value;
    this.detailsData.email = this.orderForm.get('emailReactive')?.value;
    this.detailsData.phone = this.orderForm.get('phone')?.value;
    this.detailsData.city = this.orderForm.get('city')?.value;
    this.detailsData.region = this.orderForm.get('region')?.value;
    this.detailsData.street = this.orderForm.get('street')?.value;
    this.detailsData.number = this.orderForm.get('number')?.value;
    this.detailsData.payment = this.orderForm.get('checkReactive')?.value;
    // CBA notes now, ill do it later

    this.orderForm.reset();
  }
  
  fillTheForm():void {
    this.orderForm.setValue({
      'nameReactive': 'Nick',
      'surname': 'Polizogopoulos',
      'emailReactive': 'nick@learning-angular.com',
      'phone': 6900000000,
      'city': 'Patras',
      'region': 'Western Greece',
      'street': 'Olinthou',
      'number': 49,
      'checkReactive': true,
      'notes': []
    });
  }

  getControls() {
    const form = (<FormArray>this.orderForm.get('notes'));
    return form.controls;
  }

  onAddNote(): void {
    const control = new FormControl(null);
    const form = (<FormArray>this.orderForm.get('notes'));
    form.push(control);
  }

  onDeleteNote( index: number ): void {
    const form = (<FormArray>this.orderForm.get('notes'));
    form.removeAt(index);
  }

  //-----------------CUSTOM VALIDATORS
  forbiddenNamesValidator( control: FormControl ): {[key:string]:boolean} {

    if (this.forbiddenNames.indexOf(control.value) !== -1)
      return {'nameIsForbidden': true};
    //in case the type doesnt have the null option.
    return null as any;
    //We can also use this:
    // return null!; 
  }

  // forbiddenNumbersValidator(control:FormControl): {[key:string]:boolean} {
  //   if (this.forbiddenNumbers.indexOf(control.value) !== -1){
  //     return {'numberIsForbidden': true};}
  //   return null as any;
  // }

  forbiddenEmails( control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise( (resolve, reject) => {
      // The setTimeout is to simulate the time it takes to resolve.
      // setTimeout(() => {
        if (control.value === 'test@test.com' || control.value === 'test@test.gr')
          resolve({ 'emailIsForbidden': true });
        resolve(null);
      // },1500);
    });
    return promise;
  }

  onCloseDetails(): void {
    this.orderDetails = false;
  }
  
}
