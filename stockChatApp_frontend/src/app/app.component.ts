import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stockChatApp_frontend';
  user?: User;
  constructor(private userService: UserService) {
    this.userService.user.subscribe(x => {
      this.user = x;
    });
  }
}
