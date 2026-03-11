import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'], // corrige styleUrl → styleUrls
})
export class Sidebar {
  @Input() mobileOpen: boolean = false;            // contrôle sidebar ouverte/fermée
  @Output() closeSidebarEvent = new EventEmitter<void>(); // émettre quand on veut fermer

  // Méthode appelée lors du clic sur un lien
  onNavLinkClick() {
    if (this.mobileOpen) {
      this.closeSidebarEvent.emit(); // ferme seulement si mobile
    }
  }

  // Méthode pour fermer manuellement
  close() {
    this.closeSidebarEvent.emit();
  }
}