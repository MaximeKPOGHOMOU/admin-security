import { Component } from '@angular/core';
import { ClientDialog } from '../client-dialog/client-dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-site-dialog',
  imports: [],
  templateUrl: './site-dialog.html',
  styleUrl: './site-dialog.css',
})
export class SiteDialog {
      constructor(private dialogRef: MatDialogRef<ClientDialog>) { }

  closeDialog() {
    this.dialogRef.close(); 
  }

}
