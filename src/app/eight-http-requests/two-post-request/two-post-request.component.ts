import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

interface Contact {
  name:string;
  phone:string;
  id?:string;
}

@Component({
  selector: 'app-two-post-request',
  templateUrl: './two-post-request.component.html',
  styles: [``]
})
export class TwoPostRequestComponent implements OnInit {

  url:string = 'https://http-music-albums-default-rtdb.firebaseio.com/contacts.json';
  contacts:Contact[] = [];
  successAlert:boolean = false;
  @ViewChild('form') form?:NgForm;
  spinner:boolean = false;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit():void {
    this.fetchList()
  }

  onSubmit( postData:Contact ) {
    this.http
      .post( this.url, postData )
      .subscribe( () => {
        this.fetchList()
      })

    this.successAlert = true;
    this.form?.reset();
    setTimeout( () => {
      this.successAlert = !this.successAlert
    }, 2000) 
    
  }

  fetchList() {
    this.spinner = true;
    this.http
      .get <{ [key:string]:Contact }> ( this.url )
      .pipe(
        map( responseData => {
          const contacts:Contact[] = [];
          for (let key in responseData)
            if (responseData.hasOwnProperty(key))
              contacts.push( { ...responseData[key], id:key} )
            return contacts;
        })
      )
      .subscribe( contacts => {
          this.spinner = false;
          this.contacts = contacts;
        })
  }

  clearList() {
    this.spinner = true
    this.http
      .delete(this.url)
      .subscribe( () => {
        this.spinner = false;
        this.contacts = []
      });
  }
}
