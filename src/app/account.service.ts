import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9898/homeloanrest/api";


 findAccount(loanid:number){
    return this.httpClient.get(this.baseUrl+"/account/"+loanid);
  }

  getAccountAdmin(){
    return this.httpClient.get(this.baseUrl+"/account");
  }

  addAccount(account:Account){
    return this.httpClient.post(this.baseUrl+"/account/", account);

  }
}
