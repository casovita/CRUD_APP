import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
   // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'api/Products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/ReadProducts`);
  }

  addProduct(newProduct: Product): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/CreateProduct`, newProduct)
      .pipe(map((response: Response) => response.ok));
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions)
      .pipe(map((response: Response) => response.ok))
  }

  editProduct(editedProduct: Product) {
    return this.http.put(`${this.baseUrl}/EditProduct`, editedProduct)
      .pipe(map((response: Response) => response.ok))
  }
}


