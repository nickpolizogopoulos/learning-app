import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Additionals, Pita, Quantity } from './pita.models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitesService {

  database:string = 'https://pites-project-default-rtdb.firebaseio.com';
  folder:string = '/pites'
  json:string = '.json';

  url:string = this.database + this.folder + this.json;

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
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '10'},
  ];

  constructor(
    private http:HttpClient
  ) { }

  createAndStorePita( pita:Pita ) {
    return this.http
      .post <{ [key:string]:Pita }> (this.url, pita)
  }

  deletePitesList() {
    return this.http
      .delete(this.url)
  }

  onDeleteSinglePita( id:Pita ) {
    return this.http
      .delete( this.database + this.folder + '/' + id + this.json);
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

  addDummyPites():void {
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
          extras: 'Sweet Paprika'
        }
        ).subscribe();

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
      ).subscribe();

    this.http
    .post <{ [key:string]:Pita }> (this.url, 
      {
        name: 'Margo',
        quantity: 1,
        mainIngredient:'Gyro Pork',
        potatoes: true,
        tomatoes: true,
        onion: false,
        tzatziki: false,
        sauce: 'Mustard - Ketchup mix',
        extras: `High King's Fillorian Seasonings`
      }
      ).subscribe();
  }

}
