import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService,private router:Router) {}

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
    });
}

getAccounts() {
  this.accountService.getAllAccounts().subscribe(data => {
    this.accounts = data;
  });
}

deposit(id:number) {
  
  this.router.navigate(['/deposit',id])
}

withdraw(id:number){

    this.router.navigate(['/withdraw',id])

}

delete(id:number){

    this.accountService.delete(id).subscribe( data => {

      console.log(data);
      this.getAccounts();
    } )

}

view(id:number){


  this.router.navigate(['/account-details',id])
}



}