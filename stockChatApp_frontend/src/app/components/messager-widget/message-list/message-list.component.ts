import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message-chat/message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() public messages : Array<Message> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
