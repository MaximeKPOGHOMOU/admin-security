import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

   showAgentForm = false;   // Contrôle l'affichage du formulaire agent
  showCompanyForm = false; // Pour l'entreprise si besoin

  // Quand on clique sur le bouton Agent
  openAgentForm() {
    this.showAgentForm = true;
    this.showCompanyForm = false; // masquer l'autre formulaire si nécessaire
  }

  // Quand on clique sur le bouton Entreprise
  openCompanyForm() {
    this.showCompanyForm = true;
    this.showAgentForm = false;
  }
showPassword = false;

togglePassword(){
  this.showPassword = !this.showPassword;
}
backToType(event: Event) {
  event.preventDefault(); // empêche le navigateur de recharger ou d’aller ailleurs
  this.showAgentForm = false;
  this.showCompanyForm = false;
}
}
