import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs/Rx';
import { Account } from '../model/account';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor( private http : HttpClient) { }

  getAccounts(): Observable<Account[]> {
    //return accountS;
    return this.http.get<Account[]> (AppSettings.API_ENDPOINT + '/accounts');
  }

  addAccount(account: Account): Observable<Account> {
    //accountS.push(account);
    return this.http.post<Account>(AppSettings.API_ENDPOINT + '/account',account)
  }

  updateAccount(account:Account): Observable<Account>{
    return this.http.put<Account>(AppSettings.API_ENDPOINT +'/account/' + account.id,account);
  }

  removeAccount(account: Account): Observable<any> {
    return this.http.delete(AppSettings.API_ENDPOINT +'/account/'+account.id)
  }
}