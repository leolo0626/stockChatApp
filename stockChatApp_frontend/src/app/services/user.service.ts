import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { fakeUserDataList } from '../data/fakePersonData';
declare var require: any;

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

  getUser(): User {
    return fakeUserDataList[0];
  }

  saveProfilePic(profilePic: string) {
    
  }

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post<User>(`${UserService.USERAPI}/login`, formData).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        this.router.navigate(['/home']); // may have better solution
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
