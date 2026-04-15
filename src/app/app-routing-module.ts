import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Deposit } from './deposit/deposit';
import { Withdraw } from './withdraw/withdraw';
import { AccountDetails } from './account-details/account-details';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'deposit', component: Deposit },
  { path:'deposit/:id',component:Deposit},
  { path:'',redirectTo:'accounts',pathMatch:'full'},
  { path:'withdraw/:id',component:Withdraw,},
  { path: 'withdraw', component: Withdraw },
  { path: 'account-details/:id', component:AccountDetails},
  { path: 'account-details', component:AccountDetails},

];