import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  
constructor(private router: Router) {}
 @Output() toggleSidebarEvent = new EventEmitter<void>();
 @Output() closeSidebarEvent = new EventEmitter<void>(); // nouvel event

  onHamburgerClick() {
    this.toggleSidebarEvent.emit();
  }
  onNavLinkClick() {
    this.closeSidebarEvent.emit(); // ferme la sidebar quand on clique sur un lien
  }
  logout() {

  // supprimer les données utilisateur
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  // rediriger vers login
  this.router.navigate(['/login']);

}
}
