import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AgentDialog } from '../../dialog/agent-dialog/agent-dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent',
  imports: [MatTooltipModule, MatButtonModule, CommonModule],
  templateUrl: './agent.html',
  styleUrl: './agent.css',
})
export class Agent {
  @ViewChild('agentModal') agentModal!: TemplateRef<any>;
  isEdit: boolean = false;
  selectedAgent?: Agent;
  showModal: boolean = false;

  constructor(private dialog: MatDialog) { }

  openAddAgentDialog() {
    this.dialog.open(AgentDialog, {
      width: '500px',
      disableClose: true
    });
  }
  agents = [
    {
      nom: "John Michael",
      service: "Organisation",
      poste: "Manager",
      telephone: "+33 6 45 12 78 90",
      statut: "Actif",
      dateEmbauche: "23/04/2018",
      photo: "assets/img/team-1.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Actif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Inactif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Actif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Actif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Inactif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Actif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Inactif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Inactif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    },
    {
      nom: "Jane Doe",
      service: "IT",
      poste: "Développeuse",
      telephone: "+33 6 22 45 98 10",
      statut: "Actif",
      dateEmbauche: "12/06/2020",
      photo: "assets/img/team-2.jpg"
    }
  ];

}
