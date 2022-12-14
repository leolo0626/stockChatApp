import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})


export class MessageComponent implements OnInit {

  @Input() public message: Message;

  constructor() { }

  ngOnInit(): void {
  }

}

type Kind = 'text' | 'image';

interface AnyMessage<T extends Kind, U extends object = {}> {
  roomId: string;
  user: User;
  kind: T;
  content: U;
  datetime: Date;
  isUser: boolean;
}

type TextMessage = AnyMessage<'text', { text: string }>
type ImageMessage = AnyMessage<'image', { src: string, alt?: string }>

export type Message = TextMessage;