import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Personal } from '../models/Personal';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  //por si acaso
  /*  
     private readonly _url = inject(HttpClient); 
  */

  private url: string = 'http://localhost:3000';

  constructor(private myService: HttpClient) { }


  login(personal: Personal): Observable<any> {
    return this.myService.post(this.url, personal)
  }

  getData(): Observable<any> {
    return this.myService.get(this.url);
  }

  postProduct(product: Product): Observable<any> {
    return this.myService.post(this.url, product);
  }

  putProduct(name: string, product: Product): Observable<any> {
    return this.myService.put(`${this.url}/${name}`, product)
  }
  
}
