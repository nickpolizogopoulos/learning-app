import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  logMessage( buttonColor: string ): string {
    return `The ${buttonColor} button is clicked!`
  }

}
