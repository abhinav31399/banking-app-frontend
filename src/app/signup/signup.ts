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

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  onSignup() {
    console.log(
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.phone
    );

    // redirect after signup
    this.router.navigate(['/login']);
  }
}