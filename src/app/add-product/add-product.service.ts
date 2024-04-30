import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Products} from '../Product'
@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(public http: HttpClient) { }

  postProduct (product : Products | any){
    return this.http.post ('http://localhost/addProduct.php',product);
  }
}