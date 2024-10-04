import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Personal } from '../models/Personal';
import { myInterceptorInterceptor } from '../interceptors/my-interceptor.interceptor';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  //por si acaso
  /*  
     private readonly _url = inject(HttpClient); 
  */

  private url: string = 'http://localhost:3000';

  constructor(private myService: HttpClient) { 
  }

  login(personal: Personal): Observable<any> {
    return this.myService.post(`${this.url}/api/personal/login`, personal)
  }
  
  search(name: string): Observable<any> {
    return this.myService.get(`${this.search}/api/product/${name}`)
  }

  searchNameStepOnexD(name: string): Observable<any> {
    return this.myService.get(`${this.url}/api/product/find/:${name}`)
  }

  findByNameBrand(name: string, brand: string): Observable<any> {
    return this.myService.get(`${this.url}/api/product/find/${name}/${brand}`)
  }

  deleteProduct(name: string, brand: string): Observable<any> {
    return this.myService.delete(`${this.url}/api/product/${name}/${brand}`)
  }

  getData(): Observable<any> {
    return this.myService.get(`${this.url}/api/product`);
  }

  postProduct(product: Product): Observable<any> {
    return this.myService.post(`${this.url}/api/product`, product);
  }

  putProduct(name: string, brand: string ,product: Product): Observable<any> {
    return this.myService.put(`${this.url}/api/product/update/${name}/${brand}`, product)
  }
  
}
