import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css',
})
export class AccountDetails {

  id:number=0;
  account:Account=new Account();
  constructor(private accountService:AccountService,private route:ActivatedRoute){}

  ngOnInit(){

    this.id=this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe( data => {

      this.account=data;
    })
  }
}
