import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInputModule, MatLabel } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-agent-dialog',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './agent-dialog.html',
  styleUrl: './agent-dialog.css',
})
export class AgentDialog {
   constructor(private dialogRef: MatDialogRef<AgentDialog>) { }
    closeDialog() {
    this.dialogRef.close(); // ferme la boîte de dialogue
  }
  selectedFileName = '';

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.selectedFileName = file.name;
    console.log(file);
    // ici tu peux envoyer le fichier à ton serveur ou le stocker
  }
}

}
