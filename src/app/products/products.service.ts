import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseURL = 'http://localhost/DeleteProduct.php';

  constructor(private http: HttpClient) { }

  getProducts(idSpace : string ): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/ConsulterProducts.php?idSpace='+idSpace);
  }
  deleteProduct(productId: number):Observable<any[]>{
    console.log (productId);
    return this.http.delete<any[]>(`${this.baseURL}?id=${productId}`);
  }
}