import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ThemeService {
  private _theme = new BehaviorSubject<string>('light-theme');
  theme$ = this._theme.asObservable();

  setDarkTheme(isDarkTheme: boolean): void {
    if (isDarkTheme) {
      this._theme.next('dark-theme');
      return
    }
    this._theme.next('light-theme');
  }
}