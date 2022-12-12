import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-personal-avatar-with-identity-display',
  templateUrl: './personal-avatar-with-identity-display.component.html',
  styleUrls: ['./personal-avatar-with-identity-display.component.css']
})
export class PersonalAvatarWithIdentityDisplayComponent implements OnInit {

  
  @Input() public avatarFigureSize: number = 80;
  @Input() public user: User;
  @Input() public createdAt: Date;
  @Input() public isPostIdentifierHidden: boolean = false;


  constructor() { 
    this.createdAt = new Date();
  }

  ngOnInit(): void {
  }

}
