import { Component } from '@angular/core';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentComponent } from "./components/content/content.component";
import { NgClass } from '@angular/common';
import { ProfileComponent } from "./components/profile/profile.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, ContentComponent, NgClass, ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  isUserSidebarVisible = false;
  selectedVariable: string = '';

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
}
