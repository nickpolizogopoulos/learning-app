import { Component } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrl: '../projects.scss'
})
export class FizzBuzzComponent {

  optionA: boolean = false;
  optionB: boolean = false;
  optionC: boolean = false;
  optionD: boolean = false;

  rangeOfNumbers: number = 250;
  optionAinput?: number;
  optionCto?: string;
  optionCfrom?: string;

  calculating: boolean = false;
  alert: boolean = false;
  spinnerLoading: boolean = false;

  result?: string;
  fizzNumbers: number[] = [];
  buzzNumbers: number[] = [];
  fizzBuzzNumbers: number[] = [];
  regularNumbers: number[] = [];
  randomNumber?: number;

  private emptyArrays(): void {
    this.fizzBuzzNumbers = [];
    this.fizzNumbers = [];
    this.buzzNumbers = [];
    this.regularNumbers = [];
  }

  onOptionASelect(): void {
    this.result = undefined;
    this.alert = false;
    this.optionA = true;
    this.optionB = false;
    this.optionC = false;
    this.optionD = false;
    this.onReset();
  }

  onOptionBSelect(): void {
    this.result = undefined;
    this.alert = false;
    this.optionA = false;
    this.optionB = true;
    this.optionC = false;
    this.optionD = false;
    this.onReset();
  }

  onOptionCSelect(): void {
    this.result = undefined;
    this.alert = false;
    this.optionA = false;
    this.optionB = false;
    this.optionC = true;
    this.optionD = false;
    this.onReset();
  }

  onOptionDSelect(): void {
    this.result = undefined;
    this.alert = false;
    this.optionA = false;
    this.optionB = false;
    this.optionC = false;
    this.optionD = true;
    this.onReset();
  }

  rng(): void {
    this.spinnerLoading = true;
    this.randomNumber = undefined;
    this.result = undefined;
    setTimeout(() => {
        this.spinnerLoading = false;
        this.randomNumber = Math.floor(Math.random() * 5000)
      },
      500
    ); 
  }

  private fizzBuzzChecker( value: number ): void {
    if (value % 3 === 0 && value % 5 === 0)
      this.result = `The number ${value} is FizzBuzz!`;
    else if (value % 3 === 0)
      this.result = `The number ${value} is Fizz!`;
    else if (value % 5 === 0)
      this.result = `The number ${value} is Buzz!`;
    else 
      this.result = `The number ${value} is neither Fizz, Buzz or FizzBuzz.`;
  }

  private rangeChecker( firstValue: number, secondValue: number ): void {
    for (let i = firstValue; i <= secondValue; i++)
      if (i % 3 === 0 && i % 5 === 0)
        this.fizzBuzzNumbers.push(i);
      else if (i % 3 === 0)
        this.fizzNumbers.push(i);
      else if (i % 5 === 0)
        this.buzzNumbers.push(i);
      else
        this.regularNumbers.push(i);
  }

  onRun(): void {
    this.emptyArrays();
    this.alert = false;

    if (this.optionA) {
      if (typeof this.optionAinput !== 'number') {
        this.alert = true;
        setTimeout(() =>
          this.alert = false,
          2600
        );
        return;
      }
      this.fizzBuzzChecker(this.optionAinput);
    }

    if (this.optionB)
      this.rangeChecker(1, this.rangeOfNumbers);
    
    
    if (this.optionC) {
      if (typeof this.optionCfrom !== 'number' || typeof this.optionCto !== 'number') {
        this.alert = true;
        setTimeout(() =>
          this.alert = false,
          2600
        );
        return
      }
      this.rangeChecker(this.optionCfrom, this.optionCto);
    }

    if (this.optionD) 
      this.fizzBuzzChecker(this.randomNumber as number);

  }

  onReset(): void {
    this.alert = false;
    this.result = undefined;
    this.optionAinput = undefined;
    this.optionCto = undefined;
    this.optionCfrom = undefined;
    this.randomNumber = undefined;
    this.spinnerLoading = false;
    this.emptyArrays();
  }
}