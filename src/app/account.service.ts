import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { Withdraw } from './withdraw/withdraw';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

private baseUrl = "http://localhost:8080/api/accounts"; 
  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  createAccount(account:Account):Observable<Account> {

   return  this.httpClient.post<Account>(`${this.baseUrl}`,account)
  }

  getAccountById(id:number):Observable<Account> {

    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`)
  }

  deposit(id:number,amount:number):Observable<Account>{
     
    const request = { amount } // data ko aise pass karna hai body object ke form me, otherwiswe directly pass karenge to error aaegi.

    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/deposit`,request)
  }

  Withdraw(id:number,amount:number):Observable<Account>{
       const request = { amount }
       return this.httpClient.put<Account>(`${this.baseUrl}/${id}/withdraw`,request)

  }
  
  delete(id:number):Observable<Account>{
       
       return this.httpClient.delete<Account>(`${this.baseUrl}/${id}/delete`)

  }
}

