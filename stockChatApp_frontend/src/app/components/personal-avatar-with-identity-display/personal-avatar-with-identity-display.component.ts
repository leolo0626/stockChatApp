import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-personal-avatar-with-identity-display',
  templateUrl: './personal-avatar-with-identity-display.component.html',
  styleUrls: ['./personal-avatar-with-identity-display.component.css']
})
export class PersonalAvatarWithIdentityDisplayComponent implements OnInit {

  
  @Input() public avatarFigureSize: number = 80;
  @Input() public person: Person;
  @Input() public createdAt: Date;
  @Input() public isPostIdentifierHidden: boolean = false;


  constructor() { 
    this.createdAt = new Date();
  }

  ngOnInit(): void {
  }

}
