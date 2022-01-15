import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previewdetails } from './previewdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9898/homeloanrest/api";

  getCustomer()
{
  return this.httpClient.get(this.baseUrl+"/customer");
}

addValue(preview:Previewdetails)
{
  return this.httpClient.post(this.baseUrl+"/customer",preview);
}

addLogin(customerid?:number)
{
  return this.httpClient.get(this.baseUrl+"/login/"+customerid);
}
// logincustomer(uniqid:number){
//   return this.httpClient.get(this.baseUrl+"/users/"+uniqid);
// }


 searchbycustomerid(customerid:number)
{
  console.log(customerid+ "From Service");
  return this.httpClient.get(this.baseUrl+"/getcustomer/"+customerid);
}

}

