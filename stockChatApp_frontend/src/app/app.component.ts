import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'stockChatApp_frontend';
  theme$: Observable<string>;
  user?: User;
  constructor(private userService: UserService, private themeService: ThemeService) {
    this.userService.user.subscribe(x => {
      this.user = x;
    });
  }

  ngOnInit() {
    this.theme$ = this.themeService.theme$;
  }
}
