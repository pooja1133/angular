import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
      return[
        {name:"Pooja Goyal",email:"pooja.goyal@netsolutions.com",price:20},
        {name:"Test User",email:"testUser@netsolutions.com",price:30},
        {name:"test User 2",email:"testUser2@gmail.com",price:50}
      ];
  }
}
