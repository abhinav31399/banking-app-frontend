import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.html',
})
export class Withdraw {

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

      this.accountService.Withdraw(this.id, this.account.balance).subscribe(data => {

        this.account = data;
        this.successMessage = "Withdrawal Successful!";

        setTimeout(() => {
          this.router.navigate(['/accounts']);
        }, 1200);
      });

    } else if (this.account.balance > 1000000) {
      this.errorMessage = "Amount must be less than 10 lakh";

    } else {
      this.errorMessage = "Invalid amount. Please enter a valid value.";

      setTimeout(() => {
        this.errorMessage = "";
      }, 1500);
    }
  }

  isValidAmount(amount: number): boolean {
    return amount > 0 && amount < 10000000;
  }
}