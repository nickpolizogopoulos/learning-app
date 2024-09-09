import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { getFirebaseEndpoint } from '../http-utilities';

export interface Tools {
  name:string;
  extension:string;
  year:number;
  designer:string;
  logo:string;
  info:string;
  id?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private http:HttpClient,
  ) { }

  private url:string = getFirebaseEndpoint('languages');
  message:string = 'Loading...';

  fetchTools() {
    return this.http
      .get <{[key:string]:Tools}> (this.url)
      .pipe(
        map( responseData => {
          const toolsArray:Tools[] = [];
          for (const key in responseData)
            if (responseData.hasOwnProperty(key))
              toolsArray.push( { ...responseData[key], id:key })
        return toolsArray;
        })
      )
  }

  //* lesson utilities
  // deleteList() {
  //   return this.http.delete(this.url);
  // }


  // postTools():void {
  //   this.http
  //   .post(this.url, 
  //     {
  //       name: 'C++',
  //       extension: '.cpp',
  //       year: 1985,
  //       designer: 'Bjarne Stroustrup',
  //       logo: '../../../assets/images/tools-languages/cpp-logo.png',
  //       info: 'https://en.wikipedia.org/wiki/C%2B%2B'
  //     }
  //   ).subscribe()

  //   this.http
  //   .post(this.url, 
  //     {
  //       name: 'TypeScript',
  //       extension: '.ts',
  //       year: 2012,
  //       designer: 'Microsoft',
  //       logo: '../../../assets/images/tools-languages/typescript-logo.png',
  //       info: 'https://en.wikipedia.org/wiki/TypeScript'
  //     }
  //   ).subscribe()

  // this.http
  //   .post(this.url, 
  //     {
  //       name: 'Go',
  //       extension: '.go',
  //       year: 2009,
  //       designer: 'Ken Thompson',
  //       logo: '../../../assets/images/tools-languages/gopher.png',
  //       info: 'https://en.wikipedia.org/wiki/Go_(programming_language)'
  //     }
  //   ).subscribe()

  //   this.http
  //   .post(this.url, 
  //     {
  //       name: 'Swift',
  //       extension: '.swift',
  //       year: 2014,
  //       designer: 'Apple',
  //       logo: '../../../assets/images/tools-languages/swift-logo.jpeg',
  //       info: 'https://en.wikipedia.org/wiki/Swift_(programming_language)'
  //     }
  //   ).subscribe()

  // }

}
