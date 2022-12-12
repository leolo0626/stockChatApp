import { Component, ElementRef, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Message } from './message/message.component';
import { fakeUserDataList } from 'src/app/data/fakePersonData';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.css']
})
export class MessageChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private chatContainer: ElementRef;
  @ViewChild('chatInput') private chatInput: ElementRef;

  public user: User;
  public messageList: Array<Message> = [];
  public messageInput: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.messageList = [
      {
        roomId: 'abc',
        user: fakeUserDataList[0],
        kind: 'text',
        content: {
          text: 'fsjfhskjfhsakjfhsajfhasdf'
        },
        datetime: new Date(),
        isUser: true
      },
      {
        roomId: 'abc',
        user: fakeUserDataList[1],
        kind: 'text',
        content: {
          text: 'fsjfhskjfhsakjfhsajfhasdfdsfsdfdsfdsfdskfhdsjfhdskjfhsdfhdsjkfashdfa'
        },
        datetime: new Date(),
        isUser: false
      },
      {
        roomId: 'abc',
        user: fakeUserDataList[0],
        kind: 'text',
        content: {
          text: 'fsjfhskjfhsakjfhsajfhasdfsfsdhfsjdkfhsdkjfhsdaifhsdakfhsdafashasdflh'
        },
        datetime: new Date(),
        isUser: true
      },
      {
        roomId: 'abc',
        user: fakeUserDataList[1],
        kind: 'text',
        content: {
          text: 'fsjfhskjfhsakjfhsajfhasdfsfsdhfsjdkfhsdkjfhsdaifhsdakfhsdafashasdflh'
        },
        datetime: new Date(),
        isUser: false
      }
    ]
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }



  onMessageInputChange(val: any) {
    this.messageInput = val.innerHTML;
    console.log(this.messageInput);
  }

  onMessageSend() {
    this.messageList.push({
      roomId: 'abc',
      user: fakeUserDataList[0],
      kind: 'text',
      content: {
        text: this.messageInput
      },
      datetime: new Date(),
      isUser: true // this is not suitable
    })
    this.messageInput = "";
    this.chatInput.nativeElement.innerHTML = "";
    return false; // it will disable shift + enter for next line in contentible div
  }


}
