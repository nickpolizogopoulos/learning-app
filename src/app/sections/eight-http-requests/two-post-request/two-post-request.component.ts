import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

type Contact = {
  name:string;
  phone:string;
  id?:string;
}

@Component({
  selector: 'app-two-post-request',
  templateUrl: './two-post-request.component.html',
  styles: ` 
  
    .tableRow {
      border-bottom: 1px solid red; 
    }

  `,
  host: lessonsHostClasses
})
export class TwoPostRequestComponent implements OnInit {

  url: string = 'https://http-contacts-default-rtdb.firebaseio.com/contacts.json';
  dummyText: boolean = true;

  contacts: Contact[] = [];
  successAlert: boolean = false;
  @ViewChild('form') form?: NgForm;
  spinner: boolean = false;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.clearList();
  }

  onSubmit( postData: Contact ): void {
    this.http
      .post( this.url, postData )
      .subscribe({
        next: () => this.fetchList()
      });

    this.successAlert = true;
    this.form?.reset();
    setTimeout(() =>
      this.successAlert = !this.successAlert,
      2000
    );
    
  }

  fetchList(): void {
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
      .subscribe({
        next: contacts => {
          this.spinner = false;
          this.contacts = contacts;
        }
      })
  }

  clearList(): void {
    this.spinner = true;
    this.http
      .delete(this.url)
      .subscribe({
        next: () => {
          this.fetchList();
          this.spinner = false;
          this.contacts = []
        }
      });
  }

  onDeleteContact( id: Contact['id'] ): void {
    this.http
      .delete ('https://http-contacts-default-rtdb.firebaseio.com/contacts/' + id + '.json')
      .subscribe({
        next: () => this.fetchList()
      });
  }

  addFourDummyContacts(): void {
    this.dummyText = false;
    this.http.post(this.url, 
      {
        name: 'Nick P.',
        phone: '+30 6900000007'
      }
      )
      .subscribe({
        next: () => this.fetchList()
      });

    this.http.post(this.url, 
      {
        name: 'Jelly M.',
        phone: '+30 6900000004'
      }
      )
      .subscribe({
        next: () => this.fetchList()
      });

    this.http.post(this.url, 
      {
        name: 'Margo H.',
        phone: '+30 6900000000'
      }
      )
      .subscribe({
        next: () => this.fetchList()
      });

    this.http.post(this.url, 
      {
        name: 'Alice Q.',
        phone: '+30 6900000000'
      }
      )
      .subscribe({
        next: () => this.fetchList()
      });
  }
}
