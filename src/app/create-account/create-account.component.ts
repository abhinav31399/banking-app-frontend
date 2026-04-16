import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  account: Account = new Account();
  accountCreate: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  onSubmit() {
    this.accountService.createAccount(this.account).subscribe((data: Account) => {
      console.log(data);
      this.accountCreate = true;

      // Optional: redirect after 1.5 sec
      setTimeout(() => {
        this.router.navigate(['/accounts']);
      }, 1500);
    });
  }
}