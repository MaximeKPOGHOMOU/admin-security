import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-agent',
  imports: [MatTooltipModule, MatButtonModule],
  templateUrl: './agent.html',
  styleUrl: './agent.css',
})
export class Agent {
   @ViewChild('agentModal') agentModal!: TemplateRef<any>;
  isEdit: boolean = false;
  selectedAgent?: Agent;
  showModal: boolean = false;
  
  // ouvrir la boîte de dialogue
  openAgentForm(agent?: Agent) {
    this.selectedAgent = agent;
    this.isEdit = !!agent;
    this.showModal = true;
  }

  // fermer la boîte de dialogue
  closeAgentForm() {
    this.selectedAgent = undefined;
    this.showModal = false;
  }

}
