import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: String;

  constructor( private chat: ChatService) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.message);

  }

}
