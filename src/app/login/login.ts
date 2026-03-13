import { Component } from '@angular/core';
/* ✅ Import Angular Material Modules nécessaires */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatCardModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
showPassword = false;

togglePassword(){
  this.showPassword = !this.showPassword;
}
}
