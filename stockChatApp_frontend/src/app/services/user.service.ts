import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Roles } from '../enumCollections/enumCollections';
import { Person } from '../model/person';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static USERAPI: string = '/api/user'

  private userSubject: BehaviorSubject<User|undefined>;
  public user: Observable<User|undefined>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User|undefined>(localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user')|| '{}') : undefined);
    this.user = this.userSubject.asObservable();
  }

  getUser(): Person {
    return new Person(
      '1',
      "Leo Lo",
      "https://3.bp.blogspot.com/-xT36Kpq_T_E/W1a5CIwueAI/AAAAAAABNjc/nkwOIiInph0FSJ3cpJHdE1Ghu60HX5BfgCLcBGAs/s800/niyakeru_takuramu_ayashii_man.png",
    );
  }

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post<User>(`${UserService.USERAPI}/login`, formData).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject.next(undefined);
    this.router.navigate(['/login'])
  }

  register(user: User) {
    return this.http.post(`${UserService.USERAPI}/register`, user);
  }
}
