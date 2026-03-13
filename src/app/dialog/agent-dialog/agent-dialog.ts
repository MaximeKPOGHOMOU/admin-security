import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-agent-dialog',
  templateUrl: './agent-dialog.html',
  styleUrls: ['./agent-dialog.css'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule] // si standalone
})
export class AgentDialog {
  constructor(private dialogRef: MatDialogRef<AgentDialog>) { }

  closeDialog() {
    this.dialogRef.close(); // ferme la boîte de dialogue
  }

  // Upload photo
  selectedPhotoName = '';
  onPhotoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedPhotoName = file.name;
      console.log(file);
      // envoyer le fichier au serveur si besoin
    }
  }

  // Upload document
  selectedPieceName = '';
  onPieceSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedPieceName = file.name;  // corrige ici
      console.log(file);
      // envoyer le fichier au serveur si besoin
    }
  }
}