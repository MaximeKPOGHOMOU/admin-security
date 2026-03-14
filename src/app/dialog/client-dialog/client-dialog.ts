import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-dialog',
  imports: [],
  templateUrl: './client-dialog.html',
  styleUrl: './client-dialog.css',
})
export class ClientDialog {

    constructor(private dialogRef: MatDialogRef<ClientDialog>) { }

  closeDialog() {
    this.dialogRef.close(); 
  }


}
