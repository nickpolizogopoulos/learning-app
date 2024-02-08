import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Additionals, Pita, Quantity } from './pita.models';
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

  quantity:Quantity[] = [
    {value: '1'},{value: '2'},
    {value: '3'},{value: '4'},
    {value: '5'},{value: '6'},
    {value: '7'},{value: '8'},
    {value: '9'},{value: '10'},
  ];

  constructor(
    private http:HttpClient
  ) { }

  createandStorePita( pita:Pita ) {
    return this.http
      .post <{ [key:string]:Pita }> (this.url, pita)
  }

  deletePites() {
    return this.http
      .delete(this.url)
  }

  fetchPites(): Observable<Pita[]> {
    return this.http
      .get <{ [key:string]:Pita }> (this.url)
      .pipe( map( 
        responseData => {
          const pitesArray:Pita[] = [];
          for (const key in responseData)
            if (responseData.hasOwnProperty(key)) {
              pitesArray.push( { ...responseData[key], id:key } )
            }
          return pitesArray;
        })
      )
  }


  addDefaultPites():void {
    this.http
      .post <{ [key:string]:Pita }> (this.url, 
        {
          name: 'Nick',
          quantity: 2,
          mainIngredient:'Gyro Pork',
          potatoes: true,
          tomatoes: true,
          onion: false,
          tzatziki: false,
          sauce: 'Yellow sauce (Mustard - Mayonnaise mix)',
          extras: 'Paprika'
        }
        ).subscribe(
          response => console.log(response));

    this.http
    .post <{ [key:string]:Pita }> (this.url, 
      {
        name: 'Jelly',
        quantity: 1,
        mainIngredient:'Gyro Chicken',
        potatoes: true,
        tomatoes: false,
        onion: false,
        tzatziki: false,
        sauce: 'Red sauce (Ketchup - Mayonnaise mix)',
      }
      ).subscribe(
        response => console.log(response));
  }

}
