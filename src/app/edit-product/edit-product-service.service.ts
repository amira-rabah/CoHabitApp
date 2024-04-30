import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class EditProductServiceService {

  constructor(private http: HttpClient) { }
  getProductById(id:number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost/edit-product/editProductGET.php?idProduct=${id}`);
  }

  updateProduct(product: Products): Observable<any> {
    console.log(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>('http://localhost/edit-product/editProductUpdate.php', product, { headers });
  }
}
