import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';

interface Tools {
  name:string;
  extension:string;
  year:number;
  designer:string;
  logo:string;
  info:string;
}

@Component({
  selector: 'app-four-interceptor',
  templateUrl: './four-interceptor.component.html',
  styles: [`
  
  img {
    filter: grayscale(100%);
  }
  img:hover {
    filter: grayscale(0%);
  }
  
  `]
})
export class FourInterceptorComponent implements OnInit, OnDestroy {

  constructor(
    private http:HttpClient
  ) { }

  isLoading:boolean = false;
  message:string | null = 'Your request is being processed!';
  url:string = 'https://http-interceptor-ed4d8-default-rtdb.firebaseio.com/tools.json';
  toolsList:Tools[] = [

    {
      name: 'C++',
      extension: '.cpp',
      year: 1985,
      designer: 'Bjarne Stroustrup',
      logo: '../../../assets/images/tools-languages/cpp-logo.png',
      info: 'https://en.wikipedia.org/wiki/C%2B%2B'
    },
    {
      name: 'Go',
      extension: '.go',
      year: 2009,
      designer: 'Ken Thompson',
      logo: '../../../assets/images/tools-languages/gopher.png',
      info: 'https://en.wikipedia.org/wiki/Go_(programming_language)'
    },
    {
      name: 'TypeScript',
      extension: '.ts',
      year: 2012,
      designer: 'Microsoft',
      logo: '../../../assets/images/tools-languages/typescript-logo.png',
      info: 'https://en.wikipedia.org/wiki/TypeScript'
    },
    {
      name: 'Swift',
      extension: '.swift',
      year: 2014,
      designer: 'Apple',
      logo: '../../../assets/images/tools-languages/swift-logo.jpeg',
      info: 'https://en.wikipedia.org/wiki/Swift_(programming_language)'
    }

  ];


  ngOnInit():void {
    this.fetchTools()
  }

  fetchTools():void {
    this.isLoading = true;

    this.http
      .get(this.url)
      .pipe(
        // map()
      )
      .subscribe(
        () => {
          setTimeout(() => {
            this.isLoading = false;

          }, 2500)
        }
      )
  }

  deleteList():void {
    this.http
      .delete(this.url)
      .subscribe(
        () => this.toolsList = []
      )
  }

  postTools():void {
      this.http
      .post(this.url, 
        {
          name: 'C++',
          extension: '.cpp',
          year: 1985,
          designer: 'Bjarne Stroustrup',
          logo: '../../../assets/images/tools-languages/cpp-logo.png',
          info: 'https://en.wikipedia.org/wiki/C%2B%2B'
        }
      ).subscribe()

      this.http
      .post(this.url, 
        {
          name: 'Go',
          extension: '.go',
          year: 2009,
          designer: 'Ken Thompson',
          logo: '../../../assets/images/tools-languages/gopher.png',
          info: 'https://en.wikipedia.org/wiki/Go_(programming_language)'
        }
      ).subscribe()

    this.http
      .post(this.url, 
        {
          name: 'TypeScript',
          extension: '.ts',
          year: 2012,
          designer: 'Brendan Eich',
          logo: '../../../assets/images/tools-languages/typescript-logo.png',
          info: 'https://en.wikipedia.org/wiki/TypeScript'
        }
      ).subscribe()

      this.http
      .post(this.url, 
        {
          name: 'Swift',
          extension: '.swift',
          year: 2014,
          designer: 'Various Engineers',
          logo: '../../../assets/images/tools-languages/swift-logo.png',
          info: 'https://en.wikipedia.org/wiki/Swift_(programming_language)'
        }
      ).subscribe()

  }

  ngOnDestroy():void {
    this.deleteList()
  }

}
