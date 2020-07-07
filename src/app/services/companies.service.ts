import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config/url';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http:HttpClient) { }
  getCompaniesPresentation(){
   
    return this.http.get(`${url}/companies/`).pipe( map( (data: any) => {
      return data;
    }) );
  }
}
