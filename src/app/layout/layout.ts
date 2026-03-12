import { Component } from '@angular/core';
import { Navbar } from "../shared/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../shared/footer/footer";
import { Sidebar } from "../shared/sidebar/sidebar";

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

   mobileOpen = false; // état du sidebar

  toggleSidebar() {
    this.mobileOpen = !this.mobileOpen;
  }
}
