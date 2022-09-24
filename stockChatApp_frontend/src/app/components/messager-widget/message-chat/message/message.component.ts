import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
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
  user:Person;
  kind: T;
  content:U;
  datetime: Date;
  isUser: boolean;
}

type TextMessage = AnyMessage<'text', {text: string}>
type ImageMessage = AnyMessage<'image', {src: string, alt?: string}>

export type Message = TextMessage;