import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ClientDialog } from '../../dialog/client-dialog/client-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [MatTooltipModule, MatButtonModule, CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
    @ViewChild('agentModal') agentModal!: TemplateRef<any>;
  isEdit: boolean = false;
  selectedAgent?: Client;
  showModal: boolean = false;
  
  constructor(private dialog: MatDialog) {}

  openAddClientDialog() {
  this.dialog.open(ClientDialog, {
    width: '500px',
    disableClose: true
  });
}
agents = [
{
nom: "John Michael",
email: "maxime@gmail.com",
adresse: "Manager",
telephone: "+33 6 45 12 78 90",
statut: "Actif",
dateDebutContrat: "23/04/2018",
dateFinContrat: "23/04/2018",
},
{
nom: "John Michael",
email: "maxime@gmail.com",
adresse: "Manager",
telephone: "+33 6 45 12 78 90",
statut: "Inactif",
dateDebutContrat: "23/04/2018",
dateFinContrat: "23/04/2018",
},
{
nom: "John Michael",
email: "maxime@gmail.com",
adresse: "Manager",
telephone: "+33 6 45 12 78 90",
statut: "Actif",
dateDebutContrat: "23/04/2018",
dateFinContrat: "23/04/2018",
},
];

}
