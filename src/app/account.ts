import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Account {

     id!: number;
     accountHolderName!: string;
     balance!: number;

private baseUrl = "http://localhost:8080/api/accounts"


}
