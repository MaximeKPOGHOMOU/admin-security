import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
showPassword = false;

togglePassword(){
  this.showPassword = !this.showPassword;
}
}
