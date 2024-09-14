import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: WebSocket;
  private messagesSubject = new Subject<string>();

  constructor() {
    this.socket = new WebSocket('ws://localhost:4000');

    this.socket.onmessage = (event) => {
      this.messagesSubject.next(event.data);
    };

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  sendMessage(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
  }

  getMessages(): Observable<string> {
    return this.messagesSubject.asObservable();
  }
}

