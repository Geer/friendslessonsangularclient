import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageErrorService {
  messages: string = "";

  add(message: string) {
    this.messages = message;
  }

  clear() {
    this.messages = "";
  }
}