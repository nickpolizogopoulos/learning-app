import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumProps } from './album.models';

@Component({
  selector: 'app-one-albums-list',
  templateUrl: './one-albums-list.component.html',
  styles: [``]
})
export class OneAlbumsListComponent implements OnInit {

  albums:AlbumProps[] = [];

  infoIsExpanded:boolean = false;
  database:string = 'https://http-music-albums-default-rtdb.firebaseio.com'
  folder:string = '/albums'
  json:string = '.json'
  postUrl:string = this.database + this.folder + this.json;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit():void {
  }

  infoExpand():void {
    this.infoIsExpanded = !this.infoIsExpanded;
  }

  fetchAlbums() {
  }


  postAlbums() {
    this.http.post(this.postUrl,
      {
        name: 'Thriller',
        artist: 'Michael Jackson',
        releaseDate: {
            day: 29,
            month: 'November',
            year: 1982
        },
        genre: 'Pop',
        label: 'Epic',
        infoLink: 'https://en.wikipedia.org/wiki/Thriller_(album)',
    },).subscribe()

    this.http.post(this.postUrl,
    {
        name: 'Experience',
        artist: 'The Prodigy',
        releaseDate: {
            day: 28,
            month: 'September',
            year: 1992
        },
        genre: 'Electronic',
        label: 'XL & Elektra',
        infoLink: 'https://en.wikipedia.org/wiki/Experience_(The_Prodigy_album)',
    },).subscribe()

    this.http.post(this.postUrl,
    {
        name: 'Random Access Memories',
        artist: 'Daft Punk',
        releaseDate: {
            day: 17,
            month: 'May',
            year: 2013
        },
        genre: 'Electronic',
        label: 'Columbia',
        infoLink: 'https://en.wikipedia.org/wiki/Random_Access_Memories',
    },).subscribe()

    this.http.post(this.postUrl,
    {
        name: 'Play',
        artist: 'Moby',
        releaseDate: {
            day: 17,
            month: 'May',
            year: 1999
        },
        genre: 'Electronic',
        label: 'Mute - V2',
        infoLink: 'https://en.wikipedia.org/wiki/Play_(Moby_album)',
    },).subscribe()

    this.http.post(this.postUrl,
    {
        name: 'The Best of Sade',
        artist: 'Sade',
        releaseDate: {
            day: 21,
            month: 'October',
            year: 1994
        },
        genre: 'Various',
        label: 'Epic',
        infoLink: 'https://en.wikipedia.org/wiki/The_Best_of_Sade',
    },).subscribe()
  }

  

}
