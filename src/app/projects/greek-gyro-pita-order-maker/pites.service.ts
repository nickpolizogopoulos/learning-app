import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Additionals, Pita, Quantities } from './pita.models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitesService {

  url:string = 'https://pites-project-default-rtdb.firebaseio.com/pites.json'
  
  additionals:Additionals[] = [
    {
      name: 'potatoes',
      text: 'Potakoes'
    },
    {
      name: 'tomatoes',
      text: 'Tomatoes'
    },
    {
      name: 'onion', 
      text: 'Onion'
    },
    {
      name: 'tzatziki', 
      text: 'Tzatziki'
    },
  ];

  quantities:Quantities[] = [
    {value: '1'},{value: '2'},
    {value: '3'},{value: '4'},
    {value: '5'},{value: '6'},
    {value: '7'},{value: '8'},
    {value: '9'},{value: '10'},
  ];

  constructor(
    private http:HttpClient
  ) { }

  createandStorePita( pita:Pita ):void {
    this.http
      .post <{ [key:string]:Pita }> (this.url, pita)
      .subscribe( responseData => console.log(responseData)
      )
  }

  fetchPites(): Observable<Pita[]> {
    return this.http
      .get <{ [key:string]:Pita }> (this.url)
      .pipe(
        map( responseData => {
          const pitesArray:Pita[] = [];
          for (const key in responseData)
            if (responseData.hasOwnProperty(key)) {
              pitesArray.push( { ...responseData[key], id:key } )
            }
          return pitesArray;
        })
      )
  }

}
