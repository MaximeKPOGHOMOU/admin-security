import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AgentDialog } from '../../dialog/agent-dialog/agent-dialog';

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
  
  constructor(private dialog: MatDialog) {}

  openAddAgentDialog() {
  this.dialog.open(AgentDialog, {
    width: '500px',
    disableClose: true
  });
}

}
