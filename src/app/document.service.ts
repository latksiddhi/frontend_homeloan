import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from './document';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient:HttpClient) { }

baseUrl:string="http://localhost:9898/homeloanrest/api";

addDocument(document:Document){
  return this.httpClient.post(this.baseUrl+"/document/",document);
}

}