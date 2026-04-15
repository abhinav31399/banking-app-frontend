import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,   // ✅ VERY IMPORTANT
  imports: [CommonModule, FormsModule],   // ✅ REQUIRED
  templateUrl: './deposit.html',
  styleUrls: ['./deposit.css'],   // ✅ FIXED (plural)
})
export class Deposit {

  id:number=0;
  account: Account = new Account();

  constructor(private accountService:AccountService,private rout:ActivatedRoute,private router:Router){

  }

  ngOnInit(){

    this.id= this.rout.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data => {

      this.account=data;
    })
  }

  successMessage="";
  errorMessage="";

  onSubmit() {
     
    if(this.isValidAmount(this.account.balance)) {
    this.accountService.deposit(this.id,this.account.balance).subscribe(data => {

      this.account= data; // this is updated data that has been added with previous balance and the amount that has been deposited.
      this.successMessage= "Deposit SuccessFully... "

      setTimeout(() => {
      this.router.navigate(['/accounts'])

      },1000)
      
      
    })
  } else {


     setTimeout(() => {
       this.errorMessage = ""

     },1000)
  }

 

}

 isValidAmount(amount:number):boolean{
    return amount > 0 && amount < 10000000
  }

}