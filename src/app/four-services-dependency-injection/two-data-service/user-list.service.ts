import { Injectable } from '@angular/core';

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

  constructor() {}

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

  addAccount(
    name:string,
    city:string,
    gender:string,
    language:string
    ) {
      this.usersList.push(
        {
          name: name,
          city: city,
          gender: gender,
          language: language
        }
      )
  }

  usersNumber():number {
    return this.usersList.length;
  }

}
