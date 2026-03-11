import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 @Output() toggleSidebarEvent = new EventEmitter<void>();
 @Output() closeSidebarEvent = new EventEmitter<void>(); // nouvel event

  onHamburgerClick() {
    this.toggleSidebarEvent.emit();
  }
  onNavLinkClick() {
    this.closeSidebarEvent.emit(); // ferme la sidebar quand on clique sur un lien
  }
}
