import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MOUNTAIN-HOUSE-OF-GOD-MINISTRY';
  
  ImagePath: string = "https://plus.unsplash.com/premium_photo-1675874984346-2837d5e423a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29yc2hpcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
}
