import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() {
    
  }

  logMessage(buttonColor:string) {
    console.log(`The <${buttonColor}> button is triggered`)
  }

}
