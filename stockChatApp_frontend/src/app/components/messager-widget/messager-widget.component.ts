import { ParseSourceFile } from '@angular/compiler';
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

  isChat: boolean = false;
  curChatRoom: any = {}

  public incomingMessageList: Array<Message> = [];
  constructor() { }

  ngOnInit(): void {
    this.incomingMessageList = [
      {
        roomId: '12345',
        user: fakePersonDataList[0],
        kind: 'text',
        content: {
          text : 'fsjfhskjfhsakjfhsajfhasdf'
        }, 
        datetime: new Date(),
        isUser: true
       },
       {
        roomId: 'abc',
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


  addChatRoom() {
    //open dialog and find the person to chat
  }

  openChatRoom(msg: any) {
    // MessengerService.loadMessageFromId();
    this.isChat = true;
    this.curChatRoom = { name: msg.user.name , avatar: msg.user.avatar }
    console.log(msg);
  }

  goBackMessageList() {
    this.isChat = false;
  }

  
}
