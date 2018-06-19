import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isLogged: boolean = false;
  constructor(private http: HttpClient) { }
  
  getBalance(key){
    return this.http.get(environment.API + `account/${key}/balance`);
  }
  getTransactions(key){
    return this.http.get(environment.API + `account/${key}/transactions`);
  }
  transfer(data){
    return this.http.post(environment.API + 'account/transfer', data);
  }
}
