import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() {
    
  }

  logMessage(buttonColor:string):string {
    console.log(`The ${buttonColor} button is clicked!`)
    return `The ${buttonColor} button is clicked!`
  }

}
