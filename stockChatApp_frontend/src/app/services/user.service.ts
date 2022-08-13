import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Person;

  constructor() { 
    this.user = new Person(
      "Leo Lo", 
      "https://3.bp.blogspot.com/-xT36Kpq_T_E/W1a5CIwueAI/AAAAAAABNjc/nkwOIiInph0FSJ3cpJHdE1Ghu60HX5BfgCLcBGAs/s800/niyakeru_takuramu_ayashii_man.png"
    )
  }

  getUser(): Person {
    return this.user;
  }
}
