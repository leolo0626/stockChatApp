import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public user: Person;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
