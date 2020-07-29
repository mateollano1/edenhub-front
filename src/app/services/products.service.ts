import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config/url';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProductsByCategory(type){
    return this.http.get(`${url}/products/search?type=${type}`).pipe( map( (data: any) => {
      return data;
    }) );
  }
  getProductsBySearch(type){
    return this.http.get(`${url}/products/searchP?q=${type}`).pipe( map( (data: any) => {
      return data;
    }) );
  }
  getBillByProducts(products){
    return this.http.post(`${url}/products/bill`, products).pipe( map( (data: any) => {
      return data;
    }) );
  }
  postPurchase(purchase){
    return this.http.post(`${url}/purchase`, purchase).pipe( map( (data: any) => {
      return data;
    }) );
  }
}
