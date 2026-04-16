import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
})
export class Signup {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignup() {
    console.log(this.name, this.email, this.password);

    // redirect after signup
    this.router.navigate(['/login']);
  }
}