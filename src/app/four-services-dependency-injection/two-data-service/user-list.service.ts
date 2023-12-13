import { EventEmitter, Injectable } from '@angular/core';

export interface UserProps {
  name:string;
  city:string;
  gender:string;
  language:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {


  usersList:UserProps[] = [
    {
      name: 'Nick',
      city: 'Patras',
      gender: 'Male',
      language: 'Greek'
    },
    { 
      name: 'Jelly',
      city: 'Athens',
      gender: 'Female',
      language: 'English'
    },

  ]

  userDeleted = new EventEmitter<string>();

  addUser(
    name:string,
    city:string,
    gender:string,
    language:string
    ):void {
      this.usersList.push(
        {
          name: name,
          city: city,
          gender: gender,
          language: language
        }
      )
    console.log(`User "${name}" has been added to the list`)
  }

  usersNumber():number {
    return this.usersList.length;
  }

  removeUser( index:number ):void {
    this.usersList.splice(index, 1); 
  }



}
