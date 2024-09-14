import { Component } from '@angular/core';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentComponent } from "./components/content/content.component";
import { NgClass } from '@angular/common';
import { ProfileComponent } from "./components/profile/profile.component";
import { WebsocketService } from './/services/websocket/websocket.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div *ngFor="let message of messages">
      {{ message }}
    </div>`,
  imports: [TopbarComponent, SidebarComponent, ContentComponent, NgClass, ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  isUserSidebarVisible = false;
  selectedVariable: string = '';
  messages: string[] = [];
  message: string = '';

  constructor(private websocketService: WebsocketService) {}

  onVariableSelected(variableId: string) {
    this.selectedVariable = variableId;
    console.log(this.selectedVariable);
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleUserSidebar() {
    this.isUserSidebarVisible = !this.isUserSidebarVisible;
  }

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    this.websocketService.sendMessage(this.message);
    this.message = '';
  }
}
