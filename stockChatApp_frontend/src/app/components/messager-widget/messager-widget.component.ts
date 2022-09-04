import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fakePersonDataList } from 'src/app/data/fakePersonData';
import { Message } from './message-chat/message/message.component';

@Component({
  selector: 'app-messager-widget',
  templateUrl: './messager-widget.component.html',
  styleUrls: ['./messager-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagerWidgetComponent implements OnInit {

  public incomingMessageList: Array<Message> = [];
  constructor() { }

  ngOnInit(): void {
    this.incomingMessageList = [
      {
        user: fakePersonDataList[0],
        kind: 'text',
        content: {
          text : 'fsjfhskjfhsakjfhsajfhasdf'
        }, 
        datetime: new Date(),
        isUser: true
       },
       {
        user: fakePersonDataList[1],
        kind: 'text',
        content: {
          text : 'fsjfhskjfhsakjfhsajfhasdfdsfsdfdsfdsfdskfhdsjfhdskjfhsdfhdsjkfashdfa'
        }, 
        datetime: new Date(),
        isUser: false
       },   
    ]
  }


  addChat() {

  }
}
