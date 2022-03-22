import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/products/"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct(): Observable<any>{
    return this.http.get(apiUrl)
  }
  getOneProduct(id: Number | String): Observable<any>{
    return this.http.get(apiUrl+id)
  }
  addProduct(data: any): Observable<any>{
    return this.http.post(apiUrl, data)
  }
  update(data:any): Observable<any>{
    return this.http.put(apiUrl+data.id, data)
  }
  delete(id: Number | String): Observable<any>{
    return this.http.delete(apiUrl+id)
  }
}
