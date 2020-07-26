import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getPurchases() {
    return this.http.get(`${url}/purchase/`).pipe(map((data: any) => {
      return data;
    }));
  }
  getPurchaseById(id) {
    return this.http.get(`${url}/purchase/${id}`).pipe(map((data: any) => {
      return data;
    }));
  }
}
