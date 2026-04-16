import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.html',
})
export class Deposit {

  id: number = 0;
  account: Account = new Account();

  successMessage = "";
  errorMessage = "";

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.accountService.getAccountById(this.id).subscribe(data => {
      this.account = data;
    });
  }

  onSubmit() {

    this.successMessage = "";
    this.errorMessage = "";

    if (this.isValidAmount(this.account.balance)) {

      this.accountService.deposit(this.id, this.account.balance).subscribe(data => {

        this.account = data;

        this.successMessage = "Deposit Successful!";

        setTimeout(() => {
          this.router.navigate(['/accounts']);
        }, 1200);
      });

    } else {
      this.errorMessage = "Enter a valid amount (1 - 1 Cr)";

      setTimeout(() => {
        this.errorMessage = "";
      }, 1500);
    }
  }

  isValidAmount(amount: number): boolean {
    return amount > 0 && amount < 10000000;
  }
}