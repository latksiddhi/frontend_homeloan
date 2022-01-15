import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9898/homeloanrest/api";

  //RETRIEVING ALL APPLICATIONS
  getApplication()
  {
    return this.httpClient.get(this.baseUrl+"/application");
  }

  //ADDING NEW APPLICATION

  addApplication(application:Application){
    return this.httpClient.post(this.baseUrl+"/application/",application);
  }

  deleteApp(applicationid:number){
   return this.httpClient.delete(this.baseUrl+"/application/" +applicationid);
  }

  findApplication(applicationid:number){
    return this.httpClient.get(this.baseUrl+"/application/" +applicationid);
  }

  updateApplication(application:Application){
    return this.httpClient.put(this.baseUrl+"/application/" +application.applicationid,application);
  }
}



