import { Injectable } from '@angular/core';9
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Account {
  id!: number;

  firstName!: string;
  middleName!: string;
  lastName!: string;

  email!: string;
  accountNumber!: string;

  balance!: number;

  phoneNumber!: string;
  address!: string;
}
