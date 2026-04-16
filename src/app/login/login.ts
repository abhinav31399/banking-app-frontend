import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // 🔥 For now just simulate login
    console.log(this.username, this.password);

    // redirect after login
    this.router.navigate(['/accounts']);
  }
}