import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-avatar-with-identity-display',
  templateUrl: './personal-avatar-with-identity-display.component.html',
  styleUrls: ['./personal-avatar-with-identity-display.component.css']
})
export class PersonalAvatarWithIdentityDisplayComponent implements OnInit {

  
  @Input() public avatarFigureSize: number = 80;
  constructor() { }

  ngOnInit(): void {
  }

}
