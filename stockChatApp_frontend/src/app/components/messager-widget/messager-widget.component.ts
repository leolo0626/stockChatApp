import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fakePersonDataList } from 'src/app/data/fakePersonData';
import { Message } from './message-chat/message/message.component';
import { CreateChatRoomDialog } from '../dialog/create-chat-room-dialog/create-chat-room-dialog.component';

@Component({
  selector: 'app-messager-widget',
  templateUrl: './messager-widget.component.html',
  styleUrls: ['./messager-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagerWidgetComponent implements OnInit {

  isChat: boolean = false;
  curChatRoom: any = {}

  public incomingMessageList: Array<Message> = [];
  constructor(public dialog: MatDialog) { }

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


  openCreateChatRoomDialog() {
    //open dialog and find the person to chat
    const dialogRef = this.dialog.open(CreateChatRoomDialog, {
      height: '400px',
      width: '400px'
    })
  }

  openChatRoom(msg: any) {
    // MessengerService.loadMessageFromId();
    this.isChat = true;
    this.curChatRoom = { name: msg.user.username , avatar: msg.user.userProfile.avatar }
  }

  goBackMessageList() {
    this.isChat = false;
  }

  
}
