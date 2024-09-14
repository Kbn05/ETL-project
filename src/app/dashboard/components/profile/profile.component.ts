import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {

  @Input() isVisible = false;
  @Output() toggleUserSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  username = 'johndoe';
  userId = '12345';
  fullName = 'John Doe';

  closeSidebar() {
    this.isVisible = false;
    this.toggleUserSidebar.emit();
  }

  closeSession() {
    this.router.navigate(['/login']);
  }
}
