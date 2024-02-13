import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

interface ReleaseDateProps {
  day:number;
  month:string;
  year:number;
}

interface AlbumProps {
  name:string;
  artist:string;
  releaseDate: ReleaseDateProps,
  genre:string;
  label:string;
  infoLink:string;
  id?: string;
}

@Component({
  selector: 'app-one-get-request',
  // templateUrl: './one-albums-list.component.html',
  template: `
  
    <h4>1. Getting data with the .get( ) method.</h4>
    <span class="lead">Top 5 music albums of all times!</span>
    <span class="addToTestText cursor-pointer user-select-none ms-2" (click)="infoExpand()">[info]</span>
    <div>
      <span *ngIf="infoIsExpanded" class="addToTestText ms-2">According to my Vinyl teacher 
        <a class="inherit nodecor" href="https://analogacademy.gr/artists/takis-niaros/" target="_blank">[ Takis Niaros ].</a>
      </span>
    </div>
    <div class="mt-4 m-2">
      <p *ngIf="albums.length < 1" class="lead">Loading albums...</p>
      <div *ngIf="albums.length < 1" class="spinner-border" role="status"></div>
      <div *ngFor="let album of albums let i = index" class="alert alert-light niceblue rounded-1 p-2" role="alert">
        <div class="lead"><strong>{{i+1}}. </strong><u>{{album.name}}</u> - {{album.artist}}</div>
        <div>Genre: {{album.genre}}, Date: {{album.releaseDate.year}}, 
          <a class="nodecor inherit" href="{{album.infoLink}}" target="_blank">[more info]</a>
        </div>
      </div>
      <!-- * a button to post the albums -->
      <!-- * <button class="ms-2" (click)="postAlbums()">post the albums</button> -->
    </div>

  `,
  styles: [``]
})
export class OneGetRequestComponent implements OnInit {

  infoIsExpanded:boolean = false;
  database:string = 'https://http-music-albums-default-rtdb.firebaseio.com'
  folder:string = '/albums'
  json:string = '.json'
  url:string = this.database + this.folder + this.json;
  albums:AlbumProps[] = [];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit():void {
    this.fetchAlbums()
  }

  infoExpand():void {
    this.infoIsExpanded = !this.infoIsExpanded;
  }

  fetchAlbums() {
    this.http
      .get <{ [key:string]:AlbumProps }> (this.url)
      .pipe(
        map( responseData => {
          const array = [];
          for (const key in responseData){
            if (responseData.hasOwnProperty(key))
            array.push( { ...responseData[key], id: key } )
          }
          return array;
        })
      ).subscribe( posts => this.albums = posts )
  }

  // * a method to post the albums
  // postAlbums() {
  //   this.http.post <{ [key:string]:AlbumProps }> (this.url,
  //     {
  //       name: 'Thriller',
  //       artist: 'Michael Jackson',
  //       releaseDate: {
  //           day: 29,
  //           month: 'November',
  //           year: 1982
  //       },
  //       genre: 'Pop',
  //       label: 'Epic',
  //       infoLink: 'https://en.wikipedia.org/wiki/Thriller_(album)',
  //   },).subscribe()

  //   this.http.post(this.url,
  //   {
  //       name: 'Experience',
  //       artist: 'The Prodigy',
  //       releaseDate: {
  //           day: 28,
  //           month: 'September',
  //           year: 1992
  //       },
  //       genre: 'Electronic',
  //       label: 'XL & Elektra',
  //       infoLink: 'https://en.wikipedia.org/wiki/Experience_(The_Prodigy_album)',
  //   },).subscribe()

  //   this.http.post(this.url,
  //   {
  //       name: 'Random Access Memories',
  //       artist: 'Daft Punk',
  //       releaseDate: {
  //           day: 17,
  //           month: 'May',
  //           year: 2013
  //       },
  //       genre: 'Electronic',
  //       label: 'Columbia',
  //       infoLink: 'https://en.wikipedia.org/wiki/Random_Access_Memories',
  //   },).subscribe()

  //   this.http.post(this.url,
  //   {
  //       name: 'Play',
  //       artist: 'Moby',
  //       releaseDate: {
  //           day: 17,
  //           month: 'May',
  //           year: 1999
  //       },
  //       genre: 'Electronic',
  //       label: 'Mute - V2',
  //       infoLink: 'https://en.wikipedia.org/wiki/Play_(Moby_album)',
  //   },).subscribe()

  //   this.http.post(this.url,
  //   {
  //       name: 'The Best of Sade',
  //       artist: 'Sade',
  //       releaseDate: {
  //           day: 21,
  //           month: 'October',
  //           year: 1994
  //       },
  //       genre: 'Various',
  //       label: 'Epic',
  //       infoLink: 'https://en.wikipedia.org/wiki/The_Best_of_Sade',
  //   },).subscribe()
  // }

  

}
